/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */

import React from 'react';
import { Link } from 'gatsby';

const Site = ({
  now, state, title, abbr, endpoint,
}) => (
  <div className="card ts-cards col-sm-4">
    <div className="card-body">
      <h3 className="card-title">{title}</h3>
      <p className="lastUpdated">
        Last updated:
        {' '}
        {now}
      </p>
      <ul>
        {state.map((site) => {
          if (site.featured === 'TRUE') {
            return (
              <li key={Math.random()}>
                <Link to={`/covid-19-testing-sites/${endpoint}`}>
                  {' '}
                  {site.name}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
    <div className="card-footer">
      <Link to={`/covid-19-testing-sites/${endpoint}`} className="btn btn-dark ts-button">
        View all
        {' '}
        {abbr}
        {' '}
        sites
      </Link>
    </div>
  </div>
);

export default Site;
