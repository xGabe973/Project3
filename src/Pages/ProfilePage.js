import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class ProfilePage extends Component {


    render() {
        return (
            
            <div>
               
               <Card>
                    <Card.Body>Hi, NAME!</Card.Body>
               </Card>
                
               <Card>
                <Card.Header>Stats</Card.Header>
                <Card.Body>
                    <Card.Title>Stats</Card.Title>
                    <Card.Text>
                    Weight:
                    Height:
                    Age:
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>

                <Card>
                <Card.Header>Stats</Card.Header>
                <Card.Body>
                    <Card.Title>Diet Plan:</Card.Title>
                    <Card.Text>
                    You chose to: CUT/BULK/MAINTAIN
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                </Card>
              
                <Card>
                <Card.Header>Recipes</Card.Header>
                <Card.Body>
                    <Card.Title>Recipes</Card.Title>
                    <Card.Text>
                   dsfsdfsdfsdfsdf
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                </Card>

                
                <Card>
                <Card.Header>Workouts</Card.Header>
                <Card.Body>
                    <Card.Title>Workouts</Card.Title>
                    <Card.Text>
                   fsfdfgsfsdf
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                </Card>
                <Link to="/">←Back to log in page</Link>



                <Footer />

            </div>
           
            

        )
    }
}

export default ProfilePage;