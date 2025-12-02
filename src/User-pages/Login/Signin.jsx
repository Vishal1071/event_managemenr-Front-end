import './Login.css'
import { useState } from "react";
import axios from "axios"
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from '../../Context/AuthContext';

function Signin() {
  const { setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = async(e) => {
    e.preventDefault();
   
    try {
      const res = await axios.post("http://localhost:8080/api/user/login",{
        email,
        password,
      });

      const {accessToken, user} = res.data;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user", JSON.stringify(user));

      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

      // persist user object so reload can restore profile fields quickly

      alert(res.data.message);
      setUser(user);

      if (user.role === "admin") navigate("/admin");
      else navigate("/");

    } catch (error) {
      alert(error.res?.data?.message || "Login failed ❌" )
    }
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSignin}>
        <h2>Sign In</h2>
        <input
          type="email"
          placeholder="User Name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />

        <div className="signin-options">
          <a href="/forgot-password">Forgot password?</a>
        </div>

        <button type="submit">Login</button>

        <p className="signup-link">
          Don’t have an account? <NavLink to="/signup">Sign Up</NavLink>
        </p>
      </form>
    </div>
  );
}

export default Signin
