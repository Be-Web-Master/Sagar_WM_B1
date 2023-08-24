const btn = document.getElementById("btn");
const idNumber = document.getElementById("idNumber");
const userAge = document.getElementById("userAge");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userGender = document.getElementById("userGender");
const divContainer = document.getElementById("divContainer");
const fetchData = () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const index = idNumber.value - 1;
      const userId = data.data[index];
      userAge.innerText = userId.age
      userGender.innerText = userId.gender
      userName.innerText = userId.name
      userEmail.innerText = userId.email
      divContainer.style.display="inline"
    })
    .catch((err) => console.log(err));
};

const submitHandle = (event) => {
  event.preventDefault();
  fetchData();
};

// const fetchData=async (URL) => {
// const response = await fetch(URL);
// const data1 = await response.json();
// console.log(data1.data[0].name);
// }
// fetchData('../data.json')
