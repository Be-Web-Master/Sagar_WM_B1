// Use the for...of loop to iterate through an array of strings and concatenate them into a single sentence

const arrOfNames = ["dhanoo", "ritik", "dholii"];
let sentance = "";
for (const name of arrOfNames) {
  sentance=sentance+name
}
console.log(sentance);
