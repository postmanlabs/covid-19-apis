// this is the main page

import React from 'react';
import SEO from '../../components/seo';
import Layout from '../../components/TestingSites/layout';
import HeroPage from '../../components/TestingSites/heroPage';

import CallToActionConsumers from '../../components/TestingSites/callToActionConsumers';
import CallToActionDevs from '../../components/TestingSites/callToActionDevs';

const LegalPage = () => (
  <Layout>
    <SEO title="Legal | COVID-19 Testing Locations" />
    <HeroPage pageTitle="Legal" />
    <div className="container-fluid ts-main-area ts-section">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-10">
            <p>The information provided using this website is only intended to be general information for the public and is not intended to take the place of written law or regulations. Please use it at your own discretion. Not everyone needs to be tested for COVID-19. This site provides some information that might help in making decisions about seeking care or testing.</p>

            <p>By sending a written contribution to Postman, you grant a perpetual, royalty-free, unconditional license to Postman to publish your contribution in aggregate with other submissions on this website, as well as disseminate it to other parties, and to discuss or reference it in any publications related to or arising out of this website. You also agree that Postman has the right, but not the obligation, to edit or remove any contribution in Postman’s sole discretion.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="youmayalsolike">
      <div className="container-fluid ts-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <CallToActionConsumers />
            </div>
            <div className="col-sm-6">
              <CallToActionDevs />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default LegalPage;
