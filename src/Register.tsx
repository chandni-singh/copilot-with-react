import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    mobile: "",
  });
  //2 state errors for username and mobile
  const [errors, setErrors] = useState({
    username: "",
    mobile: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "username") {
      //if username is empty, username should be 8 characters long, have 1 capital letter, 1 special character and 1 number
      if (
        !value ||
        value.length < 8 ||
        !/[A-Z]/.test(value) ||
        !/[0-9]/.test(value) ||
        !/[!@#$%^&*]/.test(value)
      ) {
        setErrors({
          ...errors,
          username:
            "Username must be 8 characters long and contain at least 1 capital letter, 1 special character and 1 number",
        });
      } else {
        setErrors({
          ...errors,
          username: "",
        });
      }
    } else if (name === "mobile") {
      //if mobile is empty, mobile should be 10 digits long
      if (!value || value.length !== 10) {
        setErrors({
          ...errors,
          mobile: "Mobile number must be 10 digits long",
        });
      } else {
        setErrors({
          ...errors,
          mobile: "",
        });
      }
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <h2>Register Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors.username}</p>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="mobile">Mobile Number:</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors.mobile}</p>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
