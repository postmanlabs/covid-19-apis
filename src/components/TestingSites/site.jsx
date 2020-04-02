/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */

import React from 'react';
import { Link } from 'gatsby';
import moment from 'moment';

const Site = ({
  state, title, abbr, endpoint,
}) => {
  const updated = new Date(Math.max.apply(null, state.map((e) => new Date(e.updated))));
  const now = moment(updated).fromNow();

  return (
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
                  <Link to={`/covid-19-testing-location/${endpoint}`}>
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
        <Link to={`/covid-19-testing-location/${endpoint}`} className="btn btn-dark ts-button">
          View all
          {' '}
          {abbr}
          {' '}
          sites
        </Link>
      </div>
    </div>
  );
};

export default Site;
