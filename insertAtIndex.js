/**
 * @param {number[]} nums
 * @param {number} val
 * @param {number} index
 * @return {number[]}
 */
var insertAtIndex = function(nums, val, index) {
    nums.length = nums.length + 1

    for (let i = nums.length - 1; i > index; i--) {
        nums[i] = nums [i - 1]
    } 
    
    nums[index] = val

    return nums
};

console.log('insertAtIndex :>> ', insertAtIndex([1,2,3,4], 99, 2));
// [1, 2, 99, 3, 4]

console.log('insertAtIndex :>> ', insertAtIndex([10,20,30], 5, 0));
// [5, 10, 20, 30]

console.log('insertAtIndex :>> ', insertAtIndex([1,2,3], 7, 3));
// [1, 2, 3, 7]

