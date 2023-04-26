/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

// import footerDataLocal from '../../../build/footerDev.json';
import footerData from '../../../bff-data/footer.json';

const triggerGA = (category, label) => (
  category
  && label
  && window.pm
  && window.pm.ga('send', 'event', category, 'Click', label)
);

// Helper function for rel attribute in link or button
function relStringGenerator(target) {
  if (target === '') {
    return null;
  }
  if (target === 'blank') {
    return 'noopener';
  }
  return null;
}
// // Helper function for target attribute in link or button
function targetStringGenerator(target) {
  if (target === '') {
    return null;
  }
  if (target === 'blank') {
    return '_blank';
  }
  return null;
}

function Footer() {
  const [data, setData] = useState(footerData);
  // runtime check to switch between prod and local data if API returns malformed
  const footerKeys = ['alt', 'copyright', 'items', 'src', 'type'];
  useEffect(() => {
    if (footerKeys.every((key) => Object.keys(footerData).includes(key))) {
      setData(footerData);
    }
    // else {
    //   setData(footerDataLocal);
    // }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = data.items.slice(0, 5);

  return (
    <div className="footer">
      <section id="Footer" className="section">
        <div className="container-footer">
          <div className="row">
            <div className="col-sm-8 offset-sm-2 col-md-12 offset-md-0">
              <div className="row">
                {/* Copyright */}
                <div className="FooterImgWrapper col-8 offset-2 col-md-3 offset-md-0 col-lg-2 order-12 order-md-0 pad-md-right align-self-center">
                  <img className="footer-img mb-5" src="https://voyager.postman.com/illustration/postman-footer-rocket-launch.svg" alt="Postman" />
                  <span className="col-12 d-none d-md-block copyright">
                    {data.copyright}
                  </span>
                </div>
                {/* Product */}
                <div className="column col-2 offset-md-1  offset-lg-2 order-1 order-md-2 mb-5">
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
                <div className="column col-2 order-2 order-md-3">
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
                <div className="column col-2 order-3  order-md-4">
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
                <div className="column__social order-4 col-lg-2 order-md-5">

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
