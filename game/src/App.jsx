import React, { useEffect, useRef, useState } from "react";
import "./App.css";
const App = () => { 
  const [data, setData] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [isCheck, setIsCheck] = useState(false);
  const [playerA, setPlayerA] = useState(0);
  const [playerB, setPlayerB] = useState(0);
  const [clean, setClean] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const clickHandle = (i, j, e) => {
    e.stopPropagation();
    if (!data[i][j]) {
      const sym = isCheck ? "0" : "X";
      data[i][j] = sym;
      checker(i, j, sym);
      setData([...data]);
      setIsCheck(!isCheck);
    }
  };
  const checker = (i, j, sym) => {
    let countRow = 0;
    let countColumn = 0;
    let countPosDaigonal = 0;
    let countNegDaigonal = 0;
    let pos = 0;
    let neg = 2;
    for (let m = 0; m < data[i].length; m++) {
      if (data[i][m] === sym) countRow++;
      if (data[m][j] === sym) countColumn++;
      if (data[pos][pos] == sym) {
        countPosDaigonal++;
        pos++;
      }
      if (data[m][neg] == sym) {
        countNegDaigonal++;
        neg--;
      }
    }

    if (
      countRow === 3 ||
      countColumn === 3 ||
      countPosDaigonal === 3 ||
      countNegDaigonal === 3
    ) {

      setIsWin(!isWin);
     data[i][j] === "0" ? setPlayerA(playerA + 1) : setPlayerB(playerB + 1);
     alert("Win");
  };


  };
  useEffect(() => {
    setClean(!clean);
  }, [isWin]);

  useEffect(() => {
    return () =>
      setData([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ]);
  }, [clean]);

  return (
    <div>
      <div className="winner"></div>
      <div className="show-score">
        <span>Player[0] =&gt; {playerA}</span>
        <span>Player[X] =&gt;{playerB}</span>
      </div>
      <div onClick={(e) => clickHandle(e)} className="input-container">
        {data.map((subArr, i) => {
          return subArr.map((val, j) => {
            return (
              <div
                onClick={(e) => clickHandle(i, j, e)}
                key={j + " " + i}
                className="input"
              >
                {val}
              </div>
            );
          });
        })}
      </div>
      <button onClick={() => setClean(!clean)}>Reset game</button>
    </div>
  );
};

export default App;
