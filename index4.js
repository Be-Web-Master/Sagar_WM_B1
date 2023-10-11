// Input: arr = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// function groupAnagrams(arr) - this will return array of grouped anagrams

function groupAnagrams(arr) {
  const result = [];
  let obj = {};

  for (let i = 0; i < arr.length; i++) {

    obj[arr[i]] = (obj[arr[i]] ?? 0) || (obj[arr[i]] ?? 1)
  }

  console.log(obj);
//   console.log(result);
}

const arr = ["eat", "tea", "tan", "ate","ate", "nat", "bat"];
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams(arr));
