import { useState } from "react";
import "./app.css";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => setIsChecked(!isChecked);

  return (
    <div className="App">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          value={inputValue}
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={() => {
            const rowData = [inputValue, ...data];
            setInputValue("")
            setData(rowData);
          }}
        >
          {" "}
          Submit{" "}
        </button>
      </form>
      <input type="checkbox" checked={isChecked} onChange={()=>toggleCheckbox()} />

      <label htmlFor="card">Card</label>
      {isChecked ? (
        <ol>
          {data.map((val, i) => (
            <li>
                  {i + 1}.{val}
            </li>
          ))}
        </ol>
      ) : (
        <div className="cards">
          {data.map((todo,i) => (
            <div className="card">{i + 1}. {todo}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
