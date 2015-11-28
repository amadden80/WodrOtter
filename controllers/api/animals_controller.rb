module Api
  class AnimalsController < ApiController

    get '/' do
      Animal.all.to_json
    end

    get '/:id' do
      animal = Animal.find(params[:id])
      animal.to_json
    end

    post '/' do
      animal = Animal.create(animal_params())
      animal.to_json
    end

    patch '/:id' do
      animal = Animal.find(params[:id])
      animal.update(animal_params)
      animal.to_json
    end

    delete '/:id' do
      Animal.delete(params[:id])
      {status: 204, message: 'Successful Delete'}.to_json
    end

    private

    def animal_params
      all_params = params[:animal] || {}
      all_params.delete(:id)
      all_params
    end

  end
end
