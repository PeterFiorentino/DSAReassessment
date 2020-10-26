// Given an int array length 3, if there is a 2 in the array immediately followed by a 3, set the 3 element to 0. 
// Return the changed array.

// Examples

// fix23([1, 2, 3]) → 1,2,0
// fix23([2, 3, 5]) → 2,0,5
// fix23([1, 2, 1]) → 1,2,1

function fix23(nums){
    if(nums[0] === 2 && nums[1] === 3) {
      return [nums[0], 0, nums[2]]
    }
    if(nums[1] === 2 && nums[2] === 3) {
      return [nums[0], nums[1], 0]
    }
    return nums
  }