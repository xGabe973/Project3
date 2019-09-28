import React, { Component } from "react";
import Footer from "../Components/Footer";

import Card from 'react-bootstrap/Card';
import Logo from '../asset/mission.svg';

// const fontSize = {fontSize: '60px', textAlign: 'center', color: '#333',fontWeight: 'bolder', borderRadius: '10%'};
// const tagSize= {fontSize:'40px', textAlign: 'center', color: '#333',fontWeight: 'bolder', borderRadius: '10%'}



class Home extends Component{
    render() {
        return(
            <div>
             

                <Card >
                    <Card.Img src="https://www.phhyky.fi/assets/files/2016/11/Syd%C3%A4n-astia.jpeg" alt="Fruits and Vegtables in heart containers"/>
                    <Card.ImgOverlay  >
                    <Card.Img  className='logo' src={Logo} />
                        {/* <Card.Title className="bgColor" style={fontSize}>MissionSlimPossible</Card.Title> */}
                       

                    </Card.ImgOverlay>
                    
                    </Card>
                {/* <BackgroundImagePage /> */}
                <Footer />

            </div>
        )  
    }
}

export default Home;
