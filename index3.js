// console.log("3------3");
// Find the average score of a player.
// function getAverage(arr) - this function will return average score of a player
// arr - an array contains the balls played by the player and the runs, this array also include "wide" ball or "Wide" ball, you don't have to include this ball in players score
// the index of the array is a ball
// and the value at the index are the runs

// const arr = [4,2,1,4,6,"wide",4,2,4,"Wide", 4,6,"wide",6,6]
// output - 4.083s

function getAverage(arr) {
let avg = 0
let count = 0
let len = arr.length
for (let i = 0; i < len; i++) {
   if (arr[i]==="wide"||arr[i]==="Wide") {
     count++
     continue;

   }
   avg+=arr[i]
}
avg= avg/(len-count)

return avg.toFixed(3)
}




const arr = [4,2,1,4,6,"wide",4,2,4,"Wide", 4,6,"wide",6,6]
// output - 4.083s
console.log(getAverage(arr));