import React, { useEffect, useState } from "react";
import "./multiForm.css";
const MultiForm = () => {
  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const defaultValue = {
    firstname:"",
    lastname: "",
    email: ""
  }
  const [formData, setFormData] = useState(defaultValue)
  const [count, setCount] = useState(1);

  const submitHandle = (e) => {
    e.preventDefault();
    setData([
      ...data,
     { ...formData },
    ]);
  };

  useEffect(() => {
    setEmail("");
    setYear("");
    setMonth("");
    setFirstName("");
    setLastName("");
    setPhone("");
    setFormData(defaultValue)
  }, [data]);
  console.log(data);
  return (
    <>
      <div className="form-container">
        <div className="btn-container">
          <button
            className={`circle ${count >= 1 && `completed-page`} `}
          ></button>
          <button
            className={`circle ${count >= 2 && `completed-page`}`}
          ></button>
          <button
            className={`circle ${count ===  3 && `completed-page`}`}
          ></button>
        </div>
        <form onSubmit={(e) => submitHandle(e)}>
          {(() => {
            switch (count) {
              case 1:
                return (
                  <div className="box">
                    <input
                      type="text"
                      onChange={(e) => setFormData({...formData, firstname:e.target.value})}
                      placeholder="First Name"
                      value={formData.firstname}
                    />
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Last Name"
                    />
                  </div>
                );
              case 2:
                return (
                  <div className="box">
                    <input
                      value={month}
                      type="number"
                      min="1"
                      max="12"
                      onChange={(e) => setMonth(e.target.value)}
                      placeholder="Months"
                    />
                    <input
                      value={year}
                      type="year"
                      onChange={(e) => setYear(e.target.value)}
                      placeholder="Year"
                    />
                  </div>
                );
              case 3:
                return (
                  <div className="box">
                    <input
                      value={email}
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    />
                    <input
                      value={phone}
                      type="Number"
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone Number"
                    />
                    <input className="submitbtn " type="submit" />
                  </div>
                );
            }
          })()}
        </form>
        <footer>
          {count === 1 || (
            <button
              className="prevbtn"
              disabled={count === 1}
              onClick={() => setCount(count - 1)}
            >
              Prev
            </button>
          )}
          {count === 3 || (
            <button
              className="nextbtn"
              disabled={count === 3}
              onClick={() => setCount(count + 1)}
            >
              Next
            </button>
          )}
        </footer>
      </div>
      <div className="cards">
        {data.map((obj, i) => {
          return (
            <div key={i} className="card">
              <p>{obj.name}</p>
              <p>{obj.age}</p>
              <p>{obj.email}</p>
              <p>{obj.phone}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MultiForm;
