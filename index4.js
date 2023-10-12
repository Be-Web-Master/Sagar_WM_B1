// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

function check(num1, num2) {
  let median = -1;
  const mergeArr = num1.concat(num2);
  mergeArr.sort();
  let n = mergeArr.length;
  for (let i = 0; i <n/2; i++) {
    if (n%2==0) {
        console.log("even");
    }
  }
}

const nums1 = [1, 2];
const nums2 = [3,4];
// Input: nums1 = [1,3], nums2 = [2]
// const nums1 = [1, 3];
// const nums2 = [2];
console.log(check(nums1, nums2));
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
