const fs = require('fs');
const sh = require('shelljs');

sh.exec('mkdir -p public');
sh.exec('cp node_modules/jquery/dist/jquery.min.js public/jq.js');
sh.exec('cp node_modules/@postman/pm-tech/index.js public/pm.js');

const prefetch = async () => {
  const script = `
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
        
    load('/jq.js', function(){
      load('/pm.js', function(){
        window.pm.scalp('My Category', 'My Action', 'My Label', 'My Property');
      });
    });
  `;

  fs.writeFile('bff.json', JSON.stringify({ script }), err => {
    if (err) {
      throw err;
    }
  });
};

prefetch();