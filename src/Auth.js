import React, { Component } from "react";
import App from "./App";
import firebase from "./firebase";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Auth extends Component{
    state = {
        authenticated: false,
        uid: ''
      };
      componentDidMount() {
        console.log('user?', this.state.authenticated);
        let uid = this.props.uid;
        console.log('eureka',uid);
        firebase.auth().onAuthStateChanged((authenticated, ...rest) => {
          authenticated
            ? 
            this.setState(() => ({
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

//export default Auth;