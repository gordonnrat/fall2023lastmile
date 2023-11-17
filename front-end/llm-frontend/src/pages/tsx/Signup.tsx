import React, { useState } from "react";
import "../css/Signup.css";
import img1 from "../../images/signupimg.png";

const SignupForm: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const DOMAIN_NAME = "http://localhost:4000/";
  const REDIRECT_URL = "http://localhost:3000/#/login/";
  const p = document.querySelector("#errorMsg");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle your signup logic here
    if (password !== confirmPassword) {
        if (p == null) { return }
        p.textContent = "Passwords do not match!"
        return;
    }

    console.log(email + " " + password);
    const formData = {
      username: username,
      email: email,
      password: password,
    };

    await fetch(DOMAIN_NAME + "signup", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then(async (res) => {
      if (p == null) {
        return;
      }
      if (res.status == 412) {
        p.textContent = "Email already exists!";
        return;
      } else if (!res.ok) {
        p.textContent = "Unknown error! Please try again";
        return;
      } else {
        p.textContent = "";
        window.location.href = REDIRECT_URL;
      }
    });
  };

  return (
    <div className="container">
      <div className="bi">
        <img className='signup-img' src={img1} alt = "Chibi art"></img>
      </div>
      <div className='form-container'>
        <form onSubmit={handleSubmit} className="signupform">
          <h2>Sign Up</h2>
          <p id="errorMsg"></p>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="choose a username."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="enter your email."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="enter your password."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="re-enter your password."
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <input type="submit" value="Sign Up" />
          <a href="/#/login">Already have an account? Log in</a>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
