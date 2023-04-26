const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const requestOptions = {
  method: 'GET',
  headers: {
    bff: 'e2e',
  },
  redirect: 'follow',
};

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const host = 'https://www.postman.com/mkapi/footer.json' || '';

// eslint-disable-next-line consistent-return
function fetchFooter() {
  if (host) {
    return fetch(host, requestOptions)
      .then(
        (res) => {
          res.text()
            .then((resp) => {
              if (resp) {
                const respData = JSON.parse(resp) || { error: true };
                if (!respData.error && respData) {
                  fs.writeFile(path.join(
                    'bff-data',
                    'footer.json',
                  ), JSON.stringify(respData), (err) => {
                    if (err) {
                      /* eslint-disable no-console */
                      console.error(err);
                      /* eslint-enable */
                      process.exit(1);
                      throw err;
                    }
                    /* eslint-disable no-console */
                    console.info('Success pre-render footer data');
                    /* eslint-enable */
                  });
                } else {
                  // eslint-disable-next-line no-console
                  console.log('The footer endpoint returned unusable data..');
                  fs.writeFile(path.join(
                    'bff-data',
                    'footer.json',
                  ), JSON.stringify({ Footer: 'Error' }), (err) => {
                    if (err) {
                      /* eslint-disable no-console */
                      console.error(err);
                      /* eslint-enable */
                      process.exit(1);
                      throw err;
                    }
                    /* eslint-disable no-console */
                    console.info('Success pre-render empty footer data');
                    /* eslint-enable */
                  });
                }
              }
            });
        },
      )
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error('Error when making BFF call... writing empty footer.json', err);
        fs.writeFile(path.join(
          'bff-data',
          'footer.json',
        // eslint-disable-next-line no-shadow
        ), JSON.stringify({}), (err) => {
          if (err) {
            /* eslint-disable no-console */
            console.error(err);
            /* eslint-enable */
            process.exit(1);
            throw err;
          }
          /* eslint-disable no-console */
          console.info('Success pre-render empty footer data');
          /* eslint-enable */
        });
      });
  }
  // console.log('No Footer data endpoint provided.');
  fs.writeFile(path.join(
    'bff-data',
    'footer.json',
  ), JSON.stringify({}), (err) => {
    if (err) {
      /* eslint-disable no-console */
      console.error(err);
      /* eslint-enable */
      process.exit(1);
      throw err;
    }
    /* eslint-disable no-console */
    console.info('Success pre-render empty footer data');
    /* eslint-enable */
  });
}

module.exports = fetchFooter;