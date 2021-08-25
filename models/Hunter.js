const Traveler = require("./Traveler");

class Hunter extends Traveler {
    constructor (name){
        super (name);
        this.food = 2
    }

    hunt() {
        this.food += 5
    }

    eat() {
        if (this.food > 0){
            this.food -=2
        }
        if(this.food <= 0){
            this.isHealthy = false
            this.food = 0
        }
    }
    
    giveFood (traveler, numOfFoodUnits) {
        if(this.food > numOfFoodUnits){
            this.food - numOfFoodUnits
            traveler.food + numOfFoodUnits
        }
    }
}

module.exports = Hunter;