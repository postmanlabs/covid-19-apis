import React from 'react';
// import heroImage from '../../images/hero_BG-asset.svg';
// import heroPostmanaut from '../../images/hero-postmanaut.svg';
import heroPostmanaut from '../../images/covid19-image-2.png';


const Hero = () => (
  <div className="container-fluid hero v5_starfield-small-night-sky">
    <div className="row">
      <div className="col-xs-6 col-lg-6 hero_title">
        <h1>
          Postman
          <br />
          COVID-19 API
          <br />
          Resource Center
        </h1>
      </div>
      <div className="col-xs-6 col-lg-6">
        <img src={heroPostmanaut} alt="postman hero" />
      </div>
    </div>
  </div>
);


export default Hero;
