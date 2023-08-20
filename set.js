// Set
// Create an empty Set called mySet.
const mySet = new Set();
// Add the following values to mySet: 1, 2, 3, 4, 5.
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(5);
// Check if mySet contains the value 3. Return true if it exists, otherwise return false.
function check(value) {
  return mySet.has(value);
}
// console.log(check(3));
// Loop through all the values in mySet and log them to the console.
// for (const key of mySet) {
//     console.log(key);
// }

// Remove the value 4 from mySet.
// mySet.delete(4);
// Create another Set called secondSet and add the values 3, 4, 5, 6, 7 to it.
const secondSet = new Set();
secondSet.add(7);
secondSet.add(6);
secondSet.add(5);
secondSet.add(4);
// Find the intersection of mySet and secondSet, and store the result in a new Set called intersectionSet.
const intersectionSet = new Set();
for (const value of mySet) {
  if (secondSet.has(value)) {
    intersectionSet.add(value);
  }
}
// console.log(intersectionSet);
// Find the union of mySet and secondSet, and store the result in a new Set called unionSet.
// const unionSet = new Set();
// for (const key of mySet) {
//     unionSet.add(key)
// }
// for (const key of secondSet) {
//     unionSet.add(key)
// }
// console.log(unionSet);
// Clear all the values from mySet.
mySet.clear()
// Check if mySet is empty. Return true if it is empty, otherwise return false.

// function funCheck(num) {

// if (num.size===0) {
//     return true
// }
// return false
// }

// console.log(funCheck(mySet));