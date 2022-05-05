import React from 'react';
import heroImage from '../../images/covid19-image-2.png';
import Legal from './legal';

function Hero() {
  return (
    <div className="container-fluid hero ts-hero-background pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 hero_title">
            <h1>
              COVID-19 Testing Locations
            </h1>
            <Legal />
          </div>
          <div className="col-md-6 hero_image">
            <img src={heroImage} alt="Isolated COVID-19 virus in space. Illustration." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
