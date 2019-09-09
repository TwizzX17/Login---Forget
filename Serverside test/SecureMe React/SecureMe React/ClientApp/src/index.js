import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import "./Style.css";
import NotFound from './components/notfound';
import Home from './components/Home';
import Login from './components/Login';
import CreateAccount from './components/Create-Account';
import ForgotPass from './components/forgot-pass';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
/*
import Dashboard from './components/Dashboard';
*/


const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Login" component={Login} />
                <Route path="/Create-account" component={CreateAccount} />
                <Route path="/forgot-pass" component={ForgotPass} />
                <Route exact path="/Dashboard" component={Dashboard} />
                <Route exact path="/Dashboard/Profile" component={Profile} />

                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));