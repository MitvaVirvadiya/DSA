/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const uniqueList = new Set(nums)

    const ogLength = nums.length
    const uqLength = [...uniqueList].length
    return ogLength !== uqLength
};

console.log('containsDuplicate :>> ', containsDuplicate([1,2,3,4]));
console.log('containsDuplicate :>> ', containsDuplicate([1,2,3,1]));