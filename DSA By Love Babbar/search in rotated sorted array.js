function findPivot(arr, n) {
    let start = 0;
    let end = n - 1;
    
    while (start < end) {
      let mid = Math.floor((start + end) / 2);
      
      if (arr[mid] > arr[0]) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }
    
    return start;
  }
  
  function binarySearch(s, e, arr, key) {
    let start = s;
    let end = e;
    
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      
      if (key === arr[mid]) {
        return mid;
      } else if (key > arr[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    
    return -1;
  }
  
  function search(arr, n, k) {
    // BRUTE FORCE APPROACH
    // let i = 0;
    // while (i <= n) {
    //   if (arr[i] === k) {
    //     return i;
    //   }
    //   i++;
    // }
    // return -1;
  
    // SECOND APPROACH (as the array is rotated sorted we can use binary search)
  
    // This condition is needed to handle the case when the array is not rotated at all
    if (arr[n - 1] > arr[0]) {
      return binarySearch(0, n - 1, arr, k);
    }
  
    // Let's assume if our array is a rotated sorted array
    let pivotIndex = findPivot(arr, n);
  
    if (k === arr[pivotIndex]) {
      return pivotIndex;
    }
    
    if (k > arr[pivotIndex] && k < arr[0]) {
      return binarySearch(pivotIndex, n - 1, arr, k);
    } else {
      return binarySearch(0, pivotIndex - 1, arr, k);
    }
  }
  
  // Test cases
  const arr1 = [4, 5, 6, 7, 0, 1, 2];
  const n1 = arr1.length;
  const k1 = 0;
  console.log(search(arr1, n1, k1)); // Expected output: 4
  
  const arr2 = [4, 5, 6, 7, 0, 1, 2];
  const n2 = arr2.length;
  const k2 = 3;
  console.log(search(arr2, n2, k2)); // Expected output: -1
  
  const arr3 = [1];
  const n3 = arr3.length;
  const k3 = 0;
  console.log(search(arr3, n3, k3)); // Expected output: -1
  
  const arr4 = [7, 8, 1, 2, 3, 4, 5, 6];
  const n4 = arr4.length;
  const k4 = 2;
  console.log(search(arr4, n4, k4)); // Expected output: 3
  
  const arr5 = [5,18];
  const n5 = arr5.length;
  const k5 = 18;
  console.log(search(arr5, n5, k5)); // Expected output: 6
  