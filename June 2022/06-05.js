function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew * 1.5
  
  this.isWorthIt = function(){
      if((this.draft - this.crew) > 20){
        return true
      }
      return false
  }
}

// refactored 
function Ship(draft,crew) {
    this.crew = crew
    this.draft = draft;
    this.crewWeight = this.crew * 1.5
    this.booty = this.draft - this.crewWeight
    
    this.isWorthIt = function(){
      return this.booty > 20
      }
  }

  class Labrador extends Dog {
    constructor(name, age, gender, master) {
      super(name, age, gender, "Labrador", "Large", master, true)
    }
  }