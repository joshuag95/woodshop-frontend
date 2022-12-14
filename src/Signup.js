import React, { useState } from "react";
import { Redirect } from "react-router-dom";


const SignupForm = ({setCurrentClient}) => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  


  function handleSubmit(e) {
    e.preventDefault();

    const clientCreds = { ...formData };

    fetch("/clients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clientCreds),
    }).then((res) => {
      if (res.ok) {
        res.json().then((client) => {
          setCurrentClient(client);
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
    <Redirect push to="/login" />
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Username:</label>
      <input
        id="name-signup-input"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        id="email-signup-input"
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password:</label>
      <input
        id="password-signup-input"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <label htmlFor="phone">Phone:</label>
      <input
        id="phone-signup-input"
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <label htmlFor="address">address:</label>
      <input
        id="address-signup-input"
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;