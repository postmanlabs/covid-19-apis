import React from 'react';
// import Legal from './legal';

function HeroPage({ pageTitle }) {
  const heroTitle = pageTitle;

  return (
    <div className="container-fluid ts-hero-background">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 heroLight_title">
            <h1 className="mb-0">
              {heroTitle}
            </h1>
            {/* <Legal /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
