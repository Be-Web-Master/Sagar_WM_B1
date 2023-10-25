let nums = [-1, 0, 1, 2, -1, -4];

console.log(notContainDuplicateTriplets(nums));

function notContainDuplicateTriplets(nums) {
  let result = [];
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (i != j && i != k && j != k && nums[i] + nums[j] + nums[k] == 0) {
          if(nums[j] === nums[k]) {
            continue;
          } else {
            result.push([nums[i], nums[j], nums[k]]);
          }
        }
      }
    }
  }
  return result;
}
