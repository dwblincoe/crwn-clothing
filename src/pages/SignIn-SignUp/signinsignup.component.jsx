import React from "react";

import SignIn from "../../components/SignIn/signin.component";
import SignUp from "../../components/SignUp/signup.component";

import "./signinsignup.styles.scss";

const SignInSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
);

export default SignInSignUpPage;
