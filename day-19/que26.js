// Write a program to swap the first and last digits of a number.

function swapFunc(n) {
  //   let endLength = str.length
  let numberAsString = n.toString();

  let str = Array.from(numberAsString);

    const temp = str[0];
    str[0] = str[str.length - 1];
    str[str.length - 1] = temp;

  const stringToNum = str.join("");
  const arrayToNumber = parseInt(stringToNum);
  // return arrayToNumber;
  console.log({ n, numberAsString, str, stringToNum, arrayToNumber });
}

console.log(swapFunc(123));
