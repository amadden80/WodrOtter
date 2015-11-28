module Api

  class ApiController < Sinatra::Base

    before do
      response.headers['Access-Control-Allow-Origin'] = '*'
      content_type :json
    end

  end

end
