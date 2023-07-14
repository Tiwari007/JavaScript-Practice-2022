function rotate(arr, k) {

    let size = arr.length
    for (let j = 0; j < k; j++) {
      let firstValue = arr[0]
      // console.log("firstValue", firstValue)
  
      for (let i = 0; i < size - 1; i++) {
        arr[i] = arr[i + 1]
      }
  
      arr[size - 1] = firstValue;
      // console.log("arr ", arr)
    }

    return arr
  
    // You don't need to return anything , just rotate the array in-place
  
  }

  console.log(rotate([7, 5, 2, 11, 2, 43, 1, 1], 4));