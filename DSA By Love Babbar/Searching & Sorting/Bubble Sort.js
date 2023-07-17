function bubbleSort(arr) {
    const n = arr.length;
    let swapped;
    for (let i = 1; i < n; i++) {
      swapped = false;
      for (let j = 0; j < n - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped = true;
        }
      }
      if (!swapped) {
        // If no swaps were made in the inner loop, the array is already sorted
        break;
      }
    }
  }
  
  

  // Test Case 1
const arr1 = [5, 3, 8, 1, 2];
bubbleSort(arr1);
console.log(arr1); // Output: [1, 2, 3, 5, 8]

// Test Case 2
const arr2 = [10, 5, 2, 8, 3];
bubbleSort(arr2);
console.log(arr2); // Output: [2, 3, 5, 8, 10]

// Test Case 3
const arr3 = [1, 2, 3, 4, 5];
bubbleSort(arr3);
console.log(arr3); // Output: [1, 2, 3, 4, 5]

// Test Case 4
const arr4 = [5, 4, 3, 2, 1];
bubbleSort(arr4);
console.log(arr4); // Output: [1, 2, 3, 4, 5]

// Test Case 5
const arr5 = [1];
bubbleSort(arr5);
console.log(arr5); // Output: [1]
