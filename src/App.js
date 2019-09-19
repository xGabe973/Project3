import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import ProtectedRoute from "./ProtectedRoute";
import LogOut from "./Pages/LogOut";
import CreateProfile from "./Pages/CreateProfile";
import ProfilePage from "./Pages/ProfilePage"
import LogInPage from "./Pages/LogInPage";
import nutrition from "./Pages/nutrition";
import workouts from "./Pages/workouts"
import Wrapper from './Components/Wrapper/wrapper.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

class App extends Component {
    render() {
        return (
            <Router>
                <div>

                   <Wrapper>
                    <NavLink to="/"></NavLink>
                        {this.props.authenticated ? (
                            <>
                            <Navbar >
                              <Navbar.Brand href="/">Workout APPP</Navbar.Brand>
                              <Nav className="mr-auto">
                                <NavLink to="/profile">Profile</NavLink>
                                <NavLink to="/workouts">Workouts </NavLink>
                                <NavLink to="/nutrition">Nutrition </NavLink>

                                <LogOut />
                              </Nav>
                              <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-info">Search</Button>
                              </Form>
                              <Form inline> 
                              </Form>
                            </Navbar> 
                            <br /> 
                          </>  
                        ) : (
                            <>
                            <Navbar>
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

export default App;