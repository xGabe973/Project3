import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Card from 'react-bootstrap/Card';
import axios from 'axios';
//import { tsConstructorType } from "@babel/types";
// import Button from 'react-bootstrap/Button'

const colorHeader = 
{backgroundColor: '#C38D9E'};
const colorName ={backgroundColor: '#E8A87C', borderRadius: '50%'}
const cardColor ={backgroundColor: '#ecf8f7'};

const User = props => (
    <div>
    <h1>{props.user.name}</h1>
    <h1>{props.user.weight}</h1>
    <h1>{props.user.feet}'{props.user.inches}</h1>
    <h1>{props.user.age}</h1>
    <h1>{props.user.bodyGoal}</h1>

    <Link to={"/edit/" + props.user._id}>Edit</Link>

    </div>
)
export default class ProfilePage extends Component {

    constructor(props) {
        super(props);
        console.log(props.match.params.uid);
        this.state = {
            user: {},
            uid: ''
        };
    };

    componentDidMount() {
        axios.get('/users/')
        .then(response => {
            const user = response.data.find((user) => user.uid === this.props.match.params.uid) ||
            {
                name: 'davidTest',
                email: 'email@test.com'
            }
            console.log('huh', user);
            this.setState({ user: user })
        })
        .catch(function (error){
            console.log(error);
        });
    };

   // compileUser() {
        // return this.state.users.map(function(currentUser, i) {
        //     return <User user={currentUser} key={i} />
        // })
   // }

    //user() {
      //  return this.state.users.map(function(currentUser, i) {
        //    return <User user={currentUser} key={i} />;
   //     });
   // }
    render() {
        return (
         
            
            
              <div> 
                <Card  style={colorName} className="nameBox">
                     <Card.Body  >Hi, {this.User} !</Card.Body>
                </Card>
                
                <Card className="statsBox">
                 <Card.Header style={colorHeader} className="cardHeader">Stats</Card.Header>
                 <Card.Body style={cardColor}>
                     <Card.Text>
                     Weight: {this.props.weight} <br />
                     Height: {this.props.feet}'{this.props.inches} <br />
                     BMI: {this.props.bmi} <br />
                     Age: {this.props.age}
                     </Card.Text>
                 </Card.Body>
            </Card>

            
                 <Card className="dietBox">
                 <Card.Header style={colorHeader} className="cardHeader">Diet</Card.Header>
                 <Card.Body style={cardColor}>
                     <Card.Text>
                     You chose to: {}
                     </Card.Text>
                 </Card.Body>
                 </Card>
              
                 <Card className="nutritionBox">
                 <Card.Header style={colorHeader} className="cardHeader">Nutrition</Card.Header>
                 <Card.Body style={cardColor}>
                     <Card.Text>
                    dsf
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
                 <br></br>
                 <Link to="/edit"> Edit your Profile Stats</Link>
                
                 <br></br>

                 <Link to="/">←Back to log in page</Link>

                 <Footer />
                
                 </div>
        
            
        )
        
    }
}