const txt = document.getElementById("txt");
// txt.style.border = "none"
txt.style.outline = "none"

txt.addEventListener('focus', () => {
   txt.style.border = "1px solid red"
});
