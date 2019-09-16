import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import ProtectedRoute from "./ProtectedRoute";
import LogOut from "./Pages/LogOut";
import ProfilePage from "./Pages/ProfilePage"
import LogInPage from "./Pages/LogInPage";
import nutrition from "./Pages/nutrition";
import workouts from "./Pages/workouts"

// Added from app.js
import './App.css';
import Wrapper from './Components/Wrapper/wrapper.js';
import CreateProfile from "./Pages/CreateProfile";
//import Test from "./Pages/Test"

class Navigation extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Wrapper>
                        <NavLink to="/"><h1>Home</h1></NavLink>
                            {this.props.authenticated ? (
                                <span>
                                    <NavLink to="/create"><h5>Create a New Profile</h5></NavLink>
                                    <NavLink to="/profile"><h5>Profile</h5></NavLink>
                                    <NavLink to="/nutrition"><h5>Nutrition</h5></NavLink>
                                    <NavLink to="/workouts"><h5>Workouts</h5></NavLink>
                                    <LogOut />
                            </span>
                            ) : (
                                <span>
                                    <NavLink to="/login"><h5>Log In</h5></NavLink>
                                    <NavLink to="/register"><h5>Register</h5></NavLink>
                                </span>
                            )}
                            
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route authenticated={this.props.authenticated} path="/login" component={LogInPage} />
                            <Route path="/register" component={Register} />
                            <ProtectedRoute authenticated={this.props.authenticated} path="/nutrition" component={nutrition} />
                            <ProtectedRoute authenticated={this.props.authenticated} path="/workouts" component={workouts} />
                            <ProtectedRoute authenticated={this.props.authenticated} path="/create" component={CreateProfile} />
                            <ProtectedRoute authenticated={this.props.authenticated} path="/profile" component={ProfilePage} />
                            
                            
                        </Switch>
                    </Wrapper>
                </div>
            </Router>
        
        )
    };
};

export default Navigation;