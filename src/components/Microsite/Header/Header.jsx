import React, { useEffect, useState } from 'react';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import $ from 'jquery';
import './Header.scss';
import { Divider } from 'aether-marketing';
import navbarData from '../../../../bff-data/navbar.json';
// For local TOPNAVBAR TESTING
import navbarDataLocal from '../../../../build/navbarDev.json';

// Get Cookie for Sign In toggler
const getCookie = (a) => {
  if (typeof document !== 'undefined') {
    const b = document.cookie.match(`(^|;)\\s*${a}\\s*=\\s*([^;]+)`);
    return b ? b.pop() : '';
  }
  return false;
};

// changes button in navbar based on cookie presence
function LoginCheck(props) {
  const { cookie, beta, hidden } = props;

  if (!hidden) {
    return (
      <div className="CTAButton">
        <a
          href={`https://go.postman${beta}.co/build`}
          className={
            cookie !== 'yes'
              ? 'button__sign-in pingdom-transactional-check__sign-in-button'
              : 'd-none'
          }
          onClick={() => {
            trackCustomEvent({
              // string - required - The object that was interacted with (e.g.video)
              category: 'lc-top-nav',
              // string - required - Type of interaction (e.g. 'play')
              action: 'Click',
              // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
              label: 'sign-in-button-clicked',
            });
          }}
        >
          Sign In
        </a>
        <a
          href={`https://identity.getpostman${beta}.com/signup?continue=https%3A%2F%2Fgo.postman.co%2Fbuild`}
          className={cookie !== 'yes' ? 'button__sign-up' : 'd-none'}
          onClick={() => {
            trackCustomEvent({
              category: 'lc-top-nav',
              action: 'Click',
              label: 'sign-in-button-clicked',
            });
          }}
        >
          Sign Up for Free
        </a>
        <a
          href="https://go.postman.co/home"
          className={cookie ? 'button__sign-up ml-3' : 'd-none'}
        >
          Launch Postman
        </a>
      </div>
    );
  }
  /* eslint-disable-next-line */
  return <></>;
}

function Header(props) {
  const [beta, setBeta] = useState('');
  const [cookie, setCookie] = useState('');
  const [hidden, setHidden] = useState(true);
  const [data, setData] = useState(navbarData);
  const [visibleHelloBar] = useState();

  useEffect(() => {
    /* eslint-disable-next-line */
    const cookie = getCookie('getpostmanlogin');
    /* eslint-disable-next-line */
    const beta = window.location.host.includes('postman-beta') ? '-beta' : '';

    setCookie(cookie);
    setBeta(beta);

    const navbarKeys = ['items', 'media', 'type'];

    if (navbarKeys.every((key) => Object.keys(navbarData).includes(key))) {
      setData(navbarData);
    } else {
      setData(navbarDataLocal);
    }

    const { waitBeforeShow } = props;

    setTimeout(() => {
      setHidden(false);
    }, waitBeforeShow);

    /* Applies styling for sticky nav */
    // $('#secondaryNav').on('click', () => {
    //   $('body').toggleClass('menu-open');
    //   $('.nav-primary').toggleClass('activeMenu');
    //   $('.nav-secondary').toggleClass('activeMenu');
    // });
    // Dropdown Slideup Animation
    function showBsDropdown() {
      $(this)
        .find('.dropdown-menu')
        .first()
        .stop(true, true)
        .slideDown(225);
      $(this)
        .find('.arrow-icon')
        .addClass('show');
    }
    $('.dropdown').on('show.bs.dropdown', showBsDropdown);
    // Dropdown Slidedown Animation
    function hideBsDropdown() {
      $(this)
        .find('.dropdown-menu')
        .stop(true, true)
        .slideUp(225);
      $(this)
        .find('.arrow-icon')
        .removeClass('show');
    }
    $('.dropdown').on('hide.bs.dropdown', hideBsDropdown);
    /* eslint-disable-next-line */
  }, []);

  const showTargetElement = () => {
    // Show Sign In Button if user is not logged in (mobile)
    /* eslint-disable-next-line */
    const cookie = getCookie('getpostmanlogin');
    const signInButton = document.querySelector('.mobile-sign-in');
    if (cookie !== 'yes') {
      signInButton.classList.toggle('show');
    }
    // Global Mobile Icon Transition
    const toggler = document
      .getElementById('globalNav')
      .getAttribute('aria-expanded');
    const body = document.querySelector('body');
    const icon1 = document.getElementById('icon-wrap-one');
    // Mobile Menu is active ?
    if (toggler === 'true') {
      // Add lock CSS to body to disable scroll
      body.classList.add('lock');
      // Flip up dropdown icon
      icon1.classList.remove('open');
    }
    // Hellobar
    const messageBarAlertTop = document.getElementById(
      'message-bar-alert-top',
    ) || { style: { display: '' } };
    if (!messageBarAlertTop.style.display) {
      messageBarAlertTop.style.display = 'none';
    } else {
      messageBarAlertTop.style.display = '';
    }
  };

  const hideTargetElement = () => {
    // Hide Sign In Button if user is not logged in (mobile)
    const signInButton = document.querySelector('.mobile-sign-in');
    /* eslint-disable-next-line */
    const cookie = getCookie('getpostmanlogin');
    if (cookie !== 'yes') {
      signInButton.classList.toggle('hide');
    }
    const toggler = document
      .getElementById('globalNav')
      .getAttribute('aria-expanded');
    const body = document.querySelector('body');
    const icon1 = document.getElementById('icon-wrap-one');
    // Mobile Menu is not active ?
    if (toggler === 'false') {
      // addlock CSS to body to enable scroll
      body.classList.add('lock');
      // Flip down dropdown icon
      icon1.classList.add('open');
    } else {
      // Remove lock CSS to body to disable scroll
      body.classList.remove('lock');
    }
    // const icon2 = document.getElementById('navbar-chevron-icons');
    // const togglerSecondary = document
    //   // .getElementById('secondaryNav')
    //   .getAttribute('aria-expanded');
    // if (togglerSecondary === 'false') {
    //   icon2.classList.remove('open');
    // }
  };

  /* eslint-enable class-methods-use-this */

  return (
    <>
      <div className="header navbar-v6 ">
        <div className="NavStyles navbar navbar-expand-lg navbar-light nav-primary ">
          <a className="navbar-brand" href="https://www.postman.com">
            <div className="navbar-logo-container">
              <img src="https://voyager.postman.com/logo/postman-logo-icon-orange.svg" alt="Postman" width="32" height="32" />
            </div>
          </a>
          <button
            onClick={() => {
              showTargetElement();
              hideTargetElement();
            }}
            id="globalNav"
            className="mobile-sign-in navbar-toggler"
            data-test="mobileNavToggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <div
                id="icon-wrap-one"
                className="icon-bar"
                aria-expanded="false"
              >
                <span />
                <span />
                <span />
                <span />
              </div>
            </span>
          </button>
          <div
            id="navbarSupportedContent"
            className={`collapse navbar-collapse ${!visibleHelloBar ? 'noBar' : ''}`}
          >
            {/* Primary Navbar */}
            <ul className="navbar-nav mr-auto">
              {data.items.map((item) => (
                /* eslint-disable-next-line */
                (item.dropdown && item.dropdown) && (
                <li className="nav-item dropdown" key={item.title}>
                  <a
                    className="nav-link dropdown-toggle"
                    href="##"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-expanded="false"
                    key={item.title}
                  >
                    {item.title}
                    <svg
                      className="arrow-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="#6b6b6b"
                    >
                      <g>
                        <path d="M10.375,3.219,6,6.719l-4.375-3.5A1,1,0,1,0,.375,4.781l5,4a1,1,0,0,0,1.25,0l5-4a1,1,0,0,0-1.25-1.562Z" />
                      </g>
                    </svg>
                  </a>
                  <div
                    className="DropdownStyles dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    {/* eslint-disable-next-line */}
                    { (item.columns && item.columns)
                    /* eslint-disable-next-line */
                          && (
                          <div className="row dropdown-col-menu">
                            { item.columns.map((col) => (
                              <div
                                className={
                                item.isWidthShort
                                  ? 'col-sm-6 col-md-6 dropdown-col'
                                  : 'col-sm-6 col-md-4 dropdown-col'
                              }
                                key={col.title}
                              >
                                <h6 className="dropdown-header">{col.title}</h6>
                                {col.subItemsCol.map((link) => (
                                  <a
                                    className="dropdown-item"
                                    href={link.url}
                                    key={link.title}
                                  >
                                    {link.title}
                                  </a>
                                ))}
                              </div>
                            /* eslint-disable-next-line */
                            ))}
                          </div>
                          /* eslint-disable-next-line */
                          ) || item.subItems.map((single) => (
                            <a
                              className={`${single.link ? 'app-cta' : ''} dropdown-item`}
                              href={single.url}
                              key={single.title}
                            >
                              {single.title}
                            </a>
                      /* eslint-disable-next-line */
                    ))}
                  </div>
                </li>
                /* eslint-disable-next-line */
                ) || (
                <li className="nav-item" key={item.title}>
                  <a
                    className="nav-link"
                    href={item.url}
                    key={item.title}
                  >
                    {item.title}
                  </a>
                </li>
                )
              ))}
            </ul>
            {/* Login Check */}
            <div className="form-inline my-2 my-lg-0">
              <LoginCheck
                hidden={hidden}
                waitBeforeShow={100}
                cookie={cookie}
                beta={beta}
                className="pingdom-transactional-check__sign-in-button"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="SecondaryNavbarV6 navbar-v6 sticky ">
        <div className="NavStyles navbar navbar-expand-lg navbar-light nav-secondary blurred-container">
          <div className="DropdownStylesSecond dropdown position-static">
            <a
              className="nav-link navbar-brand"
              href="##"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              COVID-19 API Resource Center
            </a>
          </div>
        </div>
      </div>
      <Divider fullWidth />
    </>
  );
}

export default Header;
