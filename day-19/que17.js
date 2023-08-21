// Write a function that takes a positive integer as input and returns the sum of its digits each raised to the power of the number of digits in the original integer.

console.log(sumOfDigitsToPower(123));
function sumOfDigitsToPower(n) {
  const str = n.toString();
  let copy = n;
  let res = 0;
 const numLength = str.length;
 for (let i = 0; i < numLength; i++) {
   let temp = copy%10
   res+=Math.pow(temp,3)
   console.log({temp,res,copy});
   temp = 0;
   copy=Math.trunc(copy/=10)
 }
return res

}
