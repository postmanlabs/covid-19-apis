import React from 'react';

const Disclaimer = () => (
  <div className="container-fluid ts-disclaimer mt-4 mb-4">
    <div className="container">
      <div className="card">
        <div className="card-body">
          <p className="mb-0">
            <strong>Note:</strong>
            This is a crowdsourced effort, and
            <a href="https://github.com/postmanlabs/covid-19-apis" target="_blank" rel="noopener noreferrer">
              anyone can contribute
            </a>
            . We do our best to verify all information, but standard indemnifications apply.
            <a href="/">Read more &#x2192;</a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Disclaimer;
