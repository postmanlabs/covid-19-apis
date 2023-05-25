import React from 'react';
import { Hero } from 'aether-marketing';

const data = {
  heroLayout: 'sideXSide',
  sideXSideLayout: 'medium',
  title: ['Postman COVID-19 API Resource Center'],
  divider: true,
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
      media={data.media}
    />
  );
}

export default HeroComponent;
