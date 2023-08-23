const form = document.getElementById("form");
const btn = document.getElementById("btn");
const numberInput = document.getElementById("number");
const errMsg = document.getElementById("errorMsg");
const card = document.getElementById("card");
const userID = document.getElementById("userID");
const titleHead = document.getElementById("title");

const submitHandle = (event) => {
  event.preventDefault();
  if (numberInput.value >= 10 && numberInput.value <= 200) {
    console.log(numberInput.value);
    fetch(`https://jsonplaceholder.typicode.com/todos/${numberInput.value}`)
      .then((response) => response.json())
      .then((data) => {
        userID.innerText = data.id;
        titleHead.innerText = data.title;
        console.log(data);
      })
      .catch((err) => console.log(err));
  } else {
    alert("numberInput.value >= 10 && numberInput.value <= 200");
  }
};
