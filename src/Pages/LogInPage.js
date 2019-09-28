/*import React, { Component } from "react";
//import { Link } from "react-router-dom";
// import Footer from "../Components/Footer";
import { withRouter } from "react-router-dom";
import firebase from "../firebase";


class LogInPage extends Component{

state = {
    email: "",
    password: "",
    error: null,
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  };
    render() {
      const { email, password, error } = this.state;
    return(
        <div class="container">
          <div class="card-body cardSign">
            <h1 className="signIn">Please sign in</h1>
            {error ? (
              <h3>{error.message}</h3>
                ) : null} 
              <form onSubmit={this.handleSubmit}>
                  <div class="form-group emailBox">
                   //<label for="exampleInputEmail1">Email address</label>
                      <input type="text" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" value={email} onChange={this.handleInputChange} />
                      <small id="emailHelp" class="form-text text-muted">Example: email@email.com</small>
                  </div>
                  <div class="form-group">
                    //<label for="exampleInputPassword1">Password</label>
                      <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={this.handleInputChange} />
                      <small id="passwordHelp" class="form-text text-muted">Password must be at least 6 characters long.</small>

                  </div>
                  
                  <button type="submit" class="btn btn-primary" children="Log In">Log In</button>
              </form>
          </div>
          {/*<Link to="/">← HOME </Link>
        {/* <Footer />   
        </div>

    )
  }
}

export default withRouter(LogInPage);*/

import React, { Component } from "react";
//import { Link } from "react-router-dom";
// import Footer from "../Components/Footer";
import { withRouter } from "react-router-dom";
import firebase from "../firebase";


const btnColor = {backgroundColor: '#C38D9E'};


class LogInPage extends Component{

state = {
    uid: '',
    email: "",
    password: "",
    error: null,
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        let uid= user.uid;
        console.log("info?", user);
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  };
    render() {
      const { email, password, error } = this.state;
    return(
        <div class="container">
          <div class="card-body cardSign">
            <h1 className="signIn">Please sign in</h1>
            {error ? (
              <h3>{error.message}</h3>
                ) : null} 
              <form onSubmit={this.handleSubmit}>
                  <div class="form-group emailBox">
                    {/* <label for="exampleInputEmail1">Email address</label> */}
                      <input type="text" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" value={email} onChange={this.handleInputChange} />
                      <small id="emailHelp" class="form-text text-muted">Example: email@email.com</small>
                  </div>
                  <div class="form-group">
                      {/* <label for="exampleInputPassword1">Password</label> */}
                      <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={this.handleInputChange} />
                      <small id="passwordHelp" class="form-text text-muted">Password must be at least 6 characters long.</small>

                  </div>
                  
                  <button type="submit" style={btnColor} class="btn" children="Log In">Log In</button>
              </form>
          </div>
          {/*<Link to="/">← HOME </Link>*/}
        {/* <Footer />   */}
        </div>

    )
  }
}

export default withRouter(LogInPage);