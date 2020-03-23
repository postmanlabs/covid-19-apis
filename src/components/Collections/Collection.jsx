
import { Link } from 'gatsby';
import React from 'react';

const Collection = ({ title, description, url }) => (
  <div className="row">
    <div className="col-md-7">
      {title}
      {description}
    </div>
    <div className="col-md-4">
      <Link className="button1" to={url}>Documentation</Link>
      <Link className="button2" to={url}>Run in Postman</Link>
    </div>
  </div>
);


export default Collection;
