function isMatch(arr) {
  const a = "qwertyuiop".split("");
  const b = "asdfghjkl".split("");
  const c = "zxcvbnm".split("");
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (
          a.includes(arr[i][j]) &&
          b.includes(arr[i][j]) ||
          c.includes(arr[i][j])
        )    console.log(arr[i]);

    }
  }
}

const words = ["Hello", "Alaska", "Dad", "Peace"];
// Output: ["Alaska","Dad"]
console.log(isMatch(words));
