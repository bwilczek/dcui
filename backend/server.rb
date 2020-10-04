require 'sinatra'
require 'docker/compose'

set default_content_type: 'text/json'
set bind: '0.0.0.0'

DC_DIR = ARGV[0]

get '/' do
  content_type 'text/html'
  File.read('public/index.html')
end

get '/api/greeting/:name' do
  {greeting: "Hello #{params['name']}!"}.to_json
end

get '/api/status' do
  raw_config = Docker::Compose::Session.new(dir: DC_DIR).config
  ret = []
  raw_config['services'].each_pair do |service, data|
    ret << { image: data['image'], container_name: data['container_name'], service: service, status: '??'}
  end
  ret.to_json
end
