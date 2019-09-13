import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from '../Components/Navbar/navbar.js';
import Footer from "../Components/Footer";


class nutrition extends Component {


    render() {
        return (
            
            <div>
               
                <Navbar />
                <p>Nutrition page is coming soon!</p>
                <Link to="/">←Back to log in page</Link>



                <Footer /> }

            </div>
           
            

        )
    }
}

export default nutrition;