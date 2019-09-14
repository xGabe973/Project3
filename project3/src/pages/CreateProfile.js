import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "../Components/Form/form";


class CreateProfile extends Component {
    state = {
        userName: "",
        password: "",
        firstName: "",
        weight: "",
        height: "",
        age: "",
        diet: "Cut, Bulk, Maintain",
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        alert(`Welcome ${this.state.firstName}`);
        this.setState({
            firstName: ""
            
        });
    };

render() {
    return (
        <div class="container">
            <div class="card-body">
                <form>
                    <div class="from-group">
                        <label for="exampleFormControlInput1">User Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="User Name"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Create your account password"></input>
                    </div>
                    <div class="from-group">
                        <label for="exampleFormControlInput1">Age</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Age"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Select your diet type: </label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>Cut (to lose fat)</option>
                            <option>Maintain (to stay at your current weight)</option>
                            <option>Bulk (to build muscle)</option>
                        </select>
                    </div>
                </form>
                <Form />
                <button type="submit" onClick={this.handleFormSubmit}  className="btn btn-success">
                    Create Profile
                </button>
            </div>
        </div>
    )
}




}





export default CreateProfile;