const btn = document.getElementById("btn");
const form = document.getElementById("card");
const img = document.getElementById("img");

btn.addEventListener('click', () => {
     form.style.display="block"
});

img.addEventListener('click', () => {
  form.style.display="none"
});
