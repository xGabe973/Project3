import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { isEqual, isNull, keys, pickBy } from 'lodash';
//import renderEmpty from "antd/lib/config-provider/renderEmpty";

const btnColor = {backgroundColor: '#C38D9E', margin: '10px'};


export default class EditProfile extends Component {
    
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.blur = this.blur.bind(this);
        this.calculateBMI = this.calculateBMI.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.getValue = this.getValue.bind(this);
        this.getDescription = this.getDescription.bind(this);
        this.state = this._getInitialState_.bind(this);

        this.state = {
            name: '',
            weight: '',
            feet: '',
            inches: '',
            age: '',
            bodyGoal: '',
            bmi: ''
        }
        
    }
    
    state = {
        name: "",
        //password: "",
        weight: "",
        feet: "",
        inches: "",
        age: "",
        bodyGoal: "",
        bmi: ''
    };

    componentDidMount() {
        axios.get('http://localhost:4000/users/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: '',
                    weight: '',
                    feet: '',
                    inches: '',
                    age: '',
                    bodyGoal: '',
                    bmi: ''
                })
            }).catch(function(error) {
                console.log(error)
            });
    };

    _getInitialState_(state) {
        return {
            weight: Number(state.weight) || null,
            feet: Number(state.feet) || null,
            inches: Number(state.inches) || null
        }
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const obj = {
            weight: this.state.weight,
            feet: this.state.feet,
            inches: this.state.inches,
            age: this.state.age,
            bodyGoal: this.state.bodyGoal,
            bmi: this.state.bmi
        };
        console.log(obj);
        axios.post('http://localhost:4000/users/update/' + this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/profile');
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

    blur(event) {
        this.calculateBMI(event);
    }
    calculateBMI = (state) => {
        let kg = state.weight * 0.45;
        let m = ((state.feet * 12) + state.inches) * 0.025;
        return (kg / Math.pow(m,2)).toFixed(1);
    };
    getValue() {
        if (this.validateForm()) {
            return this.calculateBMI();
        }
        return '--.-';
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
    
    render() {
        let { name, weight, feet, inches, age, bodyGoal, bmi } = this.state;
        return (
            <div class="container">
                <div class="card-body registerForm">
                    <h1>Edit Your Stats {name}</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <label htmlFor="exampleInputWeight1">Weight</label>
                            <input type="integer" name="weight" class="form-control" id="exampleInputWeight1" placeholder="lbs" value={weight} onChange={this.handleInputChange} onBlur={this.blur} required />
                        </div>
                        <div class="form-group">
                            <label htmlFor="exampleInputheight1">Height</label>
                            <input type="integer" name="feet" class="form-control" id="exampleInputfeet1" placeholder="feet" value={feet} onChange={this.handleInputChange} onBlur={this.blur} required />
                            <input type="integer" name="inches" class="form-control" id="exampleInputinches1" placeholder="inches" value={inches} onChange={this.handleInputChange} onBlur={this.blur} required />
                        </div>
                        <div>
                        {bmi}
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
                        <br />
                        <button type="submit" style={btnColor} class="btn btn-primary" children="Register" value="Update DB">Submit</button>
                    </form>
                    <Link to="/">← Back to Home Page</Link>
                </div>
            </div>
        )
        }
};