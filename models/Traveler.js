class Traveler {
    constructor (name, isHealthy=true, food=1){
        this._name = name
        this._isHealthy = true
        this._food = Number(food)
    }
    set name(name){
        this._name = name
    }
    get name() {
        return this._name
    }
    set food (food){
        this._food = food
    }
    get food(){
        return this._food
    }
    set isHealthy(helt){
        this._isHealthy = helt
    }
    get isHealthy(){
        return this._isHealthy
    }
    hunt() {
        this._food += 2
    }
    eat() {
        if(this.food === 0){
            this.isHealthy = false
        }
        if (this.food > 0){
            this.food -=1
        }
    }
}

module.exports = Traveler;