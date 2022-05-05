import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import DynamicLink from '../Shared/DynamicLink';
import './Footer.scss';

const FooterColumn = () => {
  const data = useStaticQuery(graphql`
    query {
      footerLinks {
        value
      }
    }`);

  return (
    JSON.parse(data.footerLinks.value).columns.map((col) => {
      const title = <h5 className="footer-column__title">{col.name}</h5>;
      const links = col.children.map((link) => (
        <li key={link.name}>
          <DynamicLink className="footer-column__link" url={link.url} name={link.name} />
        </li>
      ));

      return (
        <div className="footer-column col-6 col-sm-4 col-md-2" key={col.name}>
          {title}
          <ul className="footer-column__list">
            {links}
          </ul>
          <div className="clearfix d-block" />
        </div>
      );
    })
  );
};

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <FooterColumn />
        </div>

        <div className="row">
          <div className="col-sm-12 col-lg-4">
            <section id="footer__social" className="column__horizontal">
              <ul
                className="column__links list-inline"
              >
                <li className="list-inline-item">
                  <a
                    id="facebook_icon"
                    href="https://www.facebook.com/getpostman/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.6826 20H1.10385C0.49403 20 0 19.5057 0 18.8961V1.10384C0 0.494104 0.494108 0 1.10385 0H18.8962C19.5058 0 20 0.494104 20 1.10384V18.8961C20 19.5057 19.5057 20 18.8962 20H13.7997V12.2549H16.3994L16.7886 9.23649H13.7997V7.30943C13.7997 6.43554 14.0424 5.84 15.2955 5.84L16.8939 5.83931V3.13962C16.6175 3.10284 15.6687 3.02065 14.5648 3.02065C12.2603 3.02065 10.6826 4.4273 10.6826 7.0105V9.23649H8.0763V12.2549H10.6826V20Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    id="twitter_icon"
                    href="https://twitter.com/getpostman"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="30"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.955 10.483c-.032.25-.097.492-.162.734-.583 2.175-1.647 4.222-2.986 6.01-3.93 5.163-9.79 7.257-15.664 5.683-2.76-.74-5.257-2.334-7.143-4.542.376.138.784.285 1.17.388 2.31.619 4.747.384 6.952-.654-2.141-.61-3.651-2.68-3.733-5.07a4.73 4.73 0 0 0 2.339.516c-2.237-1.156-3.4-3.873-2.643-6.445l.019-.07a5.09 5.09 0 0 0 2.126 1.31C5.063 6.921 4.682 5.005 5.172 3.175c.26-.967.743-1.873 1.414-2.582 1.684 4.115 4.95 7.21 8.961 8.545.015-.44.094-.863.205-1.278.814-3.038 3.75-4.879 6.575-4.122 1.38.37 2.562 1.352 3.229 2.715a10.32 10.32 0 0 0 3.594-.443c-.719 1.14-1.817 2.03-3.052 2.402 1.055.172 2.1.119 3.152-.08a10.71 10.71 0 0 1-3.295 2.151z"
                        fill="#ffffff"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    id="linkedin_icon"
                    href="https://www.linkedin.com/company/postman-api-tools"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="25"
                      height="25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.134 7.363H.537v14.044h4.597zM5.437 3.019C5.407 1.642 4.44.593 2.866.593 1.293.593.265 1.642.265 3.019c0 1.348.998 2.427 2.541 2.427h.03c1.603 0 2.601-1.079 2.601-2.427zM21.714 13.354c0-4.313-2.268-6.32-5.293-6.32-2.44 0-3.534 1.362-4.144 2.319v-1.99H7.68c.06 1.318 0 14.044 0 14.044h4.598v-7.843c0-.42.03-.839.151-1.139.333-.839 1.09-1.707 2.36-1.707 1.664 0 2.329 1.288 2.329 3.175v7.514h4.597v-8.053z"
                        fill="#ffffff"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    id="github_icon"
                    href="https://github.com/postmanlabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View our Postman repos on GitHub"
                  >
                    <svg
                      height="25"
                      className="octicon octicon-mark-github"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="25"
                      aria-hidden="true"
                    >
                      <path
                        fill="#ffffff"
                        fillRule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                      />
                    </svg>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    id="youtube_icon"
                    href="https://www.youtube.com/channel/UCocudCGVb3MmhWQ1aoIgUQw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <svg
                      enableBackground="new 0 0 30 21.14"
                      viewBox="0 0 30 21.14"
                      xmlns="http://www.w3.org/2000/svg"
                      height="25"
                      width="25"
                    >
                      <path
                        d="m29.37 3.3c-.35-1.3-1.36-2.32-2.65-2.67-2.34-.63-11.72-.63-11.72-.63s-9.38 0-11.72.63c-1.29.35-2.31 1.37-2.65 2.67-.63 2.36-.63 7.27-.63 7.27s0 4.91.63 7.27c.35 1.3 1.36 2.32 2.65 2.67 2.34.63 11.72.63 11.72.63s9.38 0 11.72-.63c1.29-.35 2.31-1.37 2.65-2.67.63-2.36.63-7.27.63-7.27s0-4.91-.63-7.27zm-17.44 11.73v-8.92l7.84 4.46z"
                        fill="#fff"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </section>
          </div>

          <div className="col-sm-12 col-lg-8">
            <section
              id="footer__copyright"
              className="column__horizontal footer__copyright"
            >
              <ul
                className="column__links list-inline"
              >
                <li className="copyright-notice list-inline-item">
                  &copy;
                  {' '}
                  <span id="current-year" />
                  {' '}
                  Postman, Inc. All rights
                  reserved
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.postman.com/security"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="footer-column__link">Security</span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.postman.com/legal/privacy-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="footer-column__link">Privacy Policy</span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.postman.com/legal/eula/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="footer-column__link">Terms</span>
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
