import React, {useEffect} from "react";
import signInUpStyle from "./signInUpStyle.scss";
import SignIn from "../../components/signIn/SignIn";
import { getRedirectResult } from "firebase/auth";
import {auth, signInWithGooglePopup, createUserDocFromAuth,signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";


const SignInUp = () =>{


    useEffect(async () => {
       const response = await getRedirectResult(auth);

       if (response){
           const userDocRef = await createUserDocFromAuth(response.user)
       }
    },[])

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
     
    <button onClick={signInWithGoogleRedirect}>
        Sign in with Google redirect
    </button>
    </div>

    )
}

export default SignInUp; 