// lists all States
import React from 'react';
import { Link } from 'gatsby';


// problem is taht I only pass in the page context. we need all the data
export default ({ data }) => (
  <div>
    <h1>state list Template</h1>
    <ul>
      {data.map((state) => (
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
