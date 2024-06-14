const fs = require('fs');
const path = require('path');
const sh = require('shelljs');

async function cacheCdn(url, name) {
  const fetch = (await import('node-fetch')).default;

  sh.exec('mkdir -p public');

  fetch(url).then((res) => {
    res.text().then((resp) => {
      if (resp) {
        fs.writeFile(path.join('public', `${name}.js`), resp, (err) => {
          if (err) {
            throw err;
          }
        });
      }
    });
  });
}

module.exports = cacheCdn;
