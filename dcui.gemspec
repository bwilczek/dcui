# frozen_string_literal: true

$LOAD_PATH.push File.expand_path('lib', __dir__)

Gem::Specification.new do |s|
  s.name         = 'watir_pump'
  s.version      = '0.0.1'
  s.summary      = 'Docker Compose Web UI'
  s.author       = 'Bartek Wilczek'
  s.email        = 'bwilczek@gmail.com'
  s.files        = Dir['README.md', 'lib/**/*.rb', 'server.rb', 'public/*'] + Dir['bin/*']
  s.executables  << 'dcui'
  s.require_path = 'lib'
  s.homepage     = 'https://github.com/bwilczek/dcui'
  s.license      = 'MIT'
  s.required_ruby_version = '~> 2.6'
  s.add_dependency 'sinatra', '~> 2.1'
  s.add_dependency 'docker-compose', '~> 1.1'
end
