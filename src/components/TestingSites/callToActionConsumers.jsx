import React from 'react';
import { Link } from 'gatsby';

const callToActionConsumers = () => (
  <div className="container-fluid ts-section">
    <div className="row">
      <div className="col-sm-12 ts-call-to-action">
        <h2>Know of Updated Testing Sites?</h2>
        <p>
          This is a crowdsourced project. If you found a new or updated testing site and you’d like to submit it, email us.
        </p>
        <Link to="mailto:covid-19@postman.com" className="btn btn-dark ts-button">Email us</Link>
      </div>
    </div>
  </div>
);

export default callToActionConsumers;
