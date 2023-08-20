// ### Session Storage:

// 1. Create a function **`saveToSessionStorage`** that takes two parameters, **`key`** and **`value`**, and uses the **`setItem`** method to save the given key-value pair in sessionStorage.

function saveToSessionStorage(key, value) {
  sessionStorage.setItem(key, value);
}
// saveToSessionStorage("add", 83);
// saveToSessionStorage("add1", 8);

// 2. Write a function **`getSessionStorageItem`** that takes a **`key`** parameter and uses the **`getItem`** method to retrieve the value associated with that key from sessionStorage.

function getSessionStorageItem(key) {
  return sessionStorage.getItem(key);
}
console.log(getSessionStorageItem("add"));
console.log(getSessionStorageItem("add1"));

// 3. Design a function **`removeSessionStorageItem`** that takes a **`key`** parameter and uses the **`removeItem`** method to remove the corresponding key-value pair from sessionStorage.
function removeSessionStorageItem(key) {
    sessionStorage.removeItem(key)
}
// console.log(removeSessionStorageItem("add"));

// 4. Construct a function **`clearSessionStorage`** that uses the **`clear`** method to remove all the stored data in sessionStorage.
function clearSessionStorage() {
    return sessionStorage.clear()
}
// clearSessionStorage()
// console.log(getSessionStorageItem("add1"));


// 5. Create a function **`getSessionStorageKeyByIndex`** that takes an **`index`** parameter and uses the **`key`** method to retrieve the key at that index from sessionStorage.
function getSessionStorageKeyByIndex(i) {
  return sessionStorage.key(i)
}
// console.log(getSessionStorageKeyByIndex(2));

// 6. Write a function **`getSessionStorageLength`** that uses the **`length`** property to return the number of key-value pairs currently stored in sessionStorage.

function getSessionStorageLength() {
    return sessionStorage.length
}
console.log(getSessionStorageLength());