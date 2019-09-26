import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import firebase from "../firebase";
import Form from 'react-bootstrap/Form'

class Register extends Component {
    state = {
        email: "",
        password: "",
        error: null
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
            <div class="card-body registerForm">
                <h1>Register your account</h1>
                { error ? (
                    <h3>{error.message}</h3>
                ) : null}
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="text" name="email" class="form-control" id="exampleFormControlInput1" placeholder="Ex: email@email.com" value={email} onChange={this.handleInputChange} />
                        <small id="emailHelp" class="form-text text-muted">All information is secure</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password must be at least 6 characters long" value={password} onChange={this.handleInputChange} />
                    </div>
                </form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Weight</Form.Label>
                    <Form.Control type="integer" placeholder="in kilograms" />
                    <Form.Label>Height</Form.Label>
                    <Form.Control type="integer" placeholder="in centimeters" />
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="integer" placeholder="Age" />
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Diet Plan</Form.Label>
                        <Form.Control as="select">
                        <option>Cut (cut fat)</option>
                        <option>Maintain (stay at current weight)</option>
                        <option>Bulk (build muscle)</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Group>
                <button type="submit" class="btn btn-primary" children="Register">Submit</button> 

            </div>

            {/*<Link to="/">← Back to Log In Page</Link>*/}
        </div>
        );
    };
};

export default withRouter(Register);