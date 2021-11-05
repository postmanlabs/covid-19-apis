const base64 = require('base-64');
const fs = require('fs');
const sh = require('shelljs');
const crypto = require('crypto');
const fetchPmTech = require('./scripts/fetchPmTech');

const delay = 1000;
const runtime = {
  pm: ['bff-data/pmTech.js'],
};

const prefetch = async () => {
  let pmTech = '';

  if (process.env.PM_TECH) {
    pmTech = await fetchPmTech();

    pmTech = base64.encode(pmTech);

    sh.exec('mkdir -p public');

    Object.keys(runtime).forEach((key) => {
      const fileBuffer = fs.readFileSync(runtime[key][0]);
      const hashSum = crypto.createHash('sha1');
      const ext = runtime[key][0]
        .split('/')
        .pop()
        .split('.')
        .pop();

      hashSum.update(fileBuffer);

      const hex = hashSum.digest('hex');

      runtime[key].push(`_${hex}.${ext}`);

      setTimeout(() => {
        sh.exec(`cp ${runtime[key][0]} public/${runtime[key][1]}`);
      }, delay);
    });
  }

  const script = (process.env.PM_TECH
      && `
      var delay = 500;
      var scr = document.createElement('script');
      var throttle;
      scr.innerText = atob('${pmTech}');
      if (!window.pm) {
        throttle = setTimeout(function(){
          document.head.appendChild(scr);
          setTimeout(function(){
            if (window.pm) {
              window.pm.setScalp({
                property: 'covid-19-apis'
              });
              window.pm.trackClicks();
            }
            clearTimeout(throttle);
          }, delay);
        }, delay);
      }
    `)
    || `
      console.info('Postman OSS');
    `;

  fs.writeFile('bff.json', JSON.stringify({ script }), (err) => {
    if (err) {
      throw err;
    }
  });
};

prefetch();
