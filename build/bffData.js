const fs = require('fs');
const fetch = require('node-fetch');
const path = require('path');
const sh = require('shelljs');

const TIME = (new Date()).getTime();
const api = 'https://www.postman.com/mkapi';
const url = `${api}/worker.json?${TIME}`;

const bffData = () =>
  new Promise((resolve) => {
    fetch(url).then((res) => {
      res.text().then((resp) => {
        if (resp) {
          const { services } = JSON.parse(resp);
          const max = services.length;
          let i;

          for (i = 0; i < max; i += 1) {
            const service = services[i];
            const serviceUrl = `${api}/${service}.json?${TIME}`;

            sh.exec('mkdir -p bff-data');

            fetch(serviceUrl).then((res) => {
              res.text().then((resp) => {
                if (resp) {
                  fs.writeFile(path.join('.', 'bff-data', `${service}.json`), resp, (err) => {

                    //
                  });
                }
              });
            });
          }

          resolve(true);
        }
      });
    });
  });

module.exports = bffData;
