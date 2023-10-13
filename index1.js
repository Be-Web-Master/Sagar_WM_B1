// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

const nums = [0, 1, 0, 3, 12];

console.log(moveZeroes(nums));

function moveZeroes(nums) {

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      let temp = nums.splice(i,1)
      nums.push(...temp)
    }
  }
  console.log(nums);
}
