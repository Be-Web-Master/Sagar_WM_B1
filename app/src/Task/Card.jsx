import React, { useEffect, useRef, useState } from "react";
import "./Card.css";

const Card = () => {
  const [data, setData] = useState([]);
  const [card1, setCard1] = useState(0);
  const [card2, setCard2] = useState(0);
  const [card3, setCard3] = useState(0);
  const [card4, setCard4] = useState(0);
  const [cvv, setCvv] = useState(0);
  const [dateMonth, setDateMonth] = useState(0);
  const [dateYear, setDateYear] = useState(0);
  const ref = useRef(null);
  const monArr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];
  const yearArr = [
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
  ];
  useEffect(() => {
    return () => {
      setCard1("");
      setCard2("");
      setCard3("");
      setCard4("");
      setCvv("");
      setDateMonth("");
      setDateYear("");
    };
  }, [data]);
  const submitHandle = (e) => {
    e.preventDefault();
    setData([
      {
        card: card1 + " - " + card2 + " - " + card3 + " - " + card4,
        date: dateMonth + " / " + dateYear,
        cvv: cvv,
      },
      ...data,
    ]);
  };
  return (
    <div className="card-container">
      <form onSubmit={(e) => submitHandle(e)} className="form-container">
        <div ref={ref} className="card-number">
          <input
            name="first"
            type="number"
            placeholder="0000"
            required
            value={card1}
            onChange={(e) => {
              if (e.target.value.length > 3) {
                ref.current.children[2].focus();
              }
              setCard1(e.target.value);
            }}
          />
          <span>/</span>
          <input
            value={card2}
            name="second"
            type="number"
            placeholder="0000"
            required
            onChange={(e) => {

              if (e.target.value.length > 3) {
                ref.current.children[4].focus();
              }else if (e.target.value.length =0) {
                ref.current.children[2].focus();
              }
              setCard2(e.target.value);
            }}
          />
          <span>/</span>
          <input
            value={card3}
            name="third"
            type="number"
            placeholder="0000"
            required
            onChange={(e) => {
              if (e.target.value.length > 3) {
                ref.current.children[6].focus();
              }

              setCard3(e.target.value);
            }}
          />
          <span>/</span>
          <input
            value={card4}
            name="fourth"
            type="number"
            placeholder="0000"
            required
            onChange={(e) => {
              if (e.target.value.length > 3) ref.current.nextSibling.focus();

              setCard4(e.target.value);
            }}
          />
        </div>
        <select
          value={dateMonth}
          onChange={(e) => setDateMonth(e.target.value)}
          required
        >
          <option>Months</option>
          {monArr.map((elm, i) => {
            return <option value={elm}>{elm}</option>;
          })}
        </select>
        &nbsp;&nbsp;
        <select
          value={dateYear}
          onChange={(e) => setDateYear(e.target.value)}
          required
        >
          <option>Year</option>
          {yearArr.map((elm, i) => {
            return <option value={elm}>{elm}</option>;
          })}
        </select>
        <input
          value={cvv}
          onChange={(e) => {
            setCvv(e.target.value);
          }}
          name="cvv"
          type="number"
          placeholder="CVV"
          max="999"
          min="100"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div className="cards">
        {data.map(({ card, date, cvv }) => {
          return (
            <div className="card">
              <h1>{card}</h1>
              <h1>{date}</h1>
              <h1>{cvv}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
