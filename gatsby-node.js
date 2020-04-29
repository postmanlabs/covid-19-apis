const uuid = require('uuid');
const path = require('path');
const HeaderJson = require('./src/components/Microsite/Header/Header.data.json');
const FooterJson = require('./src/components/Microsite/Footer/Footer.data.json');
const CollectionJson = require('./src/components/Microsite/Collections/Collection.data.json');
const ApiJson = require('./src/components/Microsite/Apis/Apis.data.json');
const CaliforniaJson = require('./src/components/TestingSites/json/California.data.json');
const redirects = require('./redirects');

const { v4 } = uuid;

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const prepareNode = (obj, name) => {
    const data = {
      key: v4(),
      value: JSON.stringify(obj),
    };
    const node = JSON.stringify(data);
    const nodeMeta = {
      id: createNodeId(`my-data-${data.key}`),
      parent: null,
      children: [],
      internal: {
        type: name,
        mediaType: 'text/json',
        content: node,
        contentDigest: createContentDigest(data),
      },
    };

    const output = { ...data, ...nodeMeta };
    return output;
  };

  const { createNode } = actions;

  createNode(prepareNode(HeaderJson, 'headerLinks'));
  createNode(prepareNode(FooterJson, 'FooterLinks'));
  createNode(prepareNode(CollectionJson, 'CollectionLinks'));
  createNode(prepareNode(ApiJson, 'ApiLinks'));
  createNode(prepareNode(CaliforniaJson, 'CaliforniaLinks'));
};


/* create blog posts with template from Markdown
/************************************************************************************************* */

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve('src/templates/blogTemplate.jsx');

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    });
  });
};


/* Create testing sites pages with defined slug
/******************************************************************************************** */

exports.createPages = async ({ actions: { createRedirect, createPage } }) => {
  const allState = [
    'alabama',
    'alaska',
    'arizona',
    'arkansas',
    'california',
    'colorado',
    'connecticut',
    'delaware',
    'florida',s
    'georgia',
    'hawaii',
    'idaho',
    'illinois',
    'indiana',
    'kansas',
    'kentucky',
    'louisiana',
    'maine',
    'massachusetts',
    'michigan',
    'minnesota',
    'mississippi',
    'missouri',
    'montana',
    'nevada',
    'new-jersey',
    'new-mexico',
    'new-york',
    'north-carolina',
    'oklahoma',
    'pennsylvania',
    'texas',
    'utah',
    'washington',
  ];

  redirects.forEach(({ from, to }) => {
    createRedirect({
      fromPath: from,
      isPermanent: true,
      redirectInBrowser: true,
      toPath: to,
    });
  });

  // Our index page lists, all page. Keep for future reference for site specific page
  // createPage({
  //   path: '/covid-19-testing-locations/state/list/',
  //   component: require.resolve('./src/templates/stateTemplate.jsx'),
  //   context: { allState },
  // });

  // creates Page that lists all site of a particular state
  allState.forEach((state) => {
    createPage({
      path: `/covid-19-testing-locations/${state}/`,
      component: require.resolve('./src/templates/stateSiteTemplate.jsx'),
      context: { state },
    });
  });
};
