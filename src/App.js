import React from 'react';

// import logo from './logo.svg';
import './App.css';
import Wrapper from './Components/Wrapper/wrapper.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogInPage from './Pages/CreateProfile';
// import Title from "./componets/Title"
import CreateProfile from "./Pages/CreateProfile";
import ProfilePage from "./Pages/ProfilePage";
// import Header from "./Components/Header/";
import Test from "./Pages/Test"
import workouts from "./Pages/workouts"
import nutrition from "./Pages/workouts"
// import NoMatch from "./pages/NoMatch"


function App() {
  return (
    <Router>
      <div>
        <Wrapper>
        {/* <Nav /> */}
        <Switch>
          
          <Route exact path="/" component={LogInPage} />
          <Route exact path="/create" component={CreateProfile} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/workouts" component={workouts} />
          <Route exact path="/nutrition" component={nutrition} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;