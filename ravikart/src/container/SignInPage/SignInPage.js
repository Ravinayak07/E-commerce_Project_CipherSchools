import React from "react";
import "./SignInPage.css";
import NavBar from "../../components/NavBar/NavBar";
import SignInBody from "../../components/SignInBody/SignInBody";

function SignInPage() {
    return(
        <div>
            <NavBar ShowSignInButton={false}/>
            <SignInBody />
        </div>
    )
}

export default SignInPage