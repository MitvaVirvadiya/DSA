/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  const result = []

  for(let i = 0; i < nums.length; i++){
    let count = 0;
    for (let j = 0; j < nums.length; j++){
        if (nums[j] < nums[i]){
            count++
        }
    }
    result.push(count)
  }

  return result
};

console.log(`\x1b[90mFile: smallerThanCurrentNo.js - Line: 5  smallerNumbersThanCurrent   ==========>>>  \x1b[0m`, smallerNumbersThanCurrent([8,1,2,2,3]));