const idInput = document.getElementById("idInput");
const todoList = document.getElementById("todoList");
const submitBtn = document.getElementById("submitBtn");
const searchInput = document.getElementById("search");

const GET_URL = (idInputVal) =>
  `https://jsonplaceholder.typicode.com/todos/${idInputVal}`;

const todoLiData = [];

const addLiElement = (liText) => {
  const liTagElement = document.createElement("li");
  liTagElement.innerText = liText;
  todoList.append(liTagElement);
};

const getApiData = async (URL) => {
  const todoDataResponse = await fetch(URL);
  const todoData = await todoDataResponse.json();
  return todoData;
};
const updateUI = () => {
  clearUI();
  for (const key of todoLiData) {
    addLiElement(key);
  }
};

const clearUI = () => {
  todoList.innerHTML = "";
};
const handleSearchInput = (event) => {
  const value = event.target.value;
  clearUI();
  todoLiData.forEach((element) => {
    let searchElement = element.includes(value);
    if (searchElement) {
      addLiElement(element);
    }
  });
};

const handleAddSubmit = async (event) => {
  event.preventDefault();
  const idInputVal = idInput.value;

  if (idInputVal === "" || idInputVal < 0 || idInputVal > 200) {
    alert("Enter a valid ID number");
    idInput.value = "";
    return;
  }

  submitBtn.innerText = "Adding";

  const data = await getApiData(GET_URL(idInputVal));

  if (!data.title) {
    alert("Failed to get Data");
    submitBtn.innerText = "Add";
    return;
  }

  todoLiData.push(data.title);

  updateUI();

  //   console.log(todoLiData);

  idInput.value = "";
  submitBtn.innerText = "Add";
};
