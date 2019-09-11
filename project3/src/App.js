import React from 'react';

// import logo from './logo.svg';
import './App.css';
import Wrapper from './Components/Wrapper/wrapper.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogInPage from './pages/LogInPage';
// import Title from "./componets/Title"
import CreateProfile from "./pages/CreateProfile";
import ProfilePage from "./pages/ProfilePage";
import Test from "./pages/Test"
import workouts from "./pages/workouts"
import nutrition from "./pages/nutrition"
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