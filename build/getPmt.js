const https = require('follow-redirects').https;
const fs = require('fs');
const path = require('path');
const sh = require('shelljs');

sh.config.silent = true;

sh.exec('mkdir -p public');

const TIME = new Date().getTime();

const options = {
  method: 'GET',
  hostname: 'www.postman.com',
  path: `/mkapi/pmt3.js?${TIME}`,
  maxRedirects: 20,
};

const req = https.request(options, function (res) {
  const chunks = [];

  res.on('data', function (chunk) {
    chunks.push(chunk);
  });

  res.on('end', function () {
    const body = Buffer.concat(chunks);

    fs.writeFile(path.join('pmt.js'), body.toString(), (err) => {
      if (err) {
        throw err;
      }
    });

    sh.config.silent = false;
  });
});

req.end();
