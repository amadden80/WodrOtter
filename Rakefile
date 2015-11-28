require 'bundler'
Bundler.require

require "sinatra/activerecord/rake"


namespace :db do

  desc "Add THE three animals"
  task :three_animals do
    require './models/animal'

    Animal.create({
      name: "Lichard",
      creature_type: "lemur",
      noise: "<3",
      bio: "I can \"play the 'Optimism' card\", i.e. I have a MetroCard that says 'Optimism' on it.",
    })

    Animal.create({
      name: "Omily",
      creature_type: "otter",
      noise: "</3",
      bio: "Sorry I'm not sorry... in general.",
    })

    Animal.create({
      name: "Kathew",
      creature_type: "koala",
      noise: "Weeeee!",
      bio: "Some aren't loyal to you at all... they are loyal to their need in you.  Once their need changes... so does their loyalty.  When was the last time your needs changed?  Did you keep the same friends?",
    })
  end

end
