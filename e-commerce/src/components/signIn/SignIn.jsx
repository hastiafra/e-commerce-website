import React, { useState, useEffect } from "react";
import signInStyle from "./signInStyle.scss";

//sign in with google
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

  const [inputField, setInputField] = useState(false);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    const userDocRef = await createUserDocFromAuth(user);
  };

  const signInSubmit = (e) => {
    e.preventDefault();
    setLoginInfo({ email: "", password: "" });
  };

  const getInfo = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prevState) => ({ ...prevState, [name]: value }));

    if (value.length > 0) {
      setInputField(true);
    } else {
      setInputField(false);
    }
  };

  return (
    <div className="signInContainer">
      <h2>I already have an account</h2>
      <span>Sign In with your email and password</span>

      <form onSubmit={signInSubmit} className="signInForm">
        <div className="inputContainer">
          <label className="emailLabel">Email</label>
          <input
            className="currentEmail"
            type="email"
            value={loginInfo.email || ""}
            name="email"
            onChange={getInfo}
            required
          />
        </div>
        <div className="inputContainer">
        <label className="passLabel">Password</label>
        <input
          className="currentPass"
          type="password"
          value={loginInfo.password || ""}
          name="password"
          onChange={getInfo}
          required
        />
        </div>
        <div className="btnHolder">
          <button type="submit">Login</button>
          <button onClick={logGoogleUser}>Sign in with Google</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
