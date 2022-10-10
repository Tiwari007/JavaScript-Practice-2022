Array.prototype.myFilter= function (cb) {
    // console.log(this);
    let arr = []
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i])){
       arr.push(this[i]);
    }
}
// console.log(">>", arr);
return arr

    // let newArray = []
    // for(let i = 0; i < this.length; i++){
    //     if(arr[i] > 3){
    //         newArray.push(arr[i])
    //     }
    // }

    // return newArray
}




nums = [1,2,3,4,5,6,7,8]
console.log(nums.filter((el) => el > 4));

console.log(nums.myFilter(el => el > 4));


 