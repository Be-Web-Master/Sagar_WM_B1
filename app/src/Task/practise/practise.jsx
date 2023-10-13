import React, { useState } from 'react';
const data = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
function MyForm() {
  // Define a state to hold the form input values
  const [formData, setFormData] = useState([]);

  // Function to handle input changes and update the state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(
       ...formData,
      {[name]: value}
    );
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Access the form data in the `formData` state
    console.log(formData);
  };

  return (
    <div>
      <h2>My Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MyForm;
