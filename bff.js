const fs = require('fs');
const fetch = require('node-fetch');
const sh = require('shelljs');

sh.config.silent = true;
const pmt = sh.exec('cat pmt.js').stdout.split('\n').shift();
sh.config.silent = false;

function cacheCdn(url, name) {
  sh.exec('mkdir -p public');

  fetch(url).then((res) => {
    res.text().then((resp) => {
      if (resp) {
        fs.writeFile(`${name}.js`, resp, (err) => {
          if (err) {
            throw err;
          }
        });
      }
    });
  });
}

const UACode = 'G-X3S374SEP0';

const prefetch = async () => {
  const script = `
${pmt}
const fpPromise = import('/fp.js')
  .then(FingerprintJS => FingerprintJS.load());
setTimeout(function(){
  var propertyName = 'covid-19-apis';
  if (window.pmt) {
    const initPmt = function() {
      window.pmt('setScalp', [{
        property: propertyName
      }]);
      window.pmt('scalp', [
        'pm-analytics',
        'load',
        document.location.pathname
      ]);
      window.pmt('trackClicks');
    }

    fpPromise
      .then(fp => fp.get())
      .then(result => {
        const user = 'fpVisitorId:' + result.visitorId + '|fpRequestId:' + result.requestId + '|fpVisitorFound:' + result.visitorFound + '|fpConfidence:' + result.confidence.score+ '|fpVersion:' + result.meta.version;
        window.pmt('api').store('user', user);
        window.pmt('set', ['user', user]);
        initPmt();
      })
      .catch(() => initPmt());

    var _ga = (document.cookie.match('(^|;) ?_ga=([^;]*)(;|$)') || [])[2];
    var _PUB_ID = (document.cookie.match('(^|;) ?_PUB_ID=([^;]*)(;|$)') || [])[2];
    var dnt = (parseInt(navigator.doNotTrack) === 1 || parseInt(window.doNotTrack) === 1 || parseInt(navigator.msDoNotTrack) === 1 || navigator.doNotTrack === "yes");

    window.pmt('log', ['navigator.doNotTrack: ' + dnt]);

    if(!dnt) {
      load('/_ga.js');
      load('/_gtag.js');

      var d = 1000, int;
      var int = setInterval(function(){
        if (window.ga) {
          window.pmt('set', ['ga', function(){
            if (typeof window.ga === 'function') {
              window.ga.apply(this, arguments);
            }
            return window.ga;
          }]);

          var sitename = document.location.hostname;
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${UACode}');
          window.pmt('ga', ['${UACode}', sitename]);
          window.pmt('log', ['initialized GA: ' + sitename + ' (' + '${UACode}' + ')']);
          window._iaq = window._iaq || {};

          if (!window.pmt.status) {
            var status = _PUB_ID && { LoggedIn: _PUB_ID } || { Anonymous: _ga || 'private' };

            window.pmt('set', ['status', status]);

            var key = Object.keys(window.pmt('status'))[0];

            window.ga('send', 'event', key, 'User', status);

            window.pmt('log', ['PM user log-in status: ' + JSON.stringify(status)]);
          }

          clearInterval(int);
        }
      }, d);
    }
  }
}, 1000);

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
`
    || `
  console.info('Postman OSS');
`;

  fs.writeFile('bff.json', JSON.stringify({ script }), (err) => {
    if (err) {
      throw err;
    }

    cacheCdn('https://www.google-analytics.com/analytics.js', '_ga');
    cacheCdn('https://www.googletagmanager.com/gtag/js', '_gtag');

    setTimeout(() => {
      sh.exec('mv _g* public/');
    }, 4000);
  });
};

prefetch();
