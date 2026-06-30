/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const myMap = new Map()

    for (let i = 0; i < nums.length; i++){
        const ac = target - nums[i]
        if (myMap.has(ac)){
            return [i, myMap.get(ac)]
        } else {
            myMap.set(nums[i], i)
        }
    }
};

console.log(`\x1b[90mFile: index.js - Line: 19  twoSum([2, 7, 11, 15], 9)   ==========>>>  \x1b[0m`, twoSum([2, 7, 11, 15], 9));
