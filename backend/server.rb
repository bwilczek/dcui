require 'sinatra'
require 'docker/compose'

set default_content_type: 'text/json'
set bind: '0.0.0.0'

DC_DIR = ARGV[0]
DC_FILE = ARGV[1]

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
  ret = []
  raw_config['services'].each_pair do |service, data|
    service_data = { image: data['image'], container_name: data['container_name'], service: service}
    service_data[:status] = raw_ps.find { |c| c.labels.include?("com.docker.compose.service=#{service}") }&.status&.to_s || 'down'
    ret << service_data
  end
  ret.to_json
end

post '/api/container/:service/:action' do
  service = params[:service]
  action = params[:action]
  result = case action
           when 'start'
             dc.up(service, detached: true)
           when 'stop'
             dc.stop(service)
           when 'restart'
             dc.restart(service)
           else
             halt 400, "Action #{action} is not supported"
           end
  {service: service, action: action, result: result}.to_json
end
