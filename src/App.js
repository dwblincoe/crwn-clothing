import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/homepage.component";

import "./App.css";

const HatsPage = () => {
    return <div>HATS PAGE</div>;
};

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/hats" component={HatsPage} />
            </Switch>
        </div>
    );
};

export default App;
