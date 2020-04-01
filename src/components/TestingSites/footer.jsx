import React from 'react';

const Footer = () => (
  <div className="container-fluid ts-footer ts-section">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 mb-4">
          <a className="homelink" href="/covid-19-testing-sites/">COVID-19 TESTING SITES</a>
        </div>
        <div className="col-sm-12 mb-4">
          <a className="navlink" href="/covid-19-testing-sites/about/">About</a>
          <a className="navlink" href="/covid-19-testing-sites/faqs/">FAQs</a>
          <a className="navlink" href="/covid-19-testing-sites/how-it-works/">How it Works</a>
        </div>
      </div>
      <div className="row attribution">
        <div className="col-sm-12">
          <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer"><img className="pm-logo" src="https://assets.getpostman.com/common-share/postman-logo-horizontal-white.svg" alt="Postman" /></a>
          <p>
            A project developed by the
            {' '}
            <a href="https://www.postman.com/" className="attributionlink" target="_blank" rel="noopener noreferrer">Postman team</a>
            , using APIs from the
            {' '}
            <a href="https://covid-19-apis.postman.com/" className="attributionlink" target="_blank" rel="noopener noreferrer">Postman COVID-19 API Resource Center</a>
            , along with
            {' '}
            <a href="https://github.com/postmanlabs/covid-19-apis" className="attributionlink" target="_blank" rel="noopener noreferrer">community contributions</a>
            .
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
