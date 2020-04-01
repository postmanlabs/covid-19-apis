import React from 'react';
import { Link } from 'gatsby';
import heroImage from '../../images/covid19-image-2.png';

const Hero = () => (
  <div className="container-fluid hero ts-hero-background pb-4">
    <div className="container">
      <div className="row">
        <div className="col-md-6 hero_title">
          <h1>
            COVID-19 Testing Locations
          </h1>
          <p className="subtitle mb-0">
            This is a crowdsourced effort, and
            {' '}
            <a href="https://github.com/postmanlabs/covid-19-apis" className="herolink" target="_blank" rel="noopener noreferrer">
              anyone can contribute
            </a>
            . We do our best to verify all information, but standard indemnifications apply.
          </p>
        </div>
        <div className="col-md-6 hero_image">
          <img src={heroImage} alt="Isolated COVID-19 virus in space. Illustration." />
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
