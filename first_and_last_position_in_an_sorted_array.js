const search = (nums, target, findStartIndex) => {
  let size = nums.length;

  let ans = -1;
  let low = 0;
  let high = size;

  while (low <= high) {
    mid = parseInt((low + high) / 2);
    if (nums[mid] == target) {
        ans = mid
      if (findStartIndex) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
};

const first_and_last_index_of_sorted_array = (nums, target) => {
  let ans = [-1, -1];
  let start = search(nums, target, true);
  let end = search(nums, target, false);

  ans[0] = start;
  ans[1] = end;

  return ans;
};

console.log(
  first_and_last_index_of_sorted_array(
    [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 5, 6, 7, 8, 6],
    3
  )
);

// ---------------------------------------------------------------------------- //

// const first_and_last_index_of_sorted_array = (nums, target) => {
//     let size = nums.length;
//     let ls1 = 0
//     let ls2 = 0
//     for(let i =0; i< nums.length -1; i++){
//         if(nums[i] == target){
//             ls1 = i
//         }
//         if(nums[size -1] == target){
//             ls2 = size -1
//         }
//         size -= 1
//     }

//     return [ls2, ls1]
// }

// console.log(first_and_last_index_of_sorted_array([1,2,3,3,3,3,3,3,3,4,4,4,5,6,7,8,6], 3))

// ------------------------------------------------------------------------------------ //

// const first_and_last_index_of_sorted_array = (nums, target) => {
// let size = nums.length;
// let ls = []
// for(let i =0; i< size -1; i++){
//     if(nums[i] == target){
//         ls.push(i);
//     }
// }

// return [ls[0], ls[ls.length - 1]]
// }

// console.log(first_and_last_index_of_sorted_array([1,2,3,3,3,3,3,4,4,4,5,6,7,8,6], 3))
