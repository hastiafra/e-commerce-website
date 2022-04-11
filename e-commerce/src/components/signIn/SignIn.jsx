import React, { useState, useEffect } from "react";
import signInStyle from "./signInStyle.scss";

//sign in with google
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInUser,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    const userDocRef = await createUserDocFromAuth(user);
  };

  const signInSubmit = async (e) => {
    e.preventDefault();

    setLoginInfo({ email: "", password: "" });

    try {
      const response = await signInUser(loginInfo.email, loginInfo.password);
      console.log(response);
    } catch (err) {
      if (err.code === "auth/wrong-password") {
        alert("Incorrect Password");
      } else if (err.code === "auth/user-not-found") {
        alert("You haven't registered yet");
      } else {
        console.log("there is an error", err);
      }
    }
  };

  const getInfo = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="signInContainer">
      <h2>I already have an account</h2>
      <span>Sign In with your email and password</span>

      <form onSubmit={signInSubmit} className="signInForm">
        <div className="inputContainer">
          <label>Email</label>
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
          <label>Password</label>
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
          <button type="button" className="googleBtn" onClick={logGoogleUser}>
            Sign in with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
