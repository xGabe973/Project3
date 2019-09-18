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
<<<<<<< HEAD
import Test from "./Pages/Test"
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';



=======
//import Test from "./Pages/Test"
>>>>>>> e863e782d576234512a1d5190511342835d50170

class Navigation extends Component {
    render() {
        return (
            <Router>
                <div>
<<<<<<< HEAD
                   <Wrapper>
                    <Link to="/">
   
                        </Link>
                        {this.props.authenticated ? (
                            <>
                            <Navbar >
                              <Navbar.Brand href="/">Workout APPP</Navbar.Brand>
                              <Nav className="mr-auto">
                                <Nav.Link href="/profile">Profile</Nav.Link>
                                <Nav.Link href="/workouts">Workouts</Nav.Link>
                                <Nav.Link href="/recipes">Recipes</Nav.Link>
                              </Nav>
                              <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-info">Search</Button>
                              </Form>
                              <Form inline>
                              
                              </Form>
                            </Navbar>
                            <LogOut />
                            <br />
                            
                          </>

                            
                        ) : (
                            <>
                            <Navbar >
                              <Navbar.Brand href="#home">Workout APPP</Navbar.Brand>
                              <Nav className="mr-auto">
                                <Nav.Link href="/login">Log In</Nav.Link>
                                <Nav.Link href="/register">Register</Nav.Link>
                              </Nav>
                            </Navbar>
                         </>
                        )}
                        
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route authenticated={this.props.authenticated} path="/login" component={LogInPage} />
                        <Route path="/register" component={Register} />
                        <ProtectedRoute authenticated={this.props.authenticated} path="/profile" component={ProfilePage} />
                        <Route exact path="/nutrition" component={nutrition} />
                        <Route exact path="/workouts" component={workouts} />

                        <Route exact path="/create" component={CreateProfile} />
                        <Route exact path="/test" component={Test} />
                    </Switch>
                </Wrapper>
=======
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
>>>>>>> e863e782d576234512a1d5190511342835d50170
                </div>
            </Router>
        
        )
    };
};

export default Navigation;