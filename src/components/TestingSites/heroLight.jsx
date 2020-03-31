import React from 'react';
import { Link } from 'gatsby';
// import { render } from 'node-sass';

const HeroLight = ({ usState }) => {
  const place = usState;
  const capitalize = place.charAt(0).toUpperCase() + place.slice(1);

  return (
    <div className="container-fluid ts-hero-background pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-9 hero_title offset-md-1">
            <h1>
              COVID-19 Testing Locations in
              {' '}
              {capitalize}
            </h1>
            <p className="subtitle">
              This is a crowdsourced effort, and
              {' '}
              <Link to="https://github.com/postmanlabs/covid-19-apis" className="herolink" target="_blank" rel="noopener noreferrer">
                anyone can contribute
              </Link>
              . We do our best to verify all information, but standard indemnifications apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLight;
