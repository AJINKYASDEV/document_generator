import React from "react";
import PentaFullAndFinal from "./CompanyWaiseFullandFinal/PentaFullAndFinal";
//import QuickFullAndFinal from "./CompanyWaiseFullandFinal/QuickFullAndFinal";

 import CubeageFullAndFinal from "./CompanyWaiseFullandFinal/CubeageFullAndFinal";
 
// import JDITIncrement from "./CompanyWiseIncrement/JDITIncrement";
// import NeweageIncrement from "./CompanyWiseIncrement/NeweageIncrement";
// import PentaIncrement from "./CompanyWiseIncrement/PentaIncrement";

// import SmartMatrixIncrement from "./CompanyWiseIncrement/SmartMatrixIncrement";
// import SmartSoftwareIncrement from "./CompanyWiseIncrement/SmartSoftwareIncrement";
 import QuickFullAndFinal from "./CompanyWaiseFullandFinal/QuickFullAndFinal";
import   NimbjaFullAndFinal from "./CompanyWaiseFullandFinal/NimbjaFullAndFinal";
import SmartMatrixFullAndFinal from "./CompanyWaiseFullandFinal/SmartMatrixFullAndFinal";
import DevconsFullAndFinal from "./CompanyWaiseFullandFinal/DevconsFullandFinal";
import RPFullAndFinal from "./CompanyWaiseFullandFinal/RPfullandfinal";



// same company ids, just Increment components
const companyComponentMap = {
   1: CubeageFullAndFinal,
   //2: NeweageIncrement,
  3: SmartMatrixFullAndFinal,
   4: DevconsFullAndFinal,
   5: RPFullAndFinal,
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
    return <div>No FullAndFinal template available for this company</div>;
  }

  return <FullAndFinalComponent company={company} data={data} />;
};

export default FullAndFinalLetterTemplate;
