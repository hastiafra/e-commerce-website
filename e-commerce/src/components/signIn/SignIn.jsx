import React, { useState } from "react";
import signInStyle from "./signInStyle.scss";

const SignIn = () => {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

  const signInSubmit = (e) => {
    e.preventDefault();
    setLoginInfo({ email: "", password: "" });
  };

  const getInfo = (e) => {
    const { name, value } = e.target;
    setLoginInfo(prevState => ({...prevState, [name]: value}))
  };

  

  return (
    <div className="signInContainer">
      <h2>I already have an account</h2>
      <span>Sign In with your email and password</span>

      <form onSubmit={signInSubmit} className="signInForm">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={loginInfo.email || ""}
          name="email"
          onChange={getInfo}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={loginInfo.password || ""}
          name="password"
          onChange={getInfo}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignIn;
