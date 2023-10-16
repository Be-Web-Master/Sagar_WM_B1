import React, { useState } from "react";

function ValidtionForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    nameError: "",
    ageError: "",
    emailError: "",
  });

  const [formArray, setFormArray] = useState([]);

  const validateForm = () => {
    let isValid = true;
    const { name, age, email } = formData;
    if (name.length < 5 || name.length > 20) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        nameError: "Name must be between 5 and 20 characters.",
      }));
      isValid = false;
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        nameError: "",
      }));
    }

    const ageNumber = parseInt(age, 10);
    if (isNaN(ageNumber) || ageNumber < 18 || ageNumber > 60) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        ageError: "Age must be between 18 and 60.",
      }));
      isValid = false;
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        ageError: "",
      }));
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        emailError: "Enter a valid email address.",
      }));
      isValid = false;
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        emailError: "",
      }));
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFormArray((prevArray) => [...prevArray, { ...formData }]);
      setFormData({ name: "", age: "", email: "" });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <span className="error">{formErrors.nameError}</span>
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            value={formData.age}
            onChange={(e) => {
              console.log("hello");
              setFormData({ ...formData, age: e.target.value });
            }}
            onKeyDown={()=>{
                
            }}
          />
          <span className="error">{formErrors.ageError}</span>
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <span className="error">{formErrors.emailError}</span>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Form Data:</h2>
        <ul>
          {formArray.map((data, index) => (
            <li key={index}>
              Name: {data.name}, Age: {data.age}, Email: {data.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ValidtionForm;
