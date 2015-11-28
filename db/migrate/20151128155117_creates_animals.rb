class CreatesAnimals < ActiveRecord::Migration
  def change

    create_table :animals do |t|
      t.string :name
      t.string :creature_type
      t.string :noise
      t.text :bio
      t.timestamps
    end

  end
end
