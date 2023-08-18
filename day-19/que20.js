
function reverseGivenNumber(n) {
    let str = n.toString()
    let strToArr = str.split("").reverse().join("")
    return strToArr

}
console.log(reverseGivenNumber(123456));