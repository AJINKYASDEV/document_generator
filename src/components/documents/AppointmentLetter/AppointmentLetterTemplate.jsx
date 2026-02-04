import React from "react";
import PentaAppointmentLetter from "./CompanyWiseAppointement/PentaAppointmentLetter";
import QuickAppointmentLetter from "./CompanyWiseAppointement/QuickAppointmentLetter";
import JDITAppointmentLetter from "./CompanyWiseAppointement/JDITAppointmentLetter";
import SamartSoftwareAppointmentLetter from "./CompanyWiseAppointement/SamartSoftwareAppointmentLetter";
import NeweageAppointmentLetter from "./CompanyWiseAppointement/NeweageAppointmentLetter";

// import CubeageAppointment from "./CompanyWiseAppointment/CubeageAppointment";
// import DevconsAppointment from "./CompanyWiseAppointment/DevconsAppointment";
// import JDITAppointment from "./CompanyWiseAppointment/JDITAppointment";
// import NeweageAppointment from "./CompanyWiseAppointment/NeweageAppointment";
// import PentaAppointment from "./CompanyWiseAppointment/PentaAppointment";
// import RPAppointment from "./CompanyWiseAppointment/RPAppointment";
// import SmartMatrixAppointment from "./CompanyWiseAppointment/SmartmatrixAppointment";
// import SmartSoftwareAppointment from "./CompanyWiseAppointment/SmartsoftwareAppointment";

// map company shortName OR id to component
const companyComponentMap = {
//   1: CubeageAppointment,
  2: NeweageAppointmentLetter,
//   3: SmartMatrixAppointment,
//   4: DevconsAppointment,
//   5: RPAppointment,
  6:  PentaAppointmentLetter,
  8:  JDITAppointmentLetter,
9: QuickAppointmentLetter,
  10: SamartSoftwareAppointmentLetter,
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