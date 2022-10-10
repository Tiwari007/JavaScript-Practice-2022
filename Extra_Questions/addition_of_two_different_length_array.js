const add = () => {
    let a=[2,4,5,6,9,5,6,8,9];
let b=[1,3,4,4,5,6,7,8,9];

if(a.length > b.length){
    let temp=a.map((el,index)=>(el ||0)+(b[index] ||0));
    return temp
}
else{
    let temp=b.map((el,index)=>(el ||0)+(a[index] ||0));
    return temp
}
}


console.log(add())



// let b = [2, 4, 5, 6, 7];
// let a = [1, 3, 4, 2, 4, 5, 7];
// let getSum = (arr1, arr2) => {
//   let main = arr1.length >= arr2.length ? arr1 : arr2;
//   let sec = arr1.length < arr2.length ? arr1 : arr2;
//   return main.map((elem, i) => (sec[i] ? elem + sec[i] : elem));
// };

// const ans = getSum(a, b);
// console.log(ans);
