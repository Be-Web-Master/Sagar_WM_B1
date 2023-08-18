// Filter an array of book objects, keeping only the books with a rating greater than 4.

const arrayOfBooks = [
  { book: "chemistry", rating: 4.5 },
  { book: "Maths", rating: 3.5 },
  { book: "Phy", rating: 4.0 },
];

function isGreaterthanFour(obj) {
  if (obj.rating >= 4) return true;
  return false;
}

function checkerGreaterThanFour() {
  return arrayOfBooks.filter((obj) => isGreaterthanFour(obj));
}

console.log(checkerGreaterThanFour());
