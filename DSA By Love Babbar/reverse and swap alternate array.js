{
    // reverse the array

    let arr = [1,2,3,4,5,6]

    let start = 0
    let end = arr.length - 1

    console.log(start, end);

    while( start <= end){
        // arr[start], arr[end] = arr[end], arr[start]

        temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }

    console.log("arr", arr);
}


{
    // swap alternate elements in array

    let arr = [1,2,3,4,5,6,7,8]
    let size = arr.length - 1

    // for(let i=0; i< size -2;i+2){
    //     temp = arr[i]
    //     arr[i] = arr[i+1]
    //     arr[i+1] = temp
    // }

    let start = 0
    let end = 1

    while(end - 1 < size){
        temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start+=2
        end+=2
    }

    console.log("swap alternate element the resulted array is ", arr);


}