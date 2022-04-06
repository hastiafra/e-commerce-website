import React from "react";
import signInUpStyle from "./signInUpStyle.scss";
import SignIn from "../../components/signIn/SignIn";
import {signInWithGooglePopup, createUserDocFromAuth} from "../../utils/firebase/firebase.utils"

const SignInUp = () =>{

    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user);
        
    }
    return(<div className="signInUpWrapper">
    <h1>Sign In</h1>
    <SignIn/>
    
    <button onClick={logGoogleUser}>
        Sign in with Google 
    </button>
    </div>

    )
}

export default SignInUp; 