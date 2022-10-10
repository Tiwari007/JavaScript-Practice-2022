//  Ceiling of number means a smallest element number which is greater or equal to target

const flooring_of_a_number = (nums, target) => {
    let size = nums.length;
    let low = 0;
    let high = size;

    while(low <= high){
        mid = parseInt((low + high) / 2)
        if(nums[mid] == target){
            return `Flooring Element ${target} Found at index : ${mid} which is Equal to target`
        }
        else if(nums[mid] > target){
            high = mid - 1
        }
        else{
            low = mid + 1
        }
    }
    return `Flooring Element ${nums[high]} of ${target}  Found at index : ${low} which is lesser to target`
}

console.log(flooring_of_a_number([1,3,5,7,9,11], 8))