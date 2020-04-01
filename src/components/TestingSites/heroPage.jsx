import React from 'react';
import { Link } from 'gatsby';

const HeroPage = ({ pageTitle }) => {
  const heroTitle = pageTitle;

  return (
    <div className="container-fluid ts-hero-background pb-4">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 heroLight_title">
            <h1 className="mb-4">
              {heroTitle}
            </h1>
            <p className="subtitle mb-0">
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

export default HeroPage;
