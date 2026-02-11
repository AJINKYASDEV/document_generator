import React from "react";
import PentaFullAndFinal from "./CompanyWiseFullAndFinal/PentaFullAndFinal";
import QuickFullAndFinal from "./CompanyWiseFullAndFinal/QuickFullAndFinal";
import JditFullandFinal from "./CompanyWaiseFullandFinal/JditFullAndFinal";
import NeweageFullAndFinal from "./CompanyWaiseFullandFinal/NeweageFullandFinal";
import SmartSoftwareFullAndFinal from "./CompanyWaiseFullandFinal/SmartSoftwareFullandFinal";  

// import CubeageIncrement from "./CompanyWiseIncrement/CubeageIncrement";
// import DevconsIncrement from "./CompanyWiseIncrement/DevconsIncrement";
// import JDITIncrement from "./CompanyWiseIncrement/JDITIncrement";
// import NeweageIncrement from "./CompanyWiseIncrement/NeweageIncrement";
// import PentaIncrement from "./CompanyWiseIncrement/PentaIncrement";
// import RPIncrement from "./CompanyWiseIncrement/RPIncrement";
// import SmartMatrixIncrement from "./CompanyWiseIncrement/SmartMatrixIncrement";
// import SmartSoftwareIncrement from "./CompanyWiseIncrement/SmartSoftwareIncrement";
// import QuickIncrement from "./CompanyWiseIncrement/QuickIncrement";.


// same company ids, just Increment components
const companyComponentMap = {
//   1: CubeageIncrement,
  2: NeweageFullAndFinal,
//   3: SmartMatrixIncrement,
//   4: DevconsIncrement,
//   5: RPIncrement,
  6 : PentaFullAndFinal,
  8: JditFullandFinal,
  9: QuickFullAndFinal,
  10: SmartSoftwareFullAndFinal,
  
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
