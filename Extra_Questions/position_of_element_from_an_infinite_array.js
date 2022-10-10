const binary_search = (nums, target, start, end) => {
    while(start <= end){
        mid = parseInt((start + end) / 2)
        if (nums[mid] == target){
            return mid;
        }
        else if(nums[mid] > target){
            end = mid - 1 
        }
        else {
            start = mid + 1
        }
    }
    return -1
}

const position_of_element_from_an_infinite_array = (nums, target) => {
    let start = 0;
    let end = 1;
    while(target > nums[end]){
        let newStart = end +  1;
        end = end + (end - start + 1) * 2;
        start = newStart;

    }

    return binary_search(nums, target, start, end);
}



console.log(position_of_element_from_an_infinite_array([1,2,3,4,5,6,7,8,9,12,14,16,23,34,45,56,67,78,89,90], 11))