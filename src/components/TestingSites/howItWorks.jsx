import React from 'react';
import { Link } from 'gatsby';

function HowItWorks() {
  return (
    <div className="ts-section text-center ts-how-it-works">
      <h2>How it Works</h2>
      <p>
        View the technical details of this crowdsourced project.
      </p>
      <Link to="/covid-19-testing-locations/how-it-works/" className="btn btn-dark">Read more</Link>
    </div>
  );
}

export default HowItWorks;
