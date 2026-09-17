import { useState } from "react";
import "./Registration.css";

function Registration() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    gender: "Male",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.includes("@")) errs.email = "Enter a valid email";
    if (form.password.length < 6) errs.password = "Password must be at least 6 characters";
    if (form.password !== form.confirmPassword) errs.confirmPassword = "Passwords do not match";
    if (!/^[0-9]{7,15}$/.test(form.phone)) errs.phone = "Enter a valid phone number";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // For now just show the data; replace with API call as needed
      alert("Registered: " + form.name);
    }
  };

  return (
    <div className="reg-bg">
      <div className="reg-card">
        <div className="reg-header">
          <div className="reg-icon">👤</div>
          <h2>Registration Form</h2>
        </div>

        <form className="reg-form" onSubmit={handleSubmit} noValidate>
          <label>
            <div className="label">Name</div>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" />
            <div className="error">{errors.name}</div>
          </label>

          <label>
            <div className="label">Email</div>
            <input name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
            <div className="error">{errors.email}</div>
          </label>

          <label>
            <div className="label">Password</div>
            <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" />
            <div className="error">{errors.password}</div>
          </label>

          <label>
            <div className="label">Confirm Password</div>
            <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Confirm password" />
            <div className="error">{errors.confirmPassword}</div>
          </label>

          <label>
            <div className="label">Phone Number</div>
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="eg. 9668295898" />
            <div className="error">{errors.phone}</div>
          </label>

          <label>
            <div className="label">Gender</div>
            <select name="gender" value={form.gender} onChange={handleChange}>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </label>

          <button className="reg-btn" type="submit">Register</button>

          <div className="reg-footer">Already have an account? <a href="#">Login</a></div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
