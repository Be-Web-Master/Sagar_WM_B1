// Map:
// Create an empty Map called myMap.
const myMap = new Map();
// Add the following key-value pairs to myMap: "name" - "John", "age" - 25, "city" - "New York".
myMap.set("name","john")
myMap.set("age",25)
myMap.set("city","New York")

// Check if myMap has a key "age". Return true if it exists, otherwise return false.
function fun(num) {
    if (myMap.get(num)) {
        return true
    }
    return false
}
// console.log(fun("agde"));

// Get the value associated with the key "city" from myMap.
// console.log(myMap.get("city"));

// Loop through all the key-value pairs in myMap and log them to the console.
// for (const [key,value] of myMap) {
//     console.log(`key -> ${key} value -> ${value}`);
// }


// Remove the key "name" from myMap.
// console.log(myMap.delete("name"));
// Get the number of key-value pairs in myMap.
// console.log(myMap.size);

// Create a new Map called secondMap and add the same key-value pairs as myMap to it.
// const secondMap = new Map(myMap)
// console.log(secondMap);
// console.log(secondMap.size);

// Merge the key-value pairs from secondMap into myMap.

// for (const [key,value] of myMap) {
//     secondMap.set(key,value)
// }
// console.log(secondMap);
// console.log(secondMap.size);
// Clear all the key-value pairs from myMap.

// myMap.clear()