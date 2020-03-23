import React from 'react';
// import heroImage from '../../images/hero_BG-asset.svg';
// import heroPostmanaut from '../../images/hero-postmanaut.svg';
import heroPostmanaut from '../../images/covid19-image-2.png';


const Hero = () => (
  <div className="container-fluid hero">
    <div className="row">
      <div className="col-xs-6 col-lg-6 hero_title">
        <h1>
          Postman
          <br />
          Resources
          <br />
          for COVID-19
        </h1>
      </div>
      <div className="col-xs-6 col-lg-6">
        <img src={heroPostmanaut} alt="postman hero" />
      </div>
    </div>

  </div>
);


export default Hero;
