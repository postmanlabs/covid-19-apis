import React from 'react';
import { Link } from 'gatsby';

const legalCopy = () => (
  <p className="subtitle mb-0">
    This is an API-powered website with a Postman Collection behind it. Feel free to
    {' '}
    <a rel="noopener noreferrer" href="https://documenter.getpostman.com/view/8854915/SzS7PR3t?version=latest" className="herolink">use the collection</a>
    {' '}
    for your  COVID-19 applications or web pages. This is a crowdsourced effort and we welcome
    {' '}
    <a rel="noopener noreferrer" href="https://github.com/postmanlabs/covid-19-apis/tree/develop/src/components/TestingSites" className="herolink">community contributions</a>
    .
    You can read the fine print
    {' '}
    <Link to="/covid-19-testing-locations/legal/" className="herolink">here</Link>
    .
    {/* This is a crowdsourced effort and
    {' '}
    <a href="https://github.com/postmanlabs/covid-19-apis" className="herolink" target="_blank" rel="noopener noreferrer">
      we welcome community contributions
    </a>
    .  Please read the
    {' '}
    <a href="/covid-19-testing-locations/legal/" className="herolink">legal fine print</a>
    {' '}
    before proceeding. */}
    {/* This project also includes a crowdsourced list of COVID-19 testing locations to centralize the availability of up-to-date information */}
  </p>
);

export default legalCopy;
