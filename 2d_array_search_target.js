const search_in_2d_array = (nums, target) => {
    console.log(nums, target);

    let row = 0
    let column = nums.length -1;

    while(row < nums.length && column >= 0){
        if(nums[row][column] == target){
            return `Element found at index i,j : ${row}, ${column}`;
        }
        else if(nums[row][column] < target){
            row += 1
        }
        else if(nums[row][column] > target){
            column -= 1
        }
    }
    return "Element not Found"
}

console.log(search_in_2d_array([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], 4))