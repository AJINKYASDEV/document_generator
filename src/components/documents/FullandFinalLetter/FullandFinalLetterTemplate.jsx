import React from "react";
import PentaFullAndFinal from "./CompanyWaiseFullandFinal/PentaFullAndFinal";
import QuickFullAndFinal from "./CompanyWaiseFullandFinal/QuickFullAndFinal";

 import CubeageFullAndFinal from "./CompanyWaiseFullandFinal/CubeageFullAndFinal";
 import DevconsFullFinal from "./CompanyWaiseFullandFinal/DevconsFullandFinal";
// import JDITIncrement from "./CompanyWiseIncrement/JDITIncrement";
// import NeweageIncrement from "./CompanyWiseIncrement/NeweageIncrement";
// import PentaIncrement from "./CompanyWiseIncrement/PentaIncrement";
 import RPFullandFinal from "./CompanyWaiseFullandFinal/RPfullandfinal";
// import SmartMatrixIncrement from "./CompanyWiseIncrement/SmartMatrixIncrement";
// import SmartSoftwareIncrement from "./CompanyWiseIncrement/SmartSoftwareIncrement";
 import QuickFullAndFinal from "./CompanyWaiseFullandFinal/QuickFullAndFinal";
import   NimbjaFullAndFinal from "./CompanyWaiseFullandFinal/NimbjaFullAndFinal";
import SmartMatrixFullAndFinal from "./CompanyWaiseFullandFinal/SmartMatrixFullAndFinal";



// same company ids, just Increment components
const companyComponentMap = {
   1: CubeageFullAndFinal,
   //2: NeweageIncrement,
  3: SmartMatrixFullAndFinal,
   4: DevconsFullFinal,
   5: RPFullandFinal,
  6 : PentaFullAndFinal,
  7: NimbjaFullAndFinal,
//   8: JDITIncrement,
  9: QuickFullAndFinal,
//   10: SmartSoftwareIncrement,
  
};

const FullAndFinalLetterTemplate = ({ company, data }) => {
  if (!company) return null;

  const FullAndFinalComponent = companyComponentMap[company.id];

  if (!FullAndFinalComponent) {
    return <div>No increment template available for this company</div>;
  }

  return <FullAndFinalComponent company={company} data={data} />;
};

export default FullAndFinalLetterTemplate;
