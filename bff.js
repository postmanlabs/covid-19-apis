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
  let pmTechVersion = '';

  if (process.env.PM_TECH) {
    pmTech = await fetchPmTech();

    pmTechVersion = pmTech.split('ns.version="').pop().split('"').shift();

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
      var propertyName = 'covid-19-apis';
      var delay = 500;
      var scr = document.createElement('script');
      var throttle;
      var int;
      scr.setAttribute('id', 'pmTechSDK');
      scr.innerText = atob('${pmTech}');
      if (!window.pm) {
        throttle = setTimeout(function(){
          document.head.appendChild(scr);
          window.pm.log('attached pmTechSDK: ' + '${pmTechVersion}');
          setTimeout(function(){
            if (window.pm) {
              window.pm.setScalp({
                property: propertyName
              });
              window.pm.trackClicks();
              var dnt = (parseInt(navigator.doNotTrack) === 1 || parseInt(window.doNotTrack) === 1 || parseInt(navigator.msDoNotTrack) === 1 || navigator.doNotTrack === "yes");
              window.pm.log('navigator.doNotTrack: ' + dnt);
              if(!dnt) {
                var id = 'gtm';
                var sitename = 'covid-19-apis.postman.com';
                var UACode = 'UA-43979731-18';
                if (!document.getElementById(id)) {
                  var gtm = document.createElement('script');
                  gtm.setAttribute('id', id);
                  gtm.src = 'https://www.googletagmanager.com/gtag/js?id=' + UACode;

                  gtm.onload = function(){
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', UACode);
                    window.pm.ga('create', UACode, sitename);
                    window.pm.log('initialized GA: ' + sitename);
                    clearTimeout(throttle);
                  };
                  document.head.appendChild(gtm);
                  window.pm.log('attached googletagmanager: ' + UACode);
                }
              } else {
                clearTimeout(throttle);
              }
            }
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
