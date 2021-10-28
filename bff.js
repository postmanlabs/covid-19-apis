const fs = require('fs');
const sh = require('shelljs');
const crypto = require('crypto');
const fetchPmTech = require('./scripts/fetchPmTech');

const delay = 1000;
const runtime = {
  pm: ['bff-data/pmTech.js'],
};

const prefetch = async () => {
  if (process.env.PM_TECH) {
    await fetchPmTech();

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
      function load(src, cb) {
        var e = document.createElement('script');
        e.src = src;
        e.async = true;
        e.onreadystatechange = function(){
          if (this.readyState === 'complete' || this.readyState === 'loaded') {
            if (typeof cb === 'function') {
              cb();
            }
          }
        };
        e.onload = cb;
        document.head.appendChild(e);
      }

      if (!window.pm) {
        load('/${runtime.pm[1]}', function(){
          if (typeof window.pm.setScalp === 'function') {
            window.pm.setScalp({
              property: 'covid-19-apis'
            });
          }
        });
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
