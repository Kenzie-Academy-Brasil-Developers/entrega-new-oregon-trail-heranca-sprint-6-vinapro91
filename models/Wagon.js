class Wagon {
    constructor (capacity){
        this._capacity = capacity;
        this._passengers = [];
    }
    set passengers(traveler){
        this._passengers.push(traveler)
    }
    get passengers(){
        return this._passengers
    }
    set capacity(int){
        this._capacity = int
    }
    get capacity(){
        return this._capacity
    }

    getAvailableSeatCount() {
        let emptySeat = this._capacity - this._passengers.length
        return emptySeat
    }
    join(traveler){
        if (this.getAvailableSeatCount() > 0){
            this.passengers = traveler
        }
    } 
    
    shouldQuarantine(){
        
        for (let i = 0; i< this.passengers.length; i++){
            let healthy = this.passengers[i].isHealthy === "true" ? true : false;
            
            if (healthy === false){

                return true
            }
        }
        return false
    }
    totalFood() {
        let contador = 0
        for (let i = 0; i< this._passengers.length; i++){
            contador += this._passengers[i].food   
        }
        return contador
    }
}

module.exports = Wagon;