require 'yaml'
require 'sinatra'
require 'docker/compose'

set default_content_type: 'text/json'
set bind: '0.0.0.0'
set port: ENV.fetch('DCUI_PORT', 4567)
set :server_settings, :timeout => 90

DC_DIR = ENV.fetch('DCUI_APP_DIR', ENV['PWD'])
DC_FILE = ENV.fetch('DCUI_FILE_NAME', 'docker-compose.yml')
DCUI_CONFIG_PATH = "#{DC_DIR}/.dcui.yml"

def dc
  Docker::Compose::Session.new(dir: DC_DIR, file: DC_FILE)
end

get '/' do
  content_type 'text/html'
  File.read('public/index.html')
end

get '/api/status' do
  raw_config = dc.config
  raw_ps = dc.ps
  ret = {services: [], environments: []}
  if File.exists?(DCUI_CONFIG_PATH)
    ret[:environments] = YAML.load_file(DCUI_CONFIG_PATH)
  end
  raw_config['services'].each_pair do |service, data|
    service_data = { image: data['image'], container_name: data['container_name'], service: service}
    service_data[:status] = raw_ps.find { |c| c.labels.include?("com.docker.compose.service=#{service}") }&.status&.to_s || 'down'
    ret[:services] << service_data
  end
  ret.to_json
end

post '/api/container/:services/:action' do
  services = params[:services].split(',')
  action = params[:action]
  result = case action
           when 'start'
             dc.up(*services, detached: true)
           when 'stop'
             dc.stop(*services)
           when 'restart'
             dc.restart(*services)
           else
             halt 400, "Action #{action} is not supported"
           end
  {services: services, action: action, result: result}.to_json
end
