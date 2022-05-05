import React from 'react';

function Header() {
  return (
    <header className="header navbar navbar-light ts-topnav">
      <div className="navbar-brand header__brand">
        <a
          className="header__homelink"
          href="/covid-19-testing-locations/"
        >
          COVID-19 Testing Locations
        </a>
        <a className="navlink" href="/covid-19-testing-locations/about/">About</a>
        <a className="navlink" href="/covid-19-testing-locations/faqs/">FAQs</a>
        <a className="navlink" href="/covid-19-testing-locations/how-it-works/">How it Works</a>
      </div>
      <div className="ts-brought-to-you-by">
        <a href="https://www.postman.com" target="_blank" rel="noopener noreferrer">
          brought to you by
          <img src="https://assets.getpostman.com/common-share/postman-logo-horizontal-white.svg" alt="Postman" />
        </a>
      </div>
    </header>
  );
}

export default Header;
