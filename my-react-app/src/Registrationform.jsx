import { useState } from "react";
import "./Registrationform.css"; 
function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name: name,
      email: email,
      phone: phone
    };

    // Store data
    localStorage.setItem("userData", JSON.stringify(userData));

    // Check in browser console
    console.log("Saved Data:", userData);

    // Go to display.html (use correct path)
    window.location.href = "/display.html";
  };

  return (
    <div className="container">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            required
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
    
  );
}

export default RegistrationForm;