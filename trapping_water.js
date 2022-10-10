// var trap = function(height) {
//     res = 0;

//     for (i =1; i< height.length - 1 ; i++ ){
//         left  = height[i]
//         for(let j = 0; j < i;j++){
//             left = Math.max(left, height[j])
//         }

//         right  = height[i]
//         for(j = i+1; j <height.length ;j++){
//             right = Math.max(right, height[j])
//         }

//         res = res + Math.min(left, right) - height[i]
//     }

//     return res
// };




// OPTIMIZED VERSION


var trap = function (height) {
  let res = 0;
  let size = height.length;

  let minArray = new Array(size);
  let maxArray = new Array(size);

  let min = height[0];
  for (let i = 0; i < size; i++) {
    if (height[i] > min) {
      min = height[i];
    }
    minArray[i] = min;
  }

  let max = height[size-1];
  for (let i = size; i > 0; i--) {
    if (height[i] > max) {
      max = height[i];
    }
    maxArray[i] = max;
  }

  console.log(height, minArray, maxArray);
  for (let i = 1; i < size - 1; i++) {
    res = res + Math.min(minArray[i], maxArray[i]) - height[i];
  }

  return res;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
