import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from '../Screens/App'
import Home from '../Screens/Home'
import About from '../Screens/About'
import Contact from '../Screens/Contact'

const main = () => {
    return (
        <Router >
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </Router>
    )
}

export default main