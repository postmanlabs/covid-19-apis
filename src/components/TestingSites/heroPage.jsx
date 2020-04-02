import React from 'react';
// import Legal from './legal';

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
            {/* <Legal /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
