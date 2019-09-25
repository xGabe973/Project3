import React, { Component } from "react";
//import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'

const colorHeader = 
{backgroundColor: '#C38D9E'};
const colorName ={backgroundColor: '#E8A87C', borderRadius: '50%'}
const cardColor ={backgroundColor: '#ecf8f7'};

class ProfilePage extends Component {

    render() {
        return (
            
            <div>
               
               <Card  style={colorName} className="nameBox">
                    <Card.Body  >Hi, NAME!</Card.Body>
               </Card>
                
               <Card className="statsBox">
                <Card.Header style={colorHeader} className="cardHeader">Stats</Card.Header>
                <Card.Body style={cardColor}>
                    <Card.Text>
                    Weight:<br />
                    Height: <br />
                    Age:
                    </Card.Text>
                </Card.Body>
                </Card>

                <Card className="dietBox">
                <Card.Header style={colorHeader} className="cardHeader">Diet</Card.Header>
                <Card.Body style={cardColor}>
                    <Card.Text>
                    You chose to: CUT/BULK/MAINTAIN
                    </Card.Text>
                </Card.Body>
                </Card>
              
                <Card className="nutritionBox">
                <Card.Header style={colorHeader} className="cardHeader">Nutrition</Card.Header>
                <Card.Body style={cardColor}>
                    <Card.Text>
                   dsfsdfsdfsdfsdf
                    </Card.Text>
                </Card.Body>
                </Card>

                
                <Card className="workoutsBox">
                <Card.Header style={colorHeader} className="cardHeader">Workouts</Card.Header>
                <Card.Body style={cardColor}>
                    <Card.Text>
                   fsfdfgsfsdf
                    </Card.Text>
                </Card.Body>
                </Card>
                {/*<Link to="/">←Back to log in page</Link>*/}



                <Footer />

            </div>
           
            

        )
    }
}

export default ProfilePage
