import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase";
//import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { isEqual, isNull, keys, pickBy } from 'lodash';

export default class Register extends Component {

    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.blur = this.blur.bind(this);
        this.calculateBMI = this.calculateBMI.bind(this);

        this.state = {
            email: '',
            name: '',
            weight: '',
            feet: '',
            inches: '',
            age: '',
            bodyGoal: ''
        }
    }

    state = {
        email: "",
        password: "",
        name: "",
        weight: "",
        feet: "",
        inches: "",
        age: "",
        bodyGoal: "",
        error: null
    };

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
        console.log(`email: ${this.state.email}`);
        console.log(`name: ${this.state.name}`);
        console.log(`height: ${this.state.feet}'${this.state.inches}`);
        console.log(`weight: ${this.state.weight}`);
        console.log(`age: ${this.state.age}`);
        console.log(`BodyGoal: ${this.state.bodyGoal}`);
        alert(`Welcome ${this.state.name}`);

        const newUser = {
            email: this.state.email,
            name: this.state.name,
            feet: this.state.feet,
            inches: this.state.inches,
            weight: this.state.weight,
            age: this.state.age,
            bodyGoal: this.state.bodyGoal
        };

        axios.post('http://localhost4000:/users/add', newUser)
            .then(res => console.log(res.data));

        this.setState({
            email: '',
            name: '',
            feet: '',
            inches: '',
            weight: '',
            age: '',
            bodyGoal: ''
        });

        const { email, password } = this.state;
        let databody = {
            "email": this.state.email
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
        return fetch('/users/:id', {
            method: 'POST',
            body: JSON.stringify(databody),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
            .then(data => console.log(data));
    };

    blur(e) {
        this.calculateBMI();
    }

    calculateBMI = (weight, feet, inches) => {
        let kg = weight * 0.45;
        let m = ((feet * 12) + inches) * 0.025;
        return (kg / Math.pow(m,2)).toFixed(1);
    }
    
    getDescription() {
        const bmi = this.calculateBMI();
        if (this.validateForm()) {
          if (bmi < 18.5) {
            return 'Underweight';
          } else if (bmi < 25) {
            return 'Normal weight';
          } else if (bmi < 30) {
            return 'Overweight';
          } else if (bmi > 30) {
            return 'Obsese';
          }
        }
        return '';
      };

      getValue() {
        if (this.validateForm()) {
            return this.calculateBMI();
        }
        return '--.-';
    };
    validateForm = (state) => {
        return isEqual(
            keys(
                pickBy(
                    state, (val) => !isNull(val)
                )
            ),
            keys(state)
        );
    };

/*    calculateBMI() {

        var heightSquared = (this.state.height / 100 * this.state.height / 100);
        var bmi = this.state.weight / heightSquared;
        var low = Math.round(18.5 * heightSquared);
        var high = Math.round(24.99 * heightSquared);
        var message = "";
        if (bmi >= 18.5 && bmi <= 24.99) {
            message = "You are in a healthy weight range";
        }
        else if (bmi >= 25 && bmi <= 29.9) {
            message = "You are overweight";
        }
        else if (bmi >= 30) {
            message = "You are obese";
        }
        else if (bmi < 18.5) {
            message = "You are under weight";
        }
        this.setState({ message: message });
        this.setState({ optimalweight: "Your suggested weight range is between " + low + " - " + high });
        this.setState({ bmi: Math.round(bmi * 100) / 100 });

    }

    /*   computeBmi() {
           let bmiValue = ( this.state.weight / this.state.height) / this.state.height;
           this.setState({ bmi : bmiValue });
           let bmiClass = this.getBmi(bmiValue);
           this.setState({bmiClass : bmiClass })
       };
   
       getBmi(bmi) {
           if(bmi <18.5) {
               return "underweight";
           }
           if(bmi >= 18.5 && bmi < 24.9) {
               return "Normal";
           }
           if(bmi >= 25 && bmi < 29) {
               return "overweight";
           }
           if(bmi >= 30) {
               return "obesity";
           }
       }
       
    
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
   */

    render() {
        const { email, password, name, weight, feet, inches, age, bodyGoal, error } = this.state;
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
                            <label htmlFor="exampleInputName1">Name</label>
                            <input type="name" name="name" class="form-control" id="exampleInputName1" placeholder="John Smith" value={name} onChange={this.handleInputChange} required />
                        </div>
                        <div class="form-group">
                            <label htmlFor="exampleInputWeight1">Weight</label>
                            <input type="integer" name="weight" class="form-control" id="exampleInputWeight1" placeholder="in kilograms" value={weight} onChange={this.handleInputChange} onBlur={this.blur} required />
                        </div>
                        <div class="form-group">
                            <label htmlFor="exampleInputheight1">Height</label>
                            <input type="integer" name="feet" class="form-control" id="exampleInputfeet1" placeholder="feet" value={feet} onChange={this.handleInputChange} onBlur={this.blur} required />
                            <input type="integer" name="inches" class="form-control" id="exampleInputinches1" placeholder="inches" value={inches} onChange={this.handleInputChange} onBlur={this.blur} required />
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