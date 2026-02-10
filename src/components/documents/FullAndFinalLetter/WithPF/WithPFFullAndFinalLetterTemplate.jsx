import React from "react";
import PentaFullAndFinal from "../WithPF/CompanyWaise/PentaFullAndFinal";
//import QuickFullAndFinal from "./CompanyWaiseFullandFinal/QuickFullAndFinal";

 import CubeageFullAndFinal from "../WithPF/CompanyWaise/CubeageFullAndFinal";
 
// import JDITIncrement from "./CompanyWiseIncrement/JDITIncrement";
// import NeweageIncrement from "./CompanyWiseIncrement/NeweageIncrement";
// import PentaIncrement from "./CompanyWiseIncrement/PentaIncrement";

// import SmartMatrixIncrement from "./CompanyWiseIncrement/SmartMatrixIncrement";
// import SmartSoftwareIncrement from "./CompanyWiseIncrement/SmartSoftwareIncrement";
 import QuickFullAndFinal from "../WithPF/CompanyWaise/QuickFullAndFinal";
import   NimbjaFullAndFinal from "../WithPF/CompanyWaise/NimbjaFullAndFinal";
import SmartMatrixFullAndFinal from "../WithPF/CompanyWaise/SmartMatrixFullAndFinal";
import DevconsFullAndFinal from "../WithPF/CompanyWaise/DevconsFullAndFinal";
import RPFullAndFinal from "../WithPF/CompanyWaise/RPFullAndFinal";
import NeweageFullAndFinal from "../WithPF/CompanyWaise/NeweageFullAndFinal";
import JDITFullAndFinal from "../WithPF/CompanyWaise/JDITFullAndFinal";
import SmartSoftwareFullAndFinal from "../WithPF/CompanyWaise/SmartSoftwareFullAndFinal";



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

const WithPFFullAndFinalLetterTemplate = ({ company, data }) => {
  if (!company) return null;

  const FullAndFinalComponent = companyComponentMap[company.id];

  if (!FullAndFinalComponent) {
    return <div>No FullAndFinal template available for this company</div>;
  }

  return <FullAndFinalComponent company={company} data={data} />;
};

export default WithPFFullAndFinalLetterTemplate;
