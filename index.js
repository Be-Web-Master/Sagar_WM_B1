const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const age = document.getElementById("age");
const phoneNumber = document.getElementById("phoneNumber");
const male = document.getElementById("male");
const female = document.getElementById("female");
const errorMsg = document.getElementById("errorMsg");

const validateAge = () => {
  errorMsg.innerText =
    age.value < 18 ? "Your Age should be \n greater or equal to 18" : "";
};
const validatePhoneNumber = () => {
  errorMsg.innerText =
    phoneNumber.value.length !== 10 ? "Number length should be 10" : "";
};

const onSubmit = (event) => {
  event.preventDefault();
  console.log({
    firstName: firstName.value,
    lastName: lastName.value,
    age: age.value,
    phoneNumber: phoneNumber.value,
    gender: male.checked ? "male" : female.checked ? "female" : "other",
  });
};
