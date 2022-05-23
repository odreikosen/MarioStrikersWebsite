import React from 'react';

import {Carousel} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'


import './Tournament.css';

const Tournaments = () => {
  return (
    <div className="tourney-container">
      <h1>Active Tournaments</h1>
        <div className="tourney-list">
          <Carousel className="carousel-container" fade={true}>
            <Carousel.Item className="justify-content-center">
            <LinkContainer to="/tournaments/crumble">
              <img
              className="tourn-photo"
                src={require('../../assets/crumbLogo.png')}
                alt="Welcome 2 The Crumble"
              />
              </LinkContainer>
              <Carousel.Caption>
                <h3>Welcome 2 The Crumble [SMS]</h3>
                <p>A tournament for new SMS players</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="justify-content-center">
            <LinkContainer to="/tournaments/worldcup">
              <img
              className="tourn-photo"
                src={require('../../assets/wclogo.png')}
                alt="World Cup"
              />
              </LinkContainer>
              <Carousel.Caption>
                <h3>World Cup [SMS]</h3>
                <p>48 Nations competing for the ultimate glory</p>
              </Carousel.Caption>
            </Carousel.Item>
          
            </Carousel>
          </div>
      </div>
    )
}

export default Tournaments;