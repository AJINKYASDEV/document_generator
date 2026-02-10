import React from "react";
import PentaFullAndFinal from "../WithoutPF/CompanyWaiseFullandFinal/PentaFullAndFinal";
//import QuickFullAndFinal from "./CompanyWaiseFullandFinal/QuickFullAndFinal";

 import CubeageFullAndFinal from "../WithoutPF/CompanyWaiseFullandFinal/CubeageFullAndFinal";
 
// import JDITIncrement from "./CompanyWiseIncrement/JDITIncrement";
// import NeweageIncrement from "./CompanyWiseIncrement/NeweageIncrement";
// import PentaIncrement from "./CompanyWiseIncrement/PentaIncrement";

// import SmartMatrixIncrement from "./CompanyWiseIncrement/SmartMatrixIncrement";
// import SmartSoftwareIncrement from "./CompanyWiseIncrement/SmartSoftwareIncrement";
 import QuickFullAndFinal from "../WithoutPF/CompanyWaiseFullandFinal/QuickFullAndFinal";
import   NimbjaFullAndFinal from "../WithoutPF/CompanyWaiseFullandFinal/NimbjaFullAndFinal";
import SmartMatrixFullAndFinal from "../WithoutPF/CompanyWaiseFullandFinal/SmartMatrixFullAndFinal";
import DevconsFullAndFinal from "../WithoutPF/CompanyWaiseFullandFinal/DevconsFullAndFinal";
import RPFullAndFinal from "../WithoutPF/CompanyWaiseFullandFinal/RPfullAndfinal";
import NeweageFullAndFinal from "../WithoutPF/CompanyWaiseFullandFinal/NeweageFullAndFinal";
import JDITFullAndFinal from "../WithoutPF/CompanyWaiseFullandFinal/JDITFullAndFinal";
import SmartSoftwareFullAndFinal from "../WithoutPF/CompanyWaiseFullandFinal/SmartSoftwareFullAndFinal";



// same company ids, just Increment components
const companyComponentMap = {
   1: CubeageFullAndFinal,
   2: NeweageFullAndFinal,
  3: SmartMatrixFullAndFinal,
   4: DevconsFullAndFinal,
   5: RPFullAndFinal,
  6 : PentaFullAndFinal,
  7: NimbjaFullAndFinal,
 8: JDITFullAndFinal,
  9: QuickFullAndFinal,
  10: SmartSoftwareFullAndFinal,
  
};

const WithoutPFFullAndFinalLetterTemplate = ({ company, data }) => {
  if (!company) return null;

  const FullAndFinalComponent = companyComponentMap[company.id];

  if (!FullAndFinalComponent) {
    return <div>No FullAndFinal template available for this company</div>;
  }

  return <FullAndFinalComponent company={company} data={data} />;
};

export default WithoutPFFullAndFinalLetterTemplate;
