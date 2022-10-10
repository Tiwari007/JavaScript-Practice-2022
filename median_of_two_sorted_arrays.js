var findMedianSortedArrays = function(nums1, nums2) {
    let list = [...nums1, ...nums2]
    console.log(list.sort((a, b) => a - b))
    let prev = 0
    let next = 0
    if(list.length % 2 === 0){
        prev = (list.length / 2) - 1
        next = (list.length / 2) 
        console.log("previous ", prev);
        console.log("next ", next );

        return (list[prev] + list[next]) / 2
    }
    else{
        return list[parseInt(list.length / 2)]
    }


};


console.log(parseFloat(findMedianSortedArrays([1, 3], [2])))