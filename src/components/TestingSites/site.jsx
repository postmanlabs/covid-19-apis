/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */

import React from 'react';
import { Link } from 'gatsby';
import moment from 'moment';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const Site = ({
  state, title, abbr, endpoint,
}) => {
  const updated = new Date(Math.max.apply(null, state.map((e) => new Date(e.updated))));
  const now = moment(updated).fromNow();

  return (
    <div className="card ts-cards col-md-4">
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
                  <AnchorLink to={`/covid-19-testing-locations/${endpoint}/#${site.name.replace(/\s/g, '')}`}>
                    {' '}
                    {site.name}
                  </AnchorLink>
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div className="card-footer">
        <Link to={`/covid-19-testing-locations/${endpoint}/`} className="btn btn-dark ts-button">
          View all
          {' '}
          {abbr}
          {' '}
          locations
        </Link>
      </div>
    </div>
  );
};

export default Site;
