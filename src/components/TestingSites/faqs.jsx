import React from 'react';
import { Link } from 'gatsby';

const FAQs = () => (
  <div className="ts-section text-center ts-faqs">
    <h2>FAQs</h2>
    <p>
      View the answers to freqeuntly asked questions about this project.
    </p>
    <Link to="/covid-19-testing-sites/faqs/" className="btn btn-dark">View all FAQs</Link>
  </div>
);

export default FAQs;
