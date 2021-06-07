// on state page
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

const StateTestingSites = () => {
  const data = useStaticQuery(graphql`
    query {
      californiaLinks {
        value
      }
    }
  `);

  return (
    JSON.parse(data.californiaLinks.value).states.map((state) => {
      const { name, description } = state;

      return (
        <div key={Math.random()} className="row collection">
          <div className="col-md-7">
            <div className="row collection__meta">
              <div className="col-12 collection__title">
                <h1>All California Testing Locations</h1>
                <h3>{name}</h3>
              </div>
              <div className="col-12 collection__description">
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      );
    })
  );
};

export default StateTestingSites;
