// Find and print the longest word in a sentence using loops.

let sentance = "the quick brown fox jump over the lazy dog";

function longestWordChecker(sentance) {
  let words = sentance.split(" ");
  let longestWord = " ";
  let maxLength = 0;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const wordLength = word.length;
    if (wordLength > maxLength) {
      longestWord = words[i];
      maxLength = wordLength;
    }
  }
  return longestWord;
}

console.log(longestWordChecker(sentance));
