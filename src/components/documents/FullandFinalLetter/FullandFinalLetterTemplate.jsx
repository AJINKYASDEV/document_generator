import React from "react";
<<<<<<< HEAD
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
=======
import WithoutPFFullAndFinalLetterTemplate from "./WithoutPF/WithoutPFFullAndFinalLetterTemplate";
import WithPFFullAndFinalLetterTemplate from "./WithPF/WithPFFullAndFinalLetterTemplate";



>>>>>>> a4e0d8c4a8a5ccaaddf7bfb833701e5c9be319f3

const FullAndFinalLetterTemplate = ({ company, data }) => {
  // 🔑 This value must come from form / documentData
  const FullAndFinalType = data?.fullandfinalType; // "paid" | "unpaid"

  if (!FullAndFinalType) {
    return <div>FullAndFinal type not selected</div>;
  }

  if (FullAndFinalType === "withPF") {
    return <WithPFFullAndFinalLetterTemplate company={company} data={data} />;
  }

  if (FullAndFinalType === "withoutPF") {
    return <WithoutPFFullAndFinalLetterTemplate company={company} data={data} />;
  }

  return <div>Invalid FullAndFinal type</div>;
};

export default FullAndFinalLetterTemplate;
