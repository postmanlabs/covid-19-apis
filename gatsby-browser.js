
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import $ from 'jquery';
import 'jquery.scrollto';

export const onClientEntry = () => {
  if (!window.location.hash) {
    window.scrollTo(0, 0);
  } else {
    // Race condition with default browser behavior for deep links.
    setTimeout(() => {
      $.scrollTo($(window.location.hash), {
        offset: { top: -80 }
      });
    }, 1000)
  }

  (() => {
    function OptanonWrapper() { } // eslint-disable-line no-unused-vars
    let initializedForm = false;

    const loadForm = () => {
      if (initializedForm === false) {
        initializedForm = true;
        window.MktoForms2.loadForm('//pages.getpostman.com', '067-UMD-991', 1376);
      }
    };
    const s = document.createElement('script');

    s.type = 'text/javascript';
    s.async = true;
    s.src = '//pages.getpostman.com/js/forms2/js/forms2.min.js';
    s.onreadystatechange = () => {
      if (this.readyState === 'complete' || this.readyState === 'loaded') {
        loadForm();
      }
    };
    s.onload = loadForm;

    document.getElementsByTagName('head')[0].appendChild(s);
  })();
}


// exports.onClientEntry = () => {
//   (() => {
//     function OptanonWrapper() { } // eslint-disable-line no-unused-vars
//     let initializedForm = false;

//     const loadForm = () => {
//       if (initializedForm === false) {
//         initializedForm = true;
//         window.MktoForms2.loadForm('//pages.getpostman.com', '067-UMD-991', 1376);
//       }
//     };
//     const s = document.createElement('script');

//     s.type = 'text/javascript';
//     s.async = true;
//     s.src = '//pages.getpostman.com/js/forms2/js/forms2.min.js';
//     s.onreadystatechange = () => {
//       if (this.readyState === 'complete' || this.readyState === 'loaded') {
//         loadForm();
//       }
//     };
//     s.onload = loadForm;

//     document.getElementsByTagName('head')[0].appendChild(s);
//   })();
// };
