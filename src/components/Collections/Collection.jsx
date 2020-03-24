import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';


const Collection = () => {
  const data = useStaticQuery(graphql`
    query {
      collectionLinks {
        value
      }
    }
  `);

  return (
    JSON.parse(data.collectionLinks.value).links.map((link) => {
      const {
        title, urlDoc, urlPost, description,
      } = link;
      return (
        <div key={Math.random()} className="row collection">
          <div className="col-md-7">
            <div className="row collection__meta">
              <div className="col-12 collection__title">
                {title}
              </div>
              <div className="col-12 collection__description">
                {description}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <a className="btn btn__secondary-light" href={urlDoc}>Documentation</a>
            <a className="btn btn__primary" href={urlPost}>Run in Postman</a>
          </div>
        </div>
      );
    })
  );
};

export default Collection;
