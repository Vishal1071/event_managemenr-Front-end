import { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";

function SignUp() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    gender: "",
  });


  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("")

    const payload = {
      name: formData.fullname,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
      gender: formData.gender
    };

    try {
      const res = await axios.post("http://localhost:8080/api/user/register", payload);
      setMessage(res.data.message);
      setFormData({
        fullname: "",
        email: "",
        phone: "",
        password: "",
        gender: "",
      })

      alert(res.data.message);
      navigate("/signin");
    } catch (error) {
      setMessage(error.response?.data?.message || "Error registering User")
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <input
          type="text"
          name="fullname"
          placeholder="Fullname *"
          value={formData.fullname}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email *"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <div className="gender-options">
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={formData.gender === "Other"}
              onChange={handleChange}
            />
            Other
          </label>
        </div>

        <input
          type="text"
          name="phone"
          placeholder="Phone Number *"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password *"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="signup-btn">
          SIGN UP
        </button>

        <p className="signin-link">
          Already have an account? <NavLink to="/signin">Sign In</NavLink>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
