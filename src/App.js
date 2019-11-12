import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/homepage.component";
import ShopPage from "./pages/Shop/shop.component";

import "./App.css";

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
            </Switch>
        </div>
    );
};

export default App;
