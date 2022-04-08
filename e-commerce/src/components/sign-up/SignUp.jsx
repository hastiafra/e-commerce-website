import React, { useState } from "react";
import signUpStyle from "./signUpStyle.scss"

//firebase Auth
import {
  createUserManually,
  createUserDocFromAuth,
  auth,
} from "../../utils/firebase/firebase.utils";

const SignUp = () => {

  const newUserInfo = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [signUpForm, setSignUpForm] = useState(newUserInfo);

  console.log(signUpForm);

  const resetForm = () => {
    setSignUpForm(newUserInfo);
  };

  
  const handleChange = (ev) => {
      const { name, value } = ev.target;
      
      setSignUpForm({ ...signUpForm, [name]: value });
    };
    
 const { displayName, email, password, confirmPassword } = signUpForm;
  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      if (password === confirmPassword) {

        const {user} = await createUserManually(email, password);

       

        const userDocRef =  await createUserDocFromAuth(user, { displayName });

        resetForm();
      }
    } catch (error) {
        if(error.code === "auth/email-already-in-use"){
            alert("Email already exist")
        }
      console.log("user creation encounter error", error);
    }
  };

  return (
    <>
      <div className="signUpWrapper">
        <h2>New User</h2>
        <h1>Sign up with your email and password</h1>

        <form onSubmit={handleSubmit} className="signInForm">
          <label className="passLabel">Display Name</label>
          <input
            className="displayName"
            type="text"
            value={signUpForm.displayName}
            name="displayName"
            onChange={handleChange}
            required
          />

          <label className="">Email</label>
          <input
            className="newEmail"
            type="email"
            value={email}
            name="email"
            onChange={handleChange}
            required
          />
          <label className="pass">Password</label>
          <input
            className="currentPass"
            type="password"
            value={signUpForm.password}
            name="password"
            onChange={handleChange}
            required
          />

          <label className="passLabel">Confirm Password</label>
          <input
            className="currentPass"
            type="password"
            value={signUpForm.confirmPassword}
            name="confirmPassword"
            onChange={handleChange}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
