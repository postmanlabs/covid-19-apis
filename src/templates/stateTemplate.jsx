// lists all States
import React from 'react';
import { Link } from 'gatsby';

export default ({ pageContext: { allState } }) => (
  <div>
    <h1>state list Template</h1>
    <ul>
      {allState.map((state) => (
        <li key={state.id}>
          <Link to={`/covid-19-testing-sites/state/${state}/`}>
            <p>{state}</p>
            <p>{state.id}</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
