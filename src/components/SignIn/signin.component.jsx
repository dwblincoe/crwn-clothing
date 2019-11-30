import React from "react";

import FormInput from "../FormInput/forminput.component";
import CustomButton from "../CustomButton/custombutton.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./signin.styles.scss";

class SignIn extends React.Component {
    state = {
        email: "",
        password: ""
    };

    handleSubmit = evt => {
        evt.preventDefault();
        this.setState({
            email: "",
            password: ""
        });
    };

    handleChange = evt => {
        const { value, name } = evt.target;

        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        handleChange={this.handleChange}
                        label="Email"
                        value={this.state.email}
                        required
                    />
                    <FormInput
                        name="password"
                        handleChange={this.handleChange}
                        label="Password"
                        value={this.state.password}
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
