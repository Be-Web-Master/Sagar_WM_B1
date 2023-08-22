const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const age = document.getElementById("age");
const tel = document.getElementById("tel");
const male = document.getElementById("male");
const female = document.getElementById("female");
const errorMsg = document.getElementById("errorMsg");

const styleVariable = "border:1px solid red; padding: 10px;color: rgba(255, 0, 0, 0.292);"
function validInput(event) {
  if (event === "age" && age.value < 18 || age.value > 100) {
    errorMsg.innerText = "age should not be less than 18";
    errorMsg.style="border:1px solid red";
  }
   else if(event === "tel" && tel.value.length !== 10) {
    errorMsg.innerText = "Phone number should be 10 digit";
    errorMsg.style="border:1px solid red";
  } else {
    errorMsg.innerText = "";
  }
}

function submitHandler(event) {
  event.preventDefault();
  console.log({
    firstName: firstName.value,
    lastName: lastName.value,
    age: age.value,
    tel: tel.value,
    gender: male.checked ? "male" : female.checked ? "female" : "other"
  });
}
