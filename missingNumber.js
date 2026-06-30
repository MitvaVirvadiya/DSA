/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const numTotal = nums.reduce((acc, num) => (
        acc + num
    ), 0)
    let allTotal = 0;
    for (let index = 0; index <= nums.length; index++) {
        allTotal += Number(index)
    }
    return allTotal - numTotal
};

console.log('object :>> ', missingNumber([9,6,4,2,3,5,7,0,1]));