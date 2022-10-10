const car = {
  color: "green",
  price: 234000,
};

function purchaseCar(mileage) {
  console.log(
    `color of car is ${this.color} and price is $${this.price}. mileage is ${mileage}`
  );
}


// Polyfills of call method
// Function.prototype.myCall = function (context = {}, ...args) {
//   if (typeof this !== "function") {
//     throw new Error(this + "It's not Callable");
//   }
//   context.fn = this;
//   context.fn(...args);
// };

// Polyfills of apply method
// Function.prototype.myApply = function(context ={}, args = []){
//     if(typeof this !== 'function'){
//         throw new Error(this, "It's not callable");
//     }

//     if (!Array.isArray(args)){
//         throw new TypeError("CreativeListArrayLike called on non-object");
//     }

//     context.fn = this;
//     context.fn(...args);
// }

// Polyfills of bind method
Function.prototype.myBind = function(context = {}, ...args){
    if(typeof this !== 'function'){
        throw new Error(this, "It's not callable");
    }

    context.fn = this;
    return function(...newArgs){
        return context.fn(...args, ...newArgs)
    }
}

// purchaseCar.myCall(car, 23.45); // color of car is green and price is $234000. mileage is 23.45
// purchaseCar.myApply(car)   // color of car is green and price is $234000. mileage is 23.5
const newPurchase = purchaseCar.myBind(car,23,43)
console.log(newPurchase())

