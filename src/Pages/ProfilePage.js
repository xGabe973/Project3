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
        console.log('info2?', props.match.params.email);
        this.state = {
            user: {
                uid : props.match.params.uid,
                name: this.name,
                email: props.match.params.email,
                age: this.age,
                feet: this.feet,
                inches: this.inches,
                weight: this.weight,
                bmi: this.bmi,
                bodyGoal: this.bodyGoal,
            },
            
        };
        console.log('hmm', this.state);
    };
    state = {
        uid: '',
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
        
        const { uid, email, password, name, weight, feet, inches, age, bodyGoal, bmi, error } = this.state;
        return (
         
            
            
              <div>
                <Card  style={colorName} className="nameBox">
                     <Card.Body  >Hi, {this.state.uid} !</Card.Body>
                </Card>
                
                <Card className="statsBox">
                 <Card.Header style={colorHeader} className="cardHeader">Stats</Card.Header>
                 <Card.Body style={cardColor}>
                     <Card.Text>
                     Weight: {weight} <br />
                     Height: {this.state.feet}{this.props.inches} <br />
                     BMI: {bmi} <br />
                     Age: {User.age}
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
