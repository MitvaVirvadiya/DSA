/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let arr = []
    const uniqueArr = new Set(nums)
    
    for (let i = 1; i <= nums.length; i++) {
        if (!uniqueArr.has(i)){
            arr.push(i)
        }
    }

    return arr
};

console.log(`\x1b[90mFile: findAllDisappearedNumbers.js - Line: 5  findDisappearedNumbers   ==========>>>  \x1b[0m`, findDisappearedNumbers([4,3,2,7,8,2,3,1]));
