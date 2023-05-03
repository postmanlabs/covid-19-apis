import React from 'react';
import { Hero } from 'aether-marketing';

const data = {
  heroLayout: 'sideXSide',
  sideXSideLayout: 'medium',
  title: ['Postman COVID-19 API Resource Center'],
  subtitle: ["This is an API-powered website with a Postman Collection behind it. Feel free to <a href='https://documenter.getpostman.com/view/8854915/SzS7PR3t?version=latest'>use the collection</a> for your COVID-19 applications or web pages. This is a crowdsourced effort and we welcome <a href='https://github.com/postmanlabs/covid-19-apis/tree/develop/src/components/TestingSites'>community contributions</a>. You can read the fine print <a href='/covid-19-testing-locations/legal/'>here</a>."],
  divider: false,
  backgroundColor: '',
  media: {
    class: 'mt-5 mt-lg-0',
    src: 'https://voyager.postman.com/illustration/api-monitoring-microscope-postman-illustration.svg',
    alt: 'API Monitoring. Illustration.',
  },
};

function HeroComponent() {
  return (
    <Hero
      heroLayout={data.heroLayout}
      sideXSideLayout={data.sideXSideLayout}
      divider={data.divider}
      title={data.title}
      subtitle={data.subtitle}
      media={data.media}
    />
  );
}

export default HeroComponent;
