import { Link } from 'gatsby';
import React from 'react';

const DynamicLink = ({ className, url, name }) => {
  const classes = className ? ` ${className}` : '';
  if (url.substring(0, 4) === 'http') {
    return (
      <a className={`dynamic-link__external${classes}`} href={url}>{name}</a>
    );
  }
  return (
    <Link className={`dynamic-link__internal${classes}`} to={url}>{name}</Link>
  );
};

export default DynamicLink;
