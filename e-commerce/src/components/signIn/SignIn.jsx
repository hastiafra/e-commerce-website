import React, { useState } from "react";
import signInStyle from "./signInStyle.scss";

const SignIn = () => {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

  const signInSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signInContainer">
      <h2>I already have an account</h2>
      <span>Sign In with your email and password</span>

      <form onSubmit={signInSubmit} className="signInForm">
        <label htmlFor="email">Email</label>
        <input type="email" required />
        <label htmlFor="password">Password</label>
        <input type="current-password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignIn;
