import { useState, useEffect } from "react";
// data  input  number input quantity +
// data | quantity  table
export const ExpireDateComponent = () => {
  const [data, setData] = useState([]);
  const [date, setDate] = useState();

// useEffect((e)=>{

// })



  const submitHandle = (e) => {
    e.preventDefault();

    setData((data) => [
      ...data,
      {
        date: e.target.date.value,
        quantity: e.target.quantity.value,
      },
    ]);
  };
  return (
    <>
      <form onSubmit={(e) => submitHandle(e)}>
        <input type="number" name="quantity" />
        <input type="date" onChange={(e)=>setDate(e.target.value)} name="date" />
        <button type="submit">+</button>
      </form>
      {
        <table border="1">
          <thead>
            <tr>
              <th>Date</th>
              <th>Qunatity</th>
            </tr>
          </thead>
          <tbody>
            {data.map((elem) => {
              return (
                <tr>
                  <td>{elem.date}</td>
                  <td>{elem.quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      }
    </>
  );
};
