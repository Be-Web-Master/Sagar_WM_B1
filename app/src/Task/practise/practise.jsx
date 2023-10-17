import React, { useEffect, useState } from "react";
const initialData = {
  firstName: "",
  lastName: "",
  age: "",
  number: "",
};
const MyForm = () => {
  const [formData, setFormData] = useState(initialData);
  const [data, setData] = useState([]);
  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setFormData(initialData);
  }, [data]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setData([{ ...formData }, ...data]);
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          onChange={handleInput}
          placeholder="firstName"
          value={formData.firstName}
          name="firstName"
        />
        <input
          type="text"
          placeholder="lastName"
          onChange={handleInput}
          value={formData.lastName}
          name="lastName"
        />
        <input
          type="Number"
          placeholder="age"
          value={formData.age}
          onChange={handleInput}
          name="age"
        />
        <input
          type="Number"
          placeholder="Number"
          onChange={handleInput}
          value={formData.number}
          name="number"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MyForm;

// import React, { useState } from 'react';
// const data = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: ''
//   }
// function MyForm() {
//   const [formData, setFormData] = useState([]);
//   const [state, setState] = useState("")

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(
//        ...formData,
//       {[name]: value}
//     );
//   };
// console.log(formData);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div>
//       <h2>My Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="test">First Name:</label>
//           <input type='text' id='test' onChange={(e)=> setState(e.target.value)} value={state} />
//           <label htmlFor="firstName">First Name:</label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default MyForm;
