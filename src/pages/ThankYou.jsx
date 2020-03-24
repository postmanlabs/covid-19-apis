import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="container-fluid enterprise-contact-thank-you__content-wrapper">
      <div className="body">
        <div className="body__content">
          <h1 className="alternative">Thanks for Your Interest</h1>
          <p className="subtitle alternative">We&apos;re absurdly excited to get your team started ASAP. </p>
          <p className="subtitle alternative">A member of the Postman team will reach out to you shortly.</p>
          <Link className="button content__action btn btn__primary" href="/" title="Return to homepage" aria-label="Return to homepage">Postman Home</Link>
        </div>
      </div>
    </div>
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
);

export default SecondPage;
