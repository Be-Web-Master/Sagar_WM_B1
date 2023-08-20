// Number:
// Create a function that takes a number and returns a string representation with exactly 2 digits after the decimal point. (Method: .toFixed())

function fun(num) {
  return num.toFixed(2);
}
// console.log(fun(2.5555));

// Write a function that takes a number and returns a string representation with 3 significant digits. (Method: .toPrecision())

function fun1(num) {
  return num.toPrecision(3);
}
//   console.log(fun1(2.0000002555));

// Implement a function that takes a number in form of string and returns its integer value. (Method: .parseInt())

function fun2(num) {
  return Number.parseInt(num);
}
// console.log(fun2("2.0000002555"));
// Create a function that takes a number in form of string and returns its floating-point value. (Method: .parseFloat())

function fun3(num) {
  return Number.parseFloat(num);
}
// console.log(fun3("2.0000002555"));

// Write a function isFinite , that returns true if a given number is finite. (Method: .isFinite())

function fun4(num) {
  return Number.isFinite(num);
}
// console.log(fun4("2.0000002555"));
// Implement a function that checks if a given value is an integer. (Method: .isInteger())

function fun5(num) {
  return Number.isInteger(num);
}
// console.log(fun5("2.0000002555"));

// Create a function that checks if a given value is not a number. (Method: .isNaN())

function fun6(num) {
  return Number.isNaN(num);
}
// console.log(fun6("555"));

// Write a function that checks if a given value is within the safe integer range in JavaScript. (Method: Number.isSafeInteger())

function fun7(num) {
    return Number.isSafeInteger(num);
  }
//   console.log(fun7(1234567890));

// Create a function that takes a number as input and checks if it is within the range of the largest and smallest floating-point numbers. Return true if it's within the range, otherwise return false. (Method: Number.MAX_VALUE, Number.MIN_VALUE)

function fun8(num) {
    if(num<=Number.MAX_VALUE && num>=Number.MIN_VALUE ){
        return true
    }
    return false
  }
//   console.log(fun8(22999999999999999999999999999999999999999999999999999999999999999999999999999999999999992.35555555555555555555555555555553333));

// Write a function that takes a number as input and checks if it is within the range of the largest and smallest integers. Return true if it's within the range, otherwise return false. (Method: Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)
 function fun9(num) {
    if(num<=Number.MAX_SAFE_INTEGER && num>=Number.MIN_SAFE_INTEGER){
        return true
    }
    return false
 }

//  console.log(fun9(777));
// Implement a function that takes a number as input and returns true if it equals negative infinity, otherwise return false. (Method: Number.NEGATIVE_INFINITY)

function fun10(num) {
    if (Number.NEGATIVE_INFINITY===num) {
        return true
    }
    return false
}
console.log(fun10(222222222222222)
);
// Create a function that takes a number as input and returns true if it equals positive infinity, otherwise return false. (Method: Number.POSITIVE_INFINITY)

function fun11(num) {
    if (Number.POSITIVE_INFINITY===num) {
        return true
    }
    return false
}
console.log(fun11(222222222222222)
);