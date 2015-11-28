class WelcomeController < ApplicationController

  # Our Welcoming Route
  get '/' do
    erb :index
  end

end
