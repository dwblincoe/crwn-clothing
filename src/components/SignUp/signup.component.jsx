import React from "react";

import FormInput from "../FormInput/forminput.component";
import CustomButton from "../CustomButton/custombutton.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./signup.styles.scss";

class SignUp extends React.Component {
    state = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    };

    handleSubmit = async evt => {
        const { displayName, email, password, confirmPassword } = this.state;
        evt.preventDefault();
        console.log(this.state);
        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            });
        } catch (err) {
            console.error(err);
        }
    };

    handleChange = evt => {
        const { name, value } = evt.target;

        this.setState({
            [name]: value
        });
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;
