import React, { useState } from "react";
const data = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Nepal", value: "NP", cities: ["Kathmandu", "Mount"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
];
const YtTask1 = () => {
  const [country, setCountry] = useState(-1);
  return (
    <div>
      <select onClick={(e) => setCountry(e.target.value)}>
        {data.map(({ name }, index) => {
          return (
            <option key={index} value={index}>
              {name}
            </option>
          );
        })}
        <option selected>Select Country</option>
      </select>

      {country >= 0 ? (
        <select>
          {data[country]?.cities.map((item, index) => {
            return (
              <option key={index} value={index}>
                {item}
              </option>
            );
          })}
        </select>
      ) : (
        ""
      )}
    </div>
  );
};
// const citiesComp = ({ city }) => {
//   return (
//     <>
//       <select>
//         {data.map((val) => {
//           return <option value={val}>{val}</option>;
//         })}
//       </select>
//     </>
//   );
// };

export default YtTask1;
