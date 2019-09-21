import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import firebase from "../firebase";

class Register extends Component {
    state = {
        email: "",
        password: "",
        error: null,
        id: user.uid
    };
        
    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
                this.props.history.push("/");
            })
            .catch((error) => {
                this.setState({ error: error });
            });
    };
    render() {
        const { email, password, error } = this.state;
        return (
            <div class="container">
            <div class="card-body">
                <h1>Register your account</h1>
                { error ? (
                    <h3>{error.message}</h3>
                ) : null}
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="text" name="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" value={email} onChange={this.handleInputChange} />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Create your account password" value={password} onChange={this.handleInputChange} />
                    </div>
                    <button type="submit" class="btn btn-primary" children="Register">Submit</button> 
                </form>
            </div>
            <Link to="/">← Back to Log In Page</Link>
        </div>
        );
    };
};
console.log(state);

export default withRouter(Register);