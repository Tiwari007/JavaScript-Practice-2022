const getPivot = (arr) => {
  
    // as we know by making graph that we have two monotonic lines one is upper and one is lower
    // so we can you binary serach as they are rotated soted array

    let start = 0
    let end  = arr.length - 1

    while(start < end){
        let mid  = parseInt((start + end)/2)
        if(arr[mid] >= arr[0]) // that means we are in the upper line as we need to find the lowest element that means
                                  // it comes in below line so we have to move our start
        {
            start = mid + 1
        }
        else{
            // now we are in the lower line and lowest element is also in this line so we need to move out end
            end = mid 
        }
    }
    return start
}

let arr = [8,9,1,2,3,5,7]
let indexOfPivot = getPivot(arr)
console.log(`The smallest value is ${arr[indexOfPivot]} at index ${indexOfPivot}`)