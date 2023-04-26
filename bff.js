const fs = require('fs');
const sh = require('shelljs');
// eslint-disable-next-line no-unused-vars
const crypto = require('crypto');
const fetchFooter = require('./build/fetchFooter');

// eslint-disable-next-line no-unused-vars
const delay = 1000;
// eslint-disable-next-line no-unused-vars
const runtime = {
  pm: ['bff-data/pmTech.js'],
};
const pmt = sh.exec('cat pmt.js').stdout.split('\n').shift();
const UACode = 'G-X3S374SEP0';

const prefetch = async () => {
  fetchFooter();
  const script = (`
${pmt}
setTimeout(function(){
  var propertyName = 'covid-19-apis';
  if (window.pmt) {
    window.pmt('setScalp', [{
      property: propertyName
    }]);
    window.pmt('scalp', [
      'pm-analytics',
      'load',
      document.location.pathname
    ]);
    window.pmt('trackClicks');

    var dnt = (parseInt(navigator.doNotTrack) === 1 || parseInt(window.doNotTrack) === 1 || parseInt(navigator.msDoNotTrack) === 1 || navigator.doNotTrack === "yes");

    window.pmt('log', ['navigator.doNotTrack: ' + dnt]);

    if(!dnt) {
      var id = 'gtm';
      var sitename = 'covid-19-apis.postman.com';
      var UACode = '${UACode}';
      if (!document.getElementById(id)) {
        var gtm = document.createElement('script');
        gtm.setAttribute('id', id);
        gtm.src = 'https://www.googletagmanager.com/gtag/js?id=' + UACode;

        gtm.onload = function(){
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', UACode);
          window.pmt('ga', ['${UACode}', sitename]);
          window.pmt('log', ['initialized GA: ' + sitename + ' (' + '${UACode}' + ')']);
        };
        document.head.appendChild(gtm);
        window.pmt('log', ['attached googletagmanager: ' + '${UACode}']);
      }
    }
  }
}, 1000);
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
