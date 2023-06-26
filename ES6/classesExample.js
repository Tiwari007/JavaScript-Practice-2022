// Create a class Player with the following:
// - Add a Name and Country properties
// - Add a function that when it runs should print into the console ("Messi was born in Argentina");
// - Make sure to adapt this function to receive dynamic Names and Clubs.

// Create a Subclass called TennisPlayer that extends from the class Player
// - Add a new property Age.
// - Add a function that when it runs should print into the console something similar ("Rafael Nadal is 34 years old and knows how to play Tennis");
// - Make sure the Name and Age are dynamic.


class Player{
    constructor(Name, Country){
        this.Name = Name;
        this.Country = Country;
    }
    
    PlayerData(){
        console.log(`${this.Name} was born in ${this.Country}`)
    }
}

class Tennis extends Player{

    constructor(Name, Country, Age){
        super(Name, Country);
        this.Age = Age;
    }
    
    
    TennisData(){
        console.log(`${this.Name} is ${this.Age} years old and knows how to play Tennis`)
    }
}

const players = new Player('Sunil Chettri', 'India')
players.PlayerData()

const tennisPlayers = new Tennis('Sunil Chettri', 'India', 24)
tennisPlayers.TennisData()