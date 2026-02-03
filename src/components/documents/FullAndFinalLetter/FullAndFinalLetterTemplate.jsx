import React from "react";
import PentaFullAndFinal from "./CompanyWiseFullAndFinal/PentaFullAndFinal";
import QuickFullAndFinal from "./CompanyWiseFullAndFinal/QuickFullAndFinal";

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
//   2: NeweageIncrement,
//   3: SmartMatrixIncrement,
//   4: DevconsIncrement,
//   5: RPIncrement,
  6 : PentaFullAndFinal,
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
