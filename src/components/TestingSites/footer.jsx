/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import footerData from '../../../bff-data/footer.json';

const triggerGA = (category, label) => (
  category
    && label
    && window.pmt
    && window.pmt('ga', ['send', 'event', category, 'Click', label])
);

// Helper function for rel attribute in link or button
export function relStringGenerator(target) {
  if (target === 'new-tab-external-company') {
    return 'noopener noreferrer';
  }
  if (target === 'new-tab-external-nofollow') {
    return 'noopener noreferrer nofollow';
  }
  if (target === 'new-tab-postman') {
    return 'noopener';
  }
  return null;
}

// Helper function for target attribute in link or button
export function targetStringGenerator(target) {
  if (
    target === 'new-tab-external-company'
    || target === 'new-tab-external-nofollow'
    || target === 'new-tab-postman'
  ) {
    return '_blank';
  }
  return null;
}

function Footer() {
  const [data] = useState(footerData);

  const columns = data.items.slice(0, 5);

  return (
    <div className="footer">
      <section id="Footer" className="section">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2 col-md-12 offset-md-0">
              <div className="row">
                {/* Copyright */}
                <div className="FooterImgWrapper col-8 offset-2 col-md-3 offset-md-0 col-lg-2 order-12 order-md-0 pad-md-right align-self-center">
                  <img className="footer-img mb-5" src="https://voyager.postman.com/illustration/postman-footer-rocket-launch.svg" alt="Postman" />
                  <span className="d-none d-md-block copyright">
                    {data.copyright}
                  </span>
                </div>
                {/* Product */}
                <div className="col-6 col-md-2 offset-md-1 col-lg-2 offset-lg-2 order-1 order-md-2 mb-5">
                  {columns.slice(0, 1).map((item) => (
                    <nav aria-labelledby={item.arialabelledby} key={uuidv4()}>
                      <h2 className="footer-col-title" id={item.arialabelledby}>
                        {item.title}
                      </h2>
                      <div className="column">
                        {(item.items
                          && item.items.map((link) => (
                            <li className="column-row" key={uuidv4()}>
                              <a
                                className="column-link"
                                id={link.id}
                                href={link.url}
                                rel={relStringGenerator(link.target)}
                                target={targetStringGenerator(link.target)}
                                onClick={() => {
                                  triggerGA(link.category, link.label);
                                }}
                              >
                                {link.span ? (
                                  <>
                                    {link.title}
                                    <span>{link.span}</span>
                                  </>
                                ) : (

                                  <>{link.title}</>
                                )}
                              </a>
                            </li>
                          )))
                          || ''}
                      </div>
                    </nav>
                  ))}
                </div>
                <div className="col-6 col-md-2 order-2 order-md-3">
                  {/* Company - stacked top */}
                  {columns.slice(1, 2).map((item) => (
                    <div key={uuidv4()}>
                      <nav
                        aria-labelledby={item.arialabelledby}
                        className="mb-5"
                      >
                        <h2 className="footer-col-title" id={item.arialabelledby}>
                          {item.title}
                        </h2>
                        <div className="column">
                          {(item.items
                            && item.items.map((link) => (
                              <li className="column-row" key={uuidv4()}>
                                <a
                                  className="column-link"
                                  id={link.id}
                                  href={link.url}
                                  rel={relStringGenerator(link.target)}
                                  target={targetStringGenerator(link.target)}
                                  onClick={() => {
                                    triggerGA(link.category, link.label);
                                  }}
                                >
                                  {link.span ? (
                                    <>
                                      {link.title}
                                      <span>{link.span}</span>
                                    </>
                                  ) : (

                                    <>{link.title}</>
                                  )}
                                </a>
                              </li>
                            )))
                            || ''}
                        </div>
                      </nav>
                    </div>
                  ))}
                  {/* Company stacked bottom */}
                  {columns.slice(2, 3).map((item) => (
                    <div key={uuidv4()}>
                      <nav
                        aria-labelledby={item.arialabelledby}
                        className="mb-5"
                      >
                        <h2 className="footer-col-title" id={item.arialabelledby}>
                          {item.title}
                        </h2>
                        <div className="column">
                          {(item.items
                            && item.items.map((link) => (
                              <li className="column-row" key={uuidv4()}>
                                <a
                                  className="column-link"
                                  id={link.id}
                                  href={link.url}
                                  rel={relStringGenerator(link.target)}
                                  target={targetStringGenerator(link.target)}
                                  onClick={() => {
                                    triggerGA(link.category, link.label);
                                  }}
                                >
                                  {link.span ? (
                                    <>
                                      {link.title}
                                      <span>{link.span}</span>
                                    </>
                                  ) : (
                                    <>{link.title}</>
                                  )}
                                </a>
                              </li>
                            )))
                            || ''}
                        </div>
                      </nav>
                    </div>
                  ))}
                </div>
                {/* API Categories */}
                <div className="col-6 col-md-2 order-3 order-md-4">
                  {columns.slice(3, 4).map((item) => (

                    <nav aria-labelledby={item.arialabelledby} key={uuidv4()}>
                      <h2 className="footer-col-title" id={item.arialabelledby}>
                        {item.title}
                      </h2>
                      <div className="column">
                        {(item.items
                          && item.items.map((link) => (
                            <li className="column-row" key={uuidv4()}>
                              <a
                                className="column-link"
                                id={link.id}
                                href={link.url}
                                rel={relStringGenerator(link.target)}
                                target={targetStringGenerator(link.target)}
                                onClick={() => {
                                  triggerGA(link.category, link.label);
                                }}
                              >
                                {link.span ? (
                                  <>
                                    {link.title}
                                    <span>{link.span}</span>
                                  </>
                                ) : (
                                  <>{link.title}</>
                                )}
                              </a>
                            </li>
                          )))
                          || ''}
                      </div>
                    </nav>
                  ))}

                </div>
                {/* Social media icons */}
                <div className="col-6 col-md-2 order-4 order-md-5">

                  {columns.slice(4, 5).map((item) => (
                    <div key={uuidv4()}>
                      <nav
                        aria-labelledby={item.arialabelledby}
                        className="mb-5 mr-0"
                      >
                        <h2 className="footer-col-title" id={item.arialabelledby}>
                          {item.title}
                        </h2>
                        <div className="column">
                          {(item.items
                              && item.items.map((link) => (
                                <li className="column-row" key={uuidv4()}>
                                  <a
                                    className="column-link"
                                    id={link.id}
                                    href={link.url}
                                    rel={relStringGenerator(link.target)}
                                    target={targetStringGenerator(
                                      link.target,
                                    )}
                                    onClick={() => {
                                      triggerGA(link.category, link.label);
                                    }}
                                  >
                                    <div direction="row" wrap="nowrap">
                                      <div
                                        className="svg d-inline-block align-self-center social-svg"
                                        // eslint-disable-next-line react/no-danger
                                        dangerouslySetInnerHTML={{
                                          __html: link.svg,
                                        }}
                                      />
                                      {link.span ? (
                                        <>
                                          {link.title}
                                          <span>{link.span}</span>
                                        </>
                                      ) : (
                                        <div className="d-inline-block align-self-center">
                                          {link.title}
                                        </div>
                                      )}
                                    </div>
                                  </a>
                                </li>
                              )))
                              || ''}
                        </div>
                      </nav>
                    </div>
                  ))}

                </div>
                <div className="col-12 d-block d-md-none text-center order-last">
                  <span className="col-12 copyright">{data.copyright}</span>
                </div>
              </div>
            </div>
          </div>
          {/*  eslint-enable */}
        </div>
      </section>
    </div>
  );
}

export default Footer;
