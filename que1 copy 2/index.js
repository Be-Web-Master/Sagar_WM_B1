const form = document.getElementById("form");
const text = document.getElementById("text");

form.addEventListener("submit", (e) => {
   e.preventDefault()
  alert(e.target.text.value);
});
