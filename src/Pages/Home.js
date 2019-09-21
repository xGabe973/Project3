import React, { Component } from "react";
import Footer from "../Components/Footer";
// import Container from 'react-bootstrap/Container';
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import BackgroundImagePage from "../Components/BackgroundImagePage";
// import Button from 'react-bootstrap/Button';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card';

const fontSize = {fontSize: '62px', textAlign: 'center', color: '#41B3A3',fontWeight: 'bolder', backgroudColor: 'black'};
const tagSize= {fontSize:'48px', textAlign: 'center', color: '#41B3A3',fontWeight: 'bolder'}
const bgColor ={ backgroudColor: '#C38D9E'};


class Home extends Component{
    render() {
        return(
            <div>
               {/* <Jumbotron style={jumboColor} fluid>
                <Container>
                    <h1>Mission SlimPossible <span role="img" aria-label="muscle">💪🏽</span></h1>
                    <p>
                    The new go to app to help you meet your nutrition goals!<br />
                    <span role="img" aria-label="avacado">🥑 </span>
                    <span role="img" aria-label="broccoli">🥦 </span>
                    <span role="img" aria-label="cucumber">🥒 </span>
                    <span role="img" aria-label="lettuce">🥬</span>
                    
                    </p>
                    <ButtonToolbar>
                        <Button variant="primary" size="lg">
                        ENTER
                        </Button>
                    </ButtonToolbar>
                </Container>
                </Jumbotron> */}

                <Card >
                    <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6nxDnmFw_IXdHUA4PpVXEOVPniEFsaaM1svbEu92ZWvo68EL6uA" alt="hearts"/>
                    <Card.ImgOverlay style={bgColor} >
                        <Card.Title className="bgColor" style={fontSize}>MissionSlimPossible</Card.Title>
                        <Card.Text style={bgColor} class="tagColor" style={tagSize}>
                        The new go to app to help you meet your nutrition goals!<br />
                        <span role="img" aria-label="avacado">🥑 </span>
                        <span role="img" aria-label="broccoli">🥦 </span>
                        <span role="img" aria-label="cucumber">🥒 </span>
                        <span role="img" aria-label="lettuce">🥬</span>
                        </Card.Text>
                    </Card.ImgOverlay>
                    </Card>
                {/* <BackgroundImagePage /> */}
                <Footer />

            </div>
        )  
    }
}

export default Home;
