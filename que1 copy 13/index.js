const btn = document.getElementById("clickCounter");
let count = 0;

document.addEventListener("click", () => {
  ++count;
  btn.innerText = count;
});
