import React from 'react';
// import heroImage from '../../images/hero_BG-asset.svg';
// import heroPostmanaut from '../../images/hero-postmanaut.svg';
import heroImage from '../../../images/covid19-image-2.png';

const Hero = () => (
  <div className="container-fluid hero v5_starfield-small-night-sky pb-4">
    <div className="container">
      <div className="row">
        <div className="col-md-6 hero_title">
          <h1>
            Postman COVID-19 API Resource Center
          </h1>
        </div>
        <div className="col-md-6 hero_image">
          <img src={heroImage} alt="Isolated COVID-19 virus in space. Illustration." />
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
