import { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    // Email validation
    if (email === "") {
      newErrors.email = "Email is required";
    } else if (!email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    // Password validation
    if (password === "") {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Login Successful!");
    }
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <div className="login-header">
          <h2>Login</h2>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label className="label">
            Email
            <input
              className="input"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <div className="error">{errors.email}</div>

          <label className="label">
            Password
            <input
              className="input"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className="error">{errors.password}</div>

          <button className="login-btn" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;