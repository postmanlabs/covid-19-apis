// lists all States
import React from 'react';
// import { Link } from 'gatsby';

export default ({ pageContext: { state } }) => (
  <div>
    <h1>State Site Template</h1>
    <div>
      <p>{state}</p>
      {console.log('state', state)}
    </div>
  </div>
);
