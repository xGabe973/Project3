import React, { Component } from "react";
import App from "./App";
import firebase from "./firebase";
import 'bootstrap/dist/css/bootstrap.min.css';

class Auth extends Component{
    state = {
        authenticated: false,
        uid: ""
      };
      componentDidMount() {
        console.log(this.state.authenticated);
        firebase.auth().onAuthStateChanged((authenticated, ...rest) => {
          authenticated
            ? this.setState(() => ({
              authenticated: true,
              uid: authenticated.uid
            }))
            : this.setState(() => ({
              authenticated: false,
              uid: ""
            }))
        })
      }
      render() {
        return <App authenticated={this.state.authenticated} uid={this.state.uid} />
    }
}

export default Auth;