import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from '../Components/Navbar/navbar.js';
import Footer from "../Components/Footer";


class ProfilePage extends Component {


    render() {
        return (
            
            <div>
               
                <Navbar />
                <p>Page is coming soon!</p>
                Your BMI: <input type="text" name="bmi" size="10"/><br />
                This Means: <input type="text" name="meaning" size="25"/><br />
                <Link to="/">←Back to log in page</Link>



                <Footer /> 

            </div>
           
            

        )
    }
}

export default ProfilePage;