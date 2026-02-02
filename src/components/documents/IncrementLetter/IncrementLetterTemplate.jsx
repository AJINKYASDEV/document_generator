import React from "react";

import CubeageIncrement from "./CompanyWiseIncrement/CubeageIncrement";
import DevconsIncrement from "./CompanyWiseIncrement/DevconsIncrement";
import JDITIncrement from "./CompanyWiseIncrement/JDITIncrement";
import NeweageIncrement from "./CompanyWiseIncrement/NeweageIncrement";
import PentaIncrement from "./CompanyWiseIncrement/PentaIncrement";
import RPIncrement from "./CompanyWiseIncrement/RPIncrement";
import SmartMatrixIncrement from "./CompanyWiseIncrement/SmartMatrixIncrement";
import SmartSoftwareIncrement from "./CompanyWiseIncrement/SmartSoftwareIncrement";
import QuickIncrement from "./CompanyWiseIncrement/QuickIncrement";

// same company ids, just Increment components
const companyComponentMap = {
  1: CubeageIncrement,
  2: NeweageIncrement,
  3: SmartMatrixIncrement,
  4: DevconsIncrement,
  5: RPIncrement,
  6: PentaIncrement, 
  8: JDITIncrement,
  9: QuickIncrement,
  10: SmartSoftwareIncrement,
  
};

const IncrementLetterTemplate = ({ company, data }) => {
  if (!company) return null;

  const IncrementComponent = companyComponentMap[company.id];

  if (!IncrementComponent) {
    return <div>No increment template available for this company</div>;
  }

  return <IncrementComponent company={company} data={data} />;
};

export default IncrementLetterTemplate;
