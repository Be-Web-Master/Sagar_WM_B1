import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const getTodoData = JSON.parse(localStorage.getItem("todoData")) ?? [];
    setData(getTodoData);
  }, []);

  const submitHandler = () => {
    if (!title || !description) return;
    const currentData = [{ title, description }, ...data];
    setData(currentData);
    localStorage.setItem("todoData", JSON.stringify(currentData));
    setDescription("");
    setTitle("");
  };

  const deleteItem = (idx) => {
    const updateData = data.filter((_, id) => idx !== id);
    setData(updateData);
    localStorage.setItem("todoData", JSON.stringify(updateData));
  };
  const updateItem = (todo, idx) => {
    setDescription(todo.description);
    setTitle(todo.title);
    setData((arr) => {
      return arr.filter((_, id) => idx !== id);
    });
  };
  const searchItem = (searchValue) => {
    const data = JSON.parse(localStorage.getItem("todoData")) ?? [];
    const searchData = data.filter(
      (obj) =>
        obj.title.includes(searchValue) || obj.description.includes(searchValue)
    );

    setData(searchData);
  };
  return (
    <div className="App">
      <h1>React Note-taking App</h1>
      <label htmlfor>Search Here &nbsp;</label>
      <input type="search" onChange={(e) => searchItem(e.target.value)} />
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlfor="title">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          type="text"
        />
        <label htmlfor="description">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="description"
        ></textarea>
        <button onClick={() => submitHandler()} type="submit">
          Submit
        </button>

        <button
          onClick={() => {
            localStorage.clear();
            setData([]);
          }}
        >
          Clear All
        </button>
      </form>
      <hr />
      <div className="cards">
        {data.map((todo, idx) => {
          return (
            <div key={idx} className="card">
              <span onClick={() => updateItem(todo, idx)}>➕</span>
              <span onClick={() => deleteItem(idx)}>❌</span>
              <h1>{todo.title}</h1>
              <p>{todo.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
