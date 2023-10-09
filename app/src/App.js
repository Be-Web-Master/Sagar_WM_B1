import "./App.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Sorting from "./Sorting";
function App() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState([]);
  const [startPoint, setStartPoint] = useState(0);
  const [diff, setdiff] = useState(5);
  const [endPoint, setEndPoint] = useState(diff);
  const [search, setSearch] = useState("");

  const getApiData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const apiData = await res.json();
    setData(apiData);
    setShow(apiData);
    // console.log(apiData);
  };

  useEffect(() => {
    getApiData();
  }, []);

  const inLeftSide = () => {
    setStartPoint(startPoint - Number(diff));
    setEndPoint(startPoint);
  };
  const inRightSide = () => {
    setStartPoint(endPoint);
    setEndPoint(endPoint + Number(diff));
  };

  const dataSort = () => {
    const newData = data.sort((a, b) => {
      // console.log({a:a.title.toLowerCase(), b:b.title.toLowerCase()});
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      }
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      }
    });
    setData(newData);
  };

  return (
    <div className="App">
      <input type="text" onChange={(e) => setSearch(e.target.value)} />

      <button onClick={() => dataSort()}> Sorting </button>
      <button disabled={startPoint === 0} onClick={() => inLeftSide()}>
        {" "}
        left{" "}
      </button>
      <select onChange={(e) => setdiff(e.target.value)}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
      <button disabled={endPoint >= data.length} onClick={() => inRightSide()}>
        {" "}
        right{" "}
      </button>
      <table border="1">
        <thead>
          <th> User ID</th>
          <th> ID </th>
          <th> Title </th>
          <th> completed </th>
        </thead>
        <tbody>
          {data.slice(0).map((obj, i) => {
            if (obj.title.includes(search)) {
              return (
                <tr key={i}>
                  <td> {obj.userId} </td>
                  <td> {obj.id} </td>
                  <td> {obj.title} </td>
                  <td> {String(obj.completed)} </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
