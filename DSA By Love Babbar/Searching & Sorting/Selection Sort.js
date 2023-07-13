// In selection sort we have to go for a n rounds and 
// in each round we have to swap the i'th index to lowest value

//  let's take an unsoted array
let arr = [1, 7, 9, 2, 3, 0]
let size =  arr.length
console.log(selectionSort(arr));




// let's create a function of selection sort that takes a unsorted array and returns the sorted array

function selectionSort(arr){
    for(let i =0; i< size - 1; i++){
        let min = i;
        for(let j =i + 1; j< size; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        let temp = arr[min]
        arr[min] = arr[i]
        arr[i] = temp
        console.log("step ", i, " ", arr);
    }
    return arr;
}
