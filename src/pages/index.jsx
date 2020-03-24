import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/Shared/Hero';
import Welcome from '../components/Shared/Welcome';
import Collection from '../components/Collections/Collection';
import Apis from '../components/Apis/Apis';
import Nonprofits from '../components/NonProfits/Nonprofits';
import Nonprofit from '../components/NonProfits/Nonprofits';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Welcome />
    <div className="collection__wrapper">
      <div className="row collection__header">
        <div className="col-md-12">
          <h1>API Collections to Help in the COVID-19 Fight</h1>
        </div>
        <div className="col-md-12">
          <p>Below is a list curated by Postman s developer relations team....</p>
        </div>
      </div>
      <div>
        <Collection />
      </div>
      <div className="row">
        <div className="col-md-12">
          <p className="collection__end">
            To submit an API to add to the list, please email us at COVID-19@postman.com.
          </p>
        </div>
      </div>
    </div>

    <div className="api__wrapper">
      <div className="row collection__header">
        <div className="col-md-12">
          <h1>Helping You Publish New COVID-Related APIs </h1>
        </div>
        <div className="col-md-12">
          <p>
            In addtion to the fast-growing list of existing APIs and
            API resources listed above, the Postman team is also working
            around the clock to create new....
          </p>
        </div>
      </div>
      <div>
        <Apis />
      </div>
      <div className="row">
        <div className="col-md-10">
          <p className="collection__end">
            If you have a pandemic-related project you would like deployed as an API,
            please email us at COVID-19@postman.com.
            {' '}
            If you would like additional help or guidance on using APIs to retrieve or expose...
          </p>
        </div>
      </div>
    </div>

    <Nonprofit />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
