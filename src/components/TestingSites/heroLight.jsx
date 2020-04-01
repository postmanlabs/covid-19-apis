import React from 'react';
import Legal from './legal';
// import { render } from 'node-sass';

const HeroLight = ({ usState }) => {
  const place = usState;
  const capitalize = place.charAt(0).toUpperCase() + place.slice(1);

  return (
    <div className="container-fluid ts-hero-background pb-4">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 heroLight_title">
            <h1>
              COVID-19 Testing Locations in
              {' '}
              {capitalize}
            </h1>
            <Legal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLight;
