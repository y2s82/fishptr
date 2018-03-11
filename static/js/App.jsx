import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from "./modules/Menu";
import Home from "./modules/Home";
import Contact from "./modules/Contact";
import About from "./modules/About";
import Results from "./modules/Results";



const Navigator = () =>
    (
        <Router>
            <div>
                <Route path="/" render={() => <Menu />} />
                <Switch>
                    <Route exact path="/" render={() => <Home />} />
                    <Route path="/about" render={() => <About />} />
                    <Route path="/contact" render={() => <Contact />} />
                    <Route path="/results" render={() => <Results />} />
                </Switch>
            </div>
        </Router>
    )
export default class App extends React.Component {
    render() {
        return <div className="container">
            <Navigator />
        </div>
    }
}