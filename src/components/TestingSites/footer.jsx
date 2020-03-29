import React from 'react';


const Footer = () => (
  <div className="container-fluid ts-footer ts-section">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 mb-4">
          <a className="header__homelink" href="https://www.postman.com">COVID-19 TESTING SITES</a>
        </div>
        <div className="col-sm-12 mb-4">
          <a className="navlink" href="/">About</a>
          <a className="navlink" href="/">FAQs</a>
          <a className="navlink" href="/">How it Works</a>
        </div>
        <div className="col-sm-12">
          <p>
            A project developed by the
            <a href="/">Postman team</a>
            , using APIs from the
            <a href="/">Postman COVID-19 API Resource Center</a>
            , along with
            <a href="/">community contributions</a>
            .
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
