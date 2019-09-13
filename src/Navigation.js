import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import ProtectedRoute from "./ProtectedRoute";
import LogOut from "./Pages/LogOut";
import ProfilePage from "./Pages/ProfilePage"
import LogInPage from "./Pages/LogInPage";
import nutrition from "./Pages/nutrition";
import workouts from "./Pages/workouts"


class Navigation extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to="/">
   
                        </Link>
                        {this.props.authenticated ? (
                            <span>
                                <Link to="/profile"><h5>Profile</h5></Link>
                                <Link to="/nutrition"><h5>Nutrition</h5></Link>
                                <Link to="/workouts"><h5>Workouts</h5></Link>
                                <LogOut />
                            </span>
                        ) : (
                            <span>
                                <Link to="/login"><h5>Log In</h5></Link>
                                <Link to="/register"><h5>Register</h5></Link>
                            </span>
                        )}
                        
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route authenticated={this.props.authenticated} path="/login" component={LogInPage} />
                        <Route path="/register" component={Register} />
                        <ProtectedRoute authenticated={this.props.authenticated} path="/profile" component={ProfilePage} />
                        <Route exact path="/nutrition" component={nutrition} />
                        <Route exact path="/workouts" component={workouts} />
                    </Switch>
                </div>
            </Router>
        )
    };
};

export default Navigation;