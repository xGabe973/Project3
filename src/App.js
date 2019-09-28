import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import ProtectedRoute from "./ProtectedRoute";
import LogOut from "./Pages/LogOut";

import EditProfile from "./Pages/editProfile";

import ProfilePage from "./Pages/ProfilePage"
import LogInPage from "./Pages/LogInPage";
import nutrition from "./Pages/nutrition";
import workouts from "./Pages/workouts"
import Wrapper from './Components/Wrapper/wrapper.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Favorites from  "./Components/WorkoutUI/favorites";


class App extends Component {
    render() {
      console.log('oh?', this.props);
      const uid = this.props.uid;
      console.log('aye', uid);
        return (
            <Router>
                <div>
                   <Wrapper>
                        {this.props.authenticated ? (
                            <>
                            <Navbar >
                              <Navbar.Brand href="/">MissionSlimPossible</Navbar.Brand>
                              <Nav className="mr-auto">

                                <Nav.Link as={Link} to={`/profile/${uid}`}>Profile</Nav.Link>
                                <Nav.Link as={Link} to="/workouts">Workouts </Nav.Link>
                                <Nav.Link as={Link} to="/nutrition">Nutrition </Nav.Link>
                                <Favorites />

                                <LogOut />
                              </Nav>
                            </Navbar> 
                          </>  
                        ) : (
                            <>
                            <Navbar>
                              <Navbar.Brand href="/">MissionSlimPossible</Navbar.Brand>
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
                            <ProtectedRoute authenticated={this.props.authenticated} path="/edit" component={EditProfile} />
                            <ProtectedRoute authenticated={this.props.authenticated} path="/profile/:uid" component={ProfilePage} />

                               
                        </Switch>
                    </Wrapper>
                </div>
            </Router>
        
        )
    };
};

export default App;