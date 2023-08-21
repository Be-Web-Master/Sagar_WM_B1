const btn = document.getElementById("btn");
const form = document.getElementById("card");
const img = document.getElementById("img");

btn.addEventListener("toggle", () => {

    form.style.display = "block";
    btn.textContent = "close Model";

});

// img.addEventListener('click', () => {
//   form.style.display="none"
// });
