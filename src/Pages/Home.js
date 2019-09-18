import React, { Component } from "react";
// import Footer from "../Components/Footer";
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import BackgroundImagePage from "../Components/BackgroundImagePage";
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';


class Home extends Component{
    render() {
        return(
            <div>
               <Jumbotron fluid>
                <Container>
                    <h1>Mission SlimPossible</h1>
                    <p>
                    The new go to app to help you meet your nutrition goals!
                    </p>
                    <ButtonToolbar>
                        <Button variant="primary" size="lg">
                        ENTER
                        </Button>
                    </ButtonToolbar>
                </Container>
                </Jumbotron>
                <BackgroundImagePage />
                {/* <Footer /> */}
            </div>
        )  
    }
}

export default Home;