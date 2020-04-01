import React from 'react';

const Header = () => (
  <header className="header text-center navbar navbar-expand-xl navbar-light ts-topnav">
    <div className="navbar-brand header__brand">
      <a
        className="header__homelink"
        href="/covid-19-testing-sites/"
      >
        COVID-19 Testing Sites
      </a>
    </div>
    <div className="navbar-links">
      <a className="navlink" href="/covid-19-testing-sites/about/">About</a>
      <a className="navlink" href="/covid-19-testing-sites/faqs/">FAQs</a>
      <a className="navlink" href="/covid-19-testing-sites/how-it-works/">How it Works</a>
    </div>
  </header>
);

export default Header;
