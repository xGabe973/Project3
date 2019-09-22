import React, { Component } from "react";
import Footer from "../Components/Footer";

import Card from 'react-bootstrap/Card';

const fontSize = {fontSize: '60px', textAlign: 'center', color: '#333',fontWeight: 'bolder', borderRadius: '30%'};
const tagSize= {fontSize:'40px', textAlign: 'center', color: '#333',fontWeight: 'bolder', borderRadius: '30%'}



class Home extends Component{
    render() {
        return(
            <div>
             

                <Card >
                    <Card.Img src="https://www.phhyky.fi/assets/files/2016/11/Syd%C3%A4n-astia.jpeg" alt="Fruits and Vegtables in heart containers"/>
                    <Card.ImgOverlay  >
                        <Card.Title className="bgColor" style={fontSize}>MissionSlimPossible</Card.Title>
                        <Card.Text  class="tagColor" style={tagSize}>
                        The new go to app to help you meet your nutrition goals!<br />
                        {/* <span role="img" aria-label="avacado">🥑 </span>
                        <span role="img" aria-label="broccoli">🥦 </span>
                        <span role="img" aria-label="cucumber">🥒 </span>
                        <span role="img" aria-label="lettuce">🥬</span> */}
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
