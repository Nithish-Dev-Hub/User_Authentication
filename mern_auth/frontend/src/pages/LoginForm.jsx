import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
    const defaultFormData = {
        email: "",
        password: ""
    };

    const [formData, setFormData] = useState(defaultFormData);
    const [errors, setErrors] = useState({});
    const [formResponse, setformResponse] = useState(null);
    
    const updateFormData = useCallback((val, type) => {
        setFormData(prevData => ({ ...prevData, [type]: val }));
        setErrors(prevErrors => ({ ...prevErrors, [`${type}Error`]: "" }));
    }, []);

    const validate = () => {
        let validationErrors = {};
        const { email, password } = formData;

        if (!email) {
            validationErrors.emailError = 'Email is required';
        } else {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(email)) {
                validationErrors.emailError = "Email is invalid";
            }
        }

        if (!password) {
            validationErrors.passwordError = "Password is required";
        } else {
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!passwordPattern.test(password)) {
                validationErrors.passwordError = "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.";
            }
        }

        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    const handleSubmit = useCallback(async () => {
        if (validate()) {
            console.log("Logged In", formData);
            const payload = {
                email: formData.email,
                password: formData.password
            }
            const response = await fetch('/api/users/auth', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            const result = await response.json();
            setformResponse(result);
            console.log(result);
        }
    }, [formData]);

    const handleLogout = useCallback(async ()=> {
        const response = await fetch('/api/users/logout', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            }
        });
        const result = await response.json();
        setformResponse(result);
        console.log(result);
    }, []);

    const { email, password } = formData;
    const { emailError, passwordError } = errors;

    return (
        <div className="form-container">
            {!formResponse && <div>
                <h1>Login Form</h1>
            <div className="input-container">
                <label>
                    Email:{emailError && <span id="email-error" style={{ color: 'red' }}>{emailError}</span>}
                    <input
                        className="input-element"
                        type="text"
                        value={email}
                        onChange={(e) => updateFormData(e.target.value, "email")}
                        aria-label="Email"
                        aria-invalid={!!emailError}
                        aria-describedby="email-error"
                    />                    
                </label>
            </div>
            <div className="input-container">
                <label>
                    Password:{passwordError && <span id="password-error" style={{ color: 'red' }}>{passwordError}</span>}
                    <input
                        className="input-element"
                        type="password"
                        value={password}
                        onChange={(e) => updateFormData(e.target.value, "password")}
                        aria-label="Password"
                        aria-invalid={!!passwordError}
                        aria-describedby="password-error"
                    />                    
                </label>
            </div>
            <div className="input-container">
                <button
                    className="input-element"
                    type="button"
                    onClick={handleSubmit}
                    aria-label="Login"
                >
                    Login
                </button>
            </div>
                </div>}

            {(formResponse && formResponse.name && <div>
                <h1>Successfully Logged in</h1>
                <ul>
                    <li key={formResponse._id}>
                        <p>Name: {formResponse.name}</p>
                        <p>Email: {formResponse.email}</p>
                        <p>Phone: {formResponse.phone}</p>
                    </li>
                    <li><button type="button" onClick={handleLogout}>Log Out</button></li>
                </ul>
                    </div>) || 
                    (formResponse && formResponse.message && <div>
                        <ul>
                            <li>{formResponse.message}</li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    </div>)}    
        </div>
    );
};

export default LoginForm;
