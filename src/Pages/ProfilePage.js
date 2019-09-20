import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from '../Components/Navbar/navbar.js';
import Footer from "../Components/Footer";
import API from "../utils/API";
import firebase from "../firebase";

class ProfilePage extends Component {
    state = {
        UID: "",
        name: "",
        age: "",
        height: "",
        weight: "",
        bmi: "",
        bodyType: "",
    };

    componentDidMount() {
        this.loadUsers();
    }

    loadUser = (UID) => {
        API.getUser(UID)
        .then(res => this.setState({ user: res.data }))
        .catch(err => console.log(err));
    }
    render() {
        return (
            
            <div>
               
                <Navbar />
                <p>Profile page is coming soon!</p>
                <Link to="/">←Back to log in page</Link>



                <Footer /> }

            </div>
           
            

        )
    }
}
export default ProfilePage;