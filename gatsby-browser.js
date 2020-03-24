// /**
//  * Implement Gatsby's Browser APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/browser-apis/
//  */

// // You can delete this file if you're not using it


// require("./src/css/style.css");

// exports.onInitialClientRender = () => {  
//   function destyleMktoForm(mktoForm, moreStyles) {  

//     var formEl = mktoForm.getFormElem()[0],      
//     arrayFrom = Function.prototype.call.bind(Array.prototype.slice); 

//     // remove element styles from <form> and children    
//     var styledEls = arrayFrom(formEl.querySelectorAll("[style]")).concat(formEl);

//     styledEls.forEach(function(el) {      el.removeAttribute("style");    });    
//     // disable remote stylesheets and local <style>s    
//     var styleSheets = arrayFrom(document.styleSheets);    
    
//     styleSheets.forEach(function(ss) { if ([mktoForms2BaseStyle, mktoForms2ThemeStyle].indexOf(ss.ownerNode) != -1 || formEl.contains(ss.ownerNode)) { ss.disabled = true;}}); if (!moreStyles) { formEl.setAttribute("data-styles-ready", "true");}}  MktoForms2.whenRendered(function(form) {destyleMktoForm(form);});
//   };‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍
