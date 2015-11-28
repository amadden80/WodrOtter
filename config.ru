# require all the gem dependencies
require 'bundler'
Bundler.require()

# require all the models
Dir['./models/*.rb'].each {|file| require file }

# require all the view based controllers
require './controllers/application_controller'
Dir['./controllers/*.rb'].each {|file| require file }

# require all the api based controllers
require './controllers/api/api_controller'
Dir['./controllers/api/*.rb'].each {|file| require file }

# Map routes to controllers
map('/api/animals'){ run Api::AnimalsController }
map('/smash'){ run SmashController }
map('/'){ run WelcomeController }
