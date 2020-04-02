import React from 'react';

const Header = () => (
  <header className="header navbar navbar-light ts-topnav">
    <div className="navbar-brand header__brand">
      <a
        className="header__homelink"
        href="/covid-19-testing-location/"
      >
        COVID-19 Testing Sites
      </a>
      <a className="navlink" href="/covid-19-testing-location/about/">About</a>
      <a className="navlink" href="/covid-19-testing-location/faqs/">FAQs</a>
      <a className="navlink" href="/covid-19-testing-location/how-it-works/">How it Works</a>
    </div>
    <div className="ts-brought-to-you-by">
      <a href="https://www.postman.com" target="_blank" rel="noopener noreferrer">
        brought to you by
        <img src="https://assets.getpostman.com/common-share/postman-logo-horizontal-white.svg" alt="Postman" />
      </a>
    </div>
  </header>
);

export default Header;
