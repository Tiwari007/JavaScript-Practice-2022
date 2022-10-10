const car = {
    color: "green",
    price: 234000
}

function purchaseCar(mileage){
    console.log(`color of car is ${this.color} and price is $${this.price}. mileage is ${mileage}`);
}

purchaseCar.call(car, 34.4);   // color of car is green and price is $234000
purchaseCar.apply(car, [34.5]);  // color of car is green and price is $234000
const newPurchase = purchaseCar.bind(car)
newPurchase(34.5)  // color of car is green and price is $234000
