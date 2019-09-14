import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
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
          <div class="card-body">
            <h1>Please sign in</h1>
            {error ? (
              <h3>{error.message}</h3>
                ) : null} 
              <form onSubmit={this.handleSubmit}>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                      <input type="text" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" value={email} onChange={this.handleInputChange} />
                      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={this.handleInputChange} />
                  </div>
                  <div class="form-group form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                      <label class="form-check-label" for="exampleCheck1">Check me out</label>
                  </div>
                  <button type="submit" class="btn btn-primary" children="Log In">Log In</button>
              </form>
          </div>
          <Link to="/">← HOME </Link>
        <Footer />  
        </div>

    )
  }
}

export default withRouter(LogInPage);