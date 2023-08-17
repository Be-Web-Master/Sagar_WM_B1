const arr = ["dhanoo", "ritik"]
let str = arr.toString()
console.log(str)
for (let i = 0; i < arr.length; i++) {
    let strLower = arr[i].charAt(0)
    let strUpper =arr[i].charAt(0).toUpperCase();

    str.replace(strLower,strUpper)
    console.log(strLower,strUpper)
}
let newArr = str.split(",")
console.log(newArr)