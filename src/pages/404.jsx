// import React from 'react';

// import Layout from '../components/Microsite/layout';
// import SEO from '../components/seo';

// const NotFoundPage = () => (
//   <Layout>
//     <SEO title="404: Not found" />
//     <h1>NOT FOUND</h1>
//     <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
//   </Layout>
// );

// export default NotFoundPage;
import React from 'react';
import Layout from '../components/Microsite/layout';
import SEO from '../components/seo';
import errordog from '../images/error-dog.svg';

class NotFoundPage extends React.Component {
  componentDidMount() {
    if (window.location.pathname !== '/404/') {
      window.location.pathname = '/404/';
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="404: Not found" slug="/404/" />
        <div className="container">
          <div className="row error-row">
            <div className="col">
              <img className="error-img" src={errordog} alt="a cute dog letting you know that you're on the 404 page" />
            </div>
            <div className="col text-col">
              <div className="error-text">
                <h1>404</h1>
                <p>Oops! We can&apos;t find this page. It may have been moved or deleted.</p>
                <a href="/docs/" className="btn btn__primary">Back to Docs</a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default NotFoundPage;
