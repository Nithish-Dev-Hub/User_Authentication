import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegisterForm() {
  const formDefaultData = {
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  const [formData, setFormData] = useState(formDefaultData);
  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
    confirmpasswordError: "",
  });

  const [formResponse, setformResponse] = useState(null);

  const updateFormData = (value, type) => {
    setFormData({ ...formData, [type]: value });
    setError({ ...error, [`${type}Error`]: "" });
  };

  const validate = () => {
    const { name, email, password, confirmpassword } = formData;
    let errors = {};

    // Name Validation
    if(!name) {
        errors.nameError = "Name is required";
    }

    // Email validation
    if (!email) {
      errors.emailError = "Email is required";
    } 
    else {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(email)) {
        errors.emailError = "Email is invalid";
      }
    }

    // Password validation
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password) {
      errors.passwordError = "Password is required";
    } 
    else if (!passwordPattern.test(password)) {
      errors.passwordError = "Password does not meet the criteria!";
    }

    // Confirm password validation
    if (!confirmpassword) {
      errors.confirmpasswordError = "Confirm password is required";
    } 
    else if (password !== confirmpassword) {
      errors.passwordError = "Passwords do not match";
      errors.confirmpasswordError = "Passwords do not match";
    }

    setError(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleSubmit = async () => {
    if (validate()) {
      console.log("Submitted", formData);
      const payload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        password: formData.password
      }
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      setformResponse(result);
    }
  };

  const { name, phone, email, password, confirmpassword } = formData;
  const { nameError, emailError, passwordError, confirmpasswordError } = error;

  return (
    <div className="form-container">
        {(formResponse && formResponse.message && <div>
            <ul>
                <li>{formResponse.message}</li>
                <li>Kindly Retry Registering with unique email id: <Link to="/register">Register</Link></li>
            </ul>
        
        </div>) || (formResponse && formResponse.name && <div>
            <h1>Congrats UserId is created</h1>
            <ul>
                <li key={formResponse._id}>
                    <p>ID: {formResponse._id}</p>
                    <p>Name: {formResponse.name}</p>
                    <p>Email: {formResponse.email}</p>
                </li>
                <li>Kindly Login now: <Link to="/login">Sign In</Link></li>
            </ul>
            
        </div>)}
        {!formResponse && 
        <div>
          <h1>Registration Form</h1>
          <div className="input-container">
              <label>
              Name: <span style={{ color: "red" }}>{nameError}</span>
              <input
                  className="input-element"
                  required
                  type="text"
                  value={name}
                  onChange={(e) => updateFormData(e.target.value, "name")}
              />
              </label>
          </div>
          <div className="input-container">
              <label>
              Phone (Optional):
              <input
                  className="input-element"
                  type="number"
                  value={phone}
                  onChange={(e) => updateFormData(e.target.value, "phone")}
              />
              </label>
          </div>
          <div className="input-container">
              <label>
              Email: <span style={{ color: "red" }}>{emailError}</span>
              <input
                  className="input-element"
                  required
                  type="text"
                  value={email}
                  onChange={(e) => updateFormData(e.target.value, "email")}
              />
              </label>
          </div>
          <div className="input-container">
              <label>
              Password: <span style={{ color: "red" }}>{passwordError}</span>
              <input
                  className="input-element"
                  required
                  type="password"
                  value={password}
                  onChange={(e) => updateFormData(e.target.value, "password")}
              />
              {passwordError && <div>
                  <ul>
                      <li>Has at least one lowercase letter</li>
                      <li>Has at least one uppercase letter</li>
                      <li>Has at least one digit </li>
                      <li>Has at least one special character</li>
                      <li>Is at least 8 characters long</li>
                  </ul>
                  </div>}
              </label>
          </div>
          <div className="input-container">
              <label>
              Confirm Password: <span style={{ color: "red" }}>{confirmpasswordError}</span>
              <input
                  className="input-element"
                  required
                  type="password"
                  value={confirmpassword}
                  onChange={(e) => updateFormData(e.target.value, "confirmpassword")}
              />
              </label>
          </div>
          <div className="input-container">
              <button className="input-element" type="button" onClick={handleSubmit}>
              Register
              </button>
          </div>
        </div>}      
    </div>
  );
}

export default RegisterForm;
