import React from 'react';
import { Link } from 'gatsby';

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
          <img className="pm-logo" src="https://assets.getpostman.com/common-share/postman-logo-horizontal-white.svg" alt="Postman" />
          <p>
            A project developed by the
            {' '}
            <Link to="https://www.postman.com/" className="attributionlink" target="_blank" rel="noopener noreferrer">Postman team</Link>
            , using APIs from the
            {' '}
            <Link to="https://covid-19-apis.postman.com/" className="attributionlink" target="_blank" rel="noopener noreferrer">Postman COVID-19 API Resource Center</Link>
            , along with
            {' '}
            <Link to="https://github.com/postmanlabs/covid-19-apis" className="attributionlink" target="_blank" rel="noopener noreferrer">community contributions</Link>
            .
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
