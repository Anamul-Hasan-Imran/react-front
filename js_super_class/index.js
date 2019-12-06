class holiday {
    constructor(destination,days){
        this.destination = destination,
        this.days = days
    }

    info(){
        console.log(`${this.destination} ${this.days}`)
    }
}
 class subHoliday extends holiday {
     constructor(destination,days,gear){
         super(destination,days)
         this.gear = gear
     }
     info(){
        super.info()
        console.log(`bring ur ${this.gear.join('and ur')}`)
     }
 }
 const finalTrip = new subHoliday('everest, nepal',30,['sunglasses camera'])
 finalTrip.info()