import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Microsite/layout';
import SEO from '../components/seo';
import Hero from '../components/Microsite/Shared/Hero';
import Welcome from '../components/Microsite/Shared/Welcome';
import Collection from '../components/Microsite/Collections/Collection';
import Nonprofit from '../components/Microsite/NonProfits/Nonprofits';

function IndexPage() {
  return (
    <Layout>
      <SEO title="List of APIs and Blueprints" />
      <p>Hello world</p>
    </Layout>
  );
}

export default IndexPage;
