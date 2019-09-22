import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import firebase from "../firebase";
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default class Register extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    state = {
        email: "",
        password: "",
        userName: "",
        weight: "",
        height: "",
        age: "",
        bodyGoal: "",
        error: null
    };
    
    calculateBmi() {
        var weight = document.Form.weight.value
        var height = document.Form.height.value
        if (weight > 0 && height > 0) {
            var finalBmi = weight / (height / 100 * height / 100)
            document.Form.bmi.value = finalBmi
            if (finalBmi < 18.5) {
                document.Form.meaning.value = "That you are too thin."
            }
            if (finalBmi > 18.5 && finalBmi < 25) {
                document.Form.meaning.value = "That you are healthy."
            }
            if (finalBmi > 25) {
                document.Form.meaning.value = "That you have overweight."
            }
        }
        else {
            alert("Please Fill in everything correctly")
        }
    }

    

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    handleSubmit = (event) => {
        event.preventDefault();
        if (!event.target.checkValidity()) {
            //form is invalid! so we do nothing
            return;
        }
        console.log(`Form Submitted:`);
        console.log(`Email: ${this.state.email}`);
        console.log(`UserName: ${this.state.userName}`);
        console.log(`height: ${this.state.height}`);
        console.log(`weight: ${this.state.weight}`);
        console.log(`age: ${this.state.age}`);
        console.log(`BodyGoal: ${this.state.bodyGoal}`);
        alert(`Welcome ${this.state.userName}`);

        const newUser = {
            email: this.state.email,
            userName: this.state.userName,
            height: this.state.height,
            weight: this.state.weight,
            age: this.state.age,
            bodyGoal: this.state.bodyGoal
        };
        
        axios.post('http://localhost:3001/users/add', newUser)
        .then(res => console.log(res.data));
        
        this.setState({
            email: '',
            userName: '',
            height: '',
            weight: '',
            age: '',
            bodyGoal: ''
        });
        const { email, password } = this.state;
        let databody = {
            "email": this.state.email,
            "username": this.state.userName,
            "weight": this.state.weight,
            "height": this.state.height,
            "age": this.state.age,
            "bodyGoal": this.state.bodyGoal
        }

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
                this.props.history.push("/");
            })
            .catch((error) => {
                this.setState({ error: error });
            });
            return fetch('/api/:id', {
                method: 'POST',
                body: JSON.stringify(databody),
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(res => res.json())
            .then(data => console.log(data));
    };
    render() {
        const { email, password, userName, weight, height, age, bodyGoal, error } = this.state;
        return (
            <div class="container">
                <div class="card-body registerForm">
                    <h1>Register your account</h1>
                    {error ? (
                        <h3>{error.message}</h3>
                    ) : null}
                    <form onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <label htmlFor="exampleFormControlInput1">Email address</label>
                            <input type="text" name="email" class="form-control" id="exampleFormControlInput1" placeholder="Ex: email@email.com" value={email} onChange={this.handleInputChange} required />
                            <small id="emailHelp" class="form-text text-muted">All information is secure</small>
                        </div>
                        <div class="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password must be at least 6 characters long" value={password} onChange={this.handleInputChange} required />
                        </div>
                        <div class="form-group">
                            <label htmlFor="exampleInputName1">UserName</label>
                            <input type="string" name="username" class="form-control" id="exampleInputName1" placeholder="John Smith" value={userName} onChange={this.handleInputChange} />
                        </div>
                            <div class="form-group">
                                <label htmlFor="exampleInputWeight1">Weight</label>
                                <input type="integer" name="weight" class="form-control" id="exampleInputWeight1" placeholder="in kilograms" value={weight} onChange={this.handleInputChange} required />
                            </div>
                            <div class="form-group">
                                <label htmlFor="exampleInputHeight1">Height</label>
                                <input type="integer" name="height" class="form-control" id="exampleInputHeight1" placeholder="in centimeters" value={height} onChange={this.handleInputChange} required />
                            </div>
                            <div class="form-group">
                                <label htmlFor="exampleInputAge1">Age</label>
                                <input type="integer" name="age" class="form-control" id="exampleInputAge1" placeholder="Age" value={age} onChange={this.handleInputChange} required />
                            </div>
                            <select name="bodyGoal" value={bodyGoal} onChange={this.handleInputChange}>
                                <option value="Cut">Cut (Cut Fat)</option>
                                <option value="Maintain">Maintain (Stay at Current Weight)</option>
                                <option value="Bulk">Bulk (Build Muscle)</option>
                            </select>
                            <button type="submit" class="btn btn-primary" children="Register" value="Add to DB">Submit</button>
                        </form>
                    <br>
                    </br>
                    {/*
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
                </div>*/}
                    



                    <Link to="/">← Back to Log In Page</Link>
                </div>
            </div >
        );
    };
};

// export default withRouter(Register);