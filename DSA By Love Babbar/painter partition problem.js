function isPossible(mid, boards, k) {
    let painter = 1;
    let boardSum = 0;
    for (let i = 0; i < boards.length; i++) {
      if (boardSum + boards[i] <= mid) {
        boardSum += boards[i];
      } else {
        painter++;
        if (painter > k || boards[i] > mid) {
          return false;
        }
        boardSum = boards[i];
      }
    }
    return true;
  }
  
  function findLargestMinDistance(boards, k) {
    let temp = 0;
    for (let i = 0; i < boards.length; i++) {
      temp += boards[i];
    }
  
    let start = 0;
    let end = temp;
    let ans = 0;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (isPossible(mid, boards, k)) {
        ans = mid;
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  
    return ans;
  }
  

  // Test case 1
let boards1 = [10, 20, 30, 40];
let k1 = 2;
console.log(findLargestMinDistance(boards1, k1)); // Output: 60

// Test case 2
let boards2 = [5, 10, 15, 20];
let k2 = 3;
console.log(findLargestMinDistance(boards2, k2)); // Output: 20

// Test case 3
let boards3 = [7, 2, 12, 8, 4];
let k3 = 1;
console.log(findLargestMinDistance(boards3, k3)); // Output: 33
