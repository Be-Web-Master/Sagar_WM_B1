const num = 28;
console.log(isPerfectNumberChecker(num));
function isPerfectNumberChecker(num) {
  let sum = 0;

  for (let i = 1; i <= num/2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  console.log(sum);
 return sum === num ? true : false;
}
