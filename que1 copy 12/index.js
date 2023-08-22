const btn = document.getElementById("btn");
const para = document.getElementById("para");
const btnClose =document.getElementById("btnClose")
btn.addEventListener("click", () => {
    para.style.display = "block";
    btnClose.style.display = "block";
    btn.style.display = "none";
    // btn.textContent = "close Model"
});

btnClose.addEventListener("click", () => {
    para.style.display = "none";
    btnClose.style.display = "none";
    btn.style.display = "block";

});
