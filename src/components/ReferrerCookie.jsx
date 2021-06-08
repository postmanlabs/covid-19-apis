import React from 'react';

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) { return parts.pop().split(';').shift(); }
  return undefined;
};

const parseQuery = (query) => {
  const pairs = query.slice(1).split('&');
  const result = {};
  pairs.forEach((pair) => {
    const items = pair.split('=');
    result[items[0]] = decodeURIComponent(items[1] || '');
  });
  return result;
};

const setGclidCookie = () => {
  const { search } = window.location;
  const queries = parseQuery(search);
  if (queries.gclid) {
    const now = new Date();
    const timeStamp = now.setDate(now.getDate() + 30);
    const expiration = new Date(timeStamp).toUTCString();
    document.cookie = 'gclid=; expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;secure';
    document.cookie = `gclid=${queries.gclid};expires=${expiration};path=/;secure;`;
  }
};

const setReferrerCookie = () => {
  const referrerUrl = document.referrer !== '' ? document.referrer : 'null';
  const now = new Date();
  const timeStamp = now.setDate(now.getDate() + 30);
  const expiration = new Date(timeStamp).toUTCString();
  const currentCookie = getCookie('referrer_url');
  if (!referrerUrl.split('?')[0].includes('postman.com')) {
    if (referrerUrl !== '' || currentCookie === 'null' || currentCookie === undefined) {
      document.cookie = 'referrer_url=; expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;secure';
      document.cookie = `referrer_url=${referrerUrl};expires=${expiration};path=/;secure;`;
    }
  }
};

class ReferrerCookie extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  componentDidMount() {
    setReferrerCookie();
    setGclidCookie();
  }

  render() {
    return (
      <>
      </>
    );
  }
}

export default ReferrerCookie;
