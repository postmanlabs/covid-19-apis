const React = require('react');
const bff = require('./bff.json');

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents();
  const modifiedComponents = [...headComponents];

  modifiedComponents.push(
    React.createElement('script', {
      key: 'pm',
      dangerouslySetInnerHTML: {
        __html: bff.script,
      },
    }),
  );

  replaceHeadComponents(modifiedComponents);
};
