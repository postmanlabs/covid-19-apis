import React from 'react';

const callToActionConsumers = () => (
  <div className="container-fluid ts-section">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center ts-call-to-action">
          <h2>Know of Updated Testing Sites?</h2>
          <p>
            This is a crowdsourced project. If you found a new or updtaed testing site and you’d like to , email us at
            {' '}
            <a href="mailto:covid-19@postman.com">covid-19@postman.com</a>
            .
          </p>
          <button type="button" className="btn btn-dark">Email us</button>
        </div>
      </div>
    </div>
  </div>
);

export default callToActionConsumers;
