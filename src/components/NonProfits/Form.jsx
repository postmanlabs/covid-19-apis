// import React, { useEffect } from "react";
// import Helmet from "react-helmet";

// // import "./form.scss";

// const FormContactMkto = () => {
//   useEffect(() => {
//     MktoForms2.loadForm("//app-sj11.marketo.com", "XXX-XXX-XXX", 1608);
//   }, []);

//   return (
//     <div>
//       <Helmet>
//         <script
//           src="//app-sj11.marketo.com/js/forms2/js/forms2.min.js"
//           type="text/javascript"
//         />
//       </Helmet>
//       <form id="mktoForm_1608" />
//     </div>
//   );
// };

// // export default FormContactMkto;

// import React, { useEffect } from 'react';

// const MktoForm = (props) => {
//   useEffect(() => { MktoForms2.loadForm('//app-sj11.marketo.com', 'XXX-XXX-XXX', props.formId); }, []);

//   return (
//     <div className="bg-gray-300 shadow rounded p-3">
//       <div className="text-lg font-bold uppercase">{props.heading}</div>
//       <div className="text-sm mb-6">{props.subheading}</div>
//       <div style={{ height: `${props.height}`, overflow: 'hidden' }}>
//         <form id={`mktoForm_${props.formId}`} />
//       </div>
//     </div>
//   );
// };


// export default MktoForm;
