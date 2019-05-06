class Deck
  attr_accessor :tiles

  def initialize
    self.tiles = TILES.shuffle
  end

  TILES = []
  
  suites = ['characters', 'bamboo', 'dots']
  specials = ['East Wind', 'South Wind', "West Wind", "North Wind", "Red", "Green", "White"]
  id = 0 
  v = 0

  suites.each do |suite|
    while v < 9 do 
      v += 1
      4.times do 
        id += 1
        tile = { 
          name: "#{v} of #{suite}",
          id: id,
          value: v,
          suite: suite 
        }
        TILES << tile 
      end 
      
    end 
    v = 0
  end 

  specials.each do |special|
    v += 1
    4.times do 
      id += 1
      tile = {
        name: special,
        id: id,
        value: v,
        suite: "Winds"
      }
      TILES << tile 
    end
  end 
 
  def draw_tile
    self.tiles.shift
  end
end