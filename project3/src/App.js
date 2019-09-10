import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Form from  './Components/Form/form.js'
import Navbar from './Components/Navbar/navbar.js';
import Wrapper from './Components/Wrapper/wrapper.js';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/SignOrLogIn" component={signUpLogIn} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Workout" component={Workout} />
          <Route exact path="/Nutrition" component={Nutrition} />  
        </Wrapper>
        <Footer />
        </div>
      </Router>
     );
}

export default App;
