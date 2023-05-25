const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const requestOptions = {
  method: 'GET',
  headers: {
    bff: 'e2e'
  },
  redirect: 'follow'
};

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const host = 'https://www.postman.com/mkapi/navbar.json'

function fetchNavbar() {
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
                  'navbar.json',
                ), JSON.stringify(respData), (err) => {
                  if (err) {
                    /* eslint-disable no-console */
                    console.error(err);
                    /* eslint-enable */
                    process.exit(1);
                    throw err;
                  }
                  /* eslint-disable no-console */
                  console.info('Success pre-render navbar data');
                  /* eslint-enable */
                });
              } else {
                console.log('The navbar endpoint returned unusable data..')
                fs.writeFile(path.join(
                  'bff-data',
                  'navbar.json',
                ), JSON.stringify({"navbar": "Error"}), (err) => {
                  if (err) {
                    /* eslint-disable no-console */
                    console.error(err);
                    /* eslint-enable */
                    process.exit(1);
                    throw err;
                  }
                  /* eslint-disable no-console */
                  console.info('Success pre-render empty navbar data');
                  /* eslint-enable */
                });
              }
            } 
          })
        }
    )
    .catch(err => {
      console.error("Error when making BFF call... writing empty navbar.json", err)
      fs.writeFile(path.join(
        'bff-data',
        'navbar.json',
      ), JSON.stringify({}), (err) => {
        if (err) {
          /* eslint-disable no-console */
          console.error(err);
          /* eslint-enable */
          process.exit(1);
          throw err;
        }
        /* eslint-disable no-console */
        console.info('Success pre-render empty navbar data');
        /* eslint-enable */
      });
    })
  } else {
    console.log('No Navbar data endpoint provided.')
    fs.writeFile(path.join(
      'bff-data',
      'navbar.json',
    ), JSON.stringify({}), (err) => {
      if (err) {
        /* eslint-disable no-console */
        console.error(err);
        /* eslint-enable */
        process.exit(1);
        throw err;
      }
      /* eslint-disable no-console */
      console.info('Success pre-render empty navbar data');
      /* eslint-enable */
    });
  }         
}

module.exports = fetchNavbar;
