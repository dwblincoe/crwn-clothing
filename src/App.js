import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/navbar.component";
import SignInSignUpPage from "./pages/SignIn-SignUp/signinsignup.component";
import HomePage from "./pages/HomePage/homepage.component";
import ShopPage from "./pages/Shop/shop.component";

import { auth } from "./firebase/firebase.utils";

import "./App.css";

class App extends React.Component {
    state = {
        currentUser: null
    };

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({
                currentUser: user
            });
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Navbar currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/signin" component={SignInSignUpPage} />
                </Switch>
            </div>
        );
    }
}

export default App;
