import React from 'react';
import { Link } from 'gatsby';

const About = () => (
  <div className="ts-section text-center ts-about">
    <h2>About</h2>
    <p>
      View the story of this crowdsourced project.
    </p>
    <Link to="/covid-19-testing-locations/about/" className="btn btn-dark">Read more</Link>
  </div>
);

export default About;
