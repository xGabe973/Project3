import React, { Component } from "react";
import App from "./App";
import firebase from "./firebase";


class Auth extends Component{
    state = {
        authenticated: false,
      };
      componentDidMount() {
        console.log(this.state.authenticated);
        firebase.auth().onAuthStateChanged((authenticated) => {
          authenticated
            ? this.setState(() => ({
              authenticated: true,
            }))
            : this.setState(() => ({
              authenticated: false
            }))
        })
      }
      render() {
        return <App authenticated={this.state.authenticated}/>
    }
}

export default Auth;