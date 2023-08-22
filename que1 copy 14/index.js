const list = document.getElementById("list");
const l1 = document.getElementById("l1");
const l2 = document.getElementById("l2");
const l3 = document.getElementById("l3");
const l4 = document.getElementById("l4");

l1.addEventListener('click', () => {
  console.log(l1.textContent);
});
l2.addEventListener('click', () => {
  console.log(l2.textContent);
});
l3.addEventListener('click', () => {
  console.log(l3.textContent);
});
l4.addEventListener('click', () => {
  console.log(l4.textContent);
});
