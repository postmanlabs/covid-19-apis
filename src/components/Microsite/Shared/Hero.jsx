import React from 'react';
// import heroImage from '../../images/hero_BG-asset.svg';
// import heroPostmanaut from '../../images/hero-postmanaut.svg';
import heroImage from '../../../images/covid19-image-2.png';

const data = {
  heroLayout: "sideXSide",
  sideXSideLayout: "medium",
  title: ["Create API documentation"],
  divider: true,
  inputTitle: "Get started",
  inputQuery: "X",
  buttonText: "Sign Up for Free",
  backgroundColor: "grey_10",
  backgroundImage: "X",
  textColor: "orange_60",
  subtitle: ["<p>Available now in digital and hardcover.</p>"],
  backlink: {
    text: "X",
    src: "/xxx/",
  },
  media: {
    class: "mt-5 mt-lg-0",
    src: "X",
    alt: "X cover. Illustration.",
  },
  button: [
    {
      buttonType: "secondary",
      text: "Buy on Amazon",
      src: "X",
      target: "new-tab-external-company",
      id: "buy-on-amazon",
      gaCategory: "buy-on-amazon",
      gaLabel: "book",
    },
    {
      buttonType: "secondary",
      text: "Request a Free Copy",
      src: "#apply",
      target: "same-tab",
      id: "request-free-copy",
      gaCategory: "request-free-copy",
      gaLabel: "book",
    },
  ],
};

function Hero() {
  return (
    <div className="container-fluid hero v5_starfield-small-night-sky pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 hero_title">
            
            <h1>
              Postman COVID-19 API Resource Center
            </h1>
          </div>
          <div className="col-md-6 hero_image">
            <img src={heroImage} alt="Isolated COVID-19 virus in space. Illustration." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
