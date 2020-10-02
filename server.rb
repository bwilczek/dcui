require 'sinatra'

set default_content_type: 'text/json'
set bind: '0.0.0.0'

get '/' do
  content_type 'text/html'
  File.read('public/index.html')
end

get '/api/:name' do
  {greeting: "Hello #{params['name']}!"}.to_json
end
