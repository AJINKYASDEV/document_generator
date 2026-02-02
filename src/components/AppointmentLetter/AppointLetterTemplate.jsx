// import React from "react";

// // import CubeageAppointment from "./CompanyWiseAppointment/CubeageAppointment";
// // import DevconsAppointment from "./CompanyWiseAppointment/DevconsAppointment";
// // import JDITAppointment from "./CompanyWiseAppointment/JDITAppointment";
// // import NeweageAppointment from "./CompanyWiseAppointment/NeweageAppointment";
// // import PentaAppointment from "./CompanyWiseAppointment/PentaAppointment";
// // import RPAppointment from "./CompanyWiseAppointment/RPAppointment";
// import SmartMatrixAppointment from "../AppointmentLetter/CompanyWiseAppointmentLetter/SmartMatrixAppointment";
// // import SmartSoftwareAppointment from "./CompanyWiseAppointment/SmartsoftwareAppointment";

// // map company shortName OR id to component
// const companyComponentMap = {
// //   1: CubeageAppointment,
// //   2: NeweageAppointment,
//   3: SmartMatrixAppointment,
// //   4: DevconsAppointment,
// //   5: RPAppointment,
// //   6: PentaAppointment,
// //   8: JDITAppointment,
// //   10: SmartSoftwareAppointment,
// };

// const AppointmentLetterTemplate = ({ company, data }) => {
//   if (!company) return null;

//   const AppointmentComponent = companyComponentMap[company.id];

//   if (!AppointmentComponent) {
//     return <div>No Appointment template available for this company</div>;
//   }

//   return <AppointmentComponent company={company} data={data} />;
// };

// export default AppointmentLetterTemplate;

import React from "react";

// import CubeageAppointment from "./CompanyWiseAppointment/CubeageAppointment";
// import DevconsAppointment from "./CompanyWiseAppointment/DevconsAppointment";
// import JDITAppointment from "./CompanyWiseAppointment/JDITAppointment";
// import NeweageAppointment from "./CompanyWiseAppointment/NeweageAppointment";
// import PentaAppointment from "./CompanyWiseAppointment/PentaAppointment";
// import RPAppointment from "./CompanyWiseAppointment/RPAppointment";
import SmartMatrixAppointment from "../AppointmentLetter/CompanyWiseAppointmentLetter/SmartMatrixAppointment";
import NimbjaAppointment from "./CompanyWiseAppointmentLetter/NimbjaAppointment";
// import SmartSoftwareAppointment from "./CompanyWiseAppointment/SmartsoftwareAppointment";

// map company shortName OR id to component
const companyComponentMap = {
  //   1: CubeageAppointment,
  //   2: NeweageAppointment,
  3: SmartMatrixAppointment,
  //   4: DevconsAppointment,
  //   5: RPAppointment,
  //   6: PentaAppointment,
  7: NimbjaAppointment,
  //   8: JDITAppointment,
  //   10: SmartSoftwareAppointment,
};

const AppointmentLetterTemplate = ({ company, data }) => {
  if (!company) return null;

  const AppointmentComponent = companyComponentMap[company.id];

  if (!AppointmentComponent) {
    return <div>No Appointment template available for this company</div>;
  }

  return <AppointmentComponent company={company} data={data} />;
};

export default AppointmentLetterTemplate;
