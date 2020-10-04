require 'sinatra'
require 'docker/compose'

set default_content_type: 'text/json'
set bind: '0.0.0.0'

DC_DIR = ARGV[0]

get '/' do
  content_type 'text/html'
  File.read('public/index.html')
end

get '/api/status' do
  dc = Docker::Compose::Session.new(dir: DC_DIR)
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
