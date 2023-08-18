function checkLeap(year) {
  if (year % 4 == 0 && year % 100 !== 0) {
    console.log("year1 " + year);
  } else if (year % 400 == 0) {
    console.log("year2 " + year);
  }
}
console.log(checkLeap(3000));
