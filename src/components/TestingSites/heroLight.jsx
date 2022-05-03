import React from 'react';
import Legal from './legal';
// import { render } from 'node-sass';

function HeroLight({ usState }) {
  const place = usState;
  let capitalize = place.split('-');
  capitalize = capitalize.map((caps) => (
    caps.charAt(0).toUpperCase() + caps.slice(1)
  ));
  capitalize = capitalize.join(' ');

  return (
    <div className="container-fluid ts-hero-background">
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
}

export default HeroLight;
