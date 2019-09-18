import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";


class ProfilePage extends Component {


    render() {
        return (
            
            <div>
               
                <div class="card">
                    <div class="card-body">
                        <h1>Hello, NAME</h1>
                    </div>
                </div>
                
                <div class="card">
                    <img src="..." class="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <h2>Your Stats:</h2>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <h2>Recipes</h2>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <h2>Workout</h2>
                    </div>
                </div>          
                <div class="card">
                    <div class="card-body">
                        <h2>Diet Plan:</h2>
                    </div>
                </div>
                <Link to="/">←Back to log in page</Link>



                <Footer></Footer> 

            </div>
           
            

        )
    }
}

export default ProfilePage;