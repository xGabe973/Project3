import React from 'react';
import Form from  './Components/Form/form.js'
import Navbar from './Components/Navbar/navbar.js';
import Wrapper from './Components/Wrapper/wrapper.js';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogInPage from './pages/LogInPage';
// import Title from "./componets/Title"
import CreateProfile from "./pages/CreateProfile";
import ProfilePage from "./pages/ProfilePage";
import Test from "./pages/Test"
// import NoMatch from "./pages/NoMatch"


function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          
          <Route exact path="/" component={LogInPage} />
          <Route exact path="/create" component={CreateProfile} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/Workout" component={Workout} />
          <Route exact path="/Nutrition" component={Nutrition} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;