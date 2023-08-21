const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const age = document.getElementById("age");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const male = document.getElementById("male");
const female = document.getElementById("female");
const errorMsg = document.querySelector("#error");

const validateInput = (input) => {
  if (input === "age" && age.value < 18 ) {
    errorMsg.innerText = "Age should be greater 18";
  } else if (input === "tel" && tel.value.length !== 10) {
    errorMsg.innerText = "Phone number should have 10 digits";
  } else {
    errorMsg.innerText = " ";
  }
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  console.log({
    firstName: firstName.value,
    lastName: lastName.value,
    age: age.value,
    tel: tel.value,
    gender: male.checked ? "male" : "Female",
  });
};
