import React from "react";
import DevconsSalarySlip from "./DevconsSalarySlip";
import RPSalarySlip from "./RPSalarySlip";
import NimbjaSalarySlip from "./NimbjaSalarySlip";
import SmartMatrixSalarySlip from "../CompanyWisePFLetter/SmartMatrixSalarySlip";
// import CubeageUnPaidInternshipLetter from "./CompanyWiseUnPaidInternshipLetter/CubeageUnPaidInternshipLetter";
// import JDITUnPaidInternshipLetter from "./CompanyWiseUnPaidInternshipLetter/JDITUnPaidInternshipLetter";
// import NeweageUnPaidInternshipLetter from "./CompanyWiseUnPaidInternshipLetter/NeweageUnPaidInternshipLetter";
// import PentaUnPaidInternshipLetter from "./CompanyWiseUnPaidInternshipLetter/PentaUnPaidInternshipLetter";
// import RPUnPaidInternshipLetter from "./CompanyWiseUnPaidInternshipLetter/RPUnPaidInternshipLetter";
// import SmartMatrixUnPaidInternshipLetter from "./CompanyWiseUnPaidInternshipLetter/SmartMatrixUnPaidInternshipLetter";
// import SmartSoftwareUnPaidInternshipLetter from "./CompanyWiseUnPaidInternshipLetter/SmartSoftwareUnPaidInternshipLetter";
// import NimbjaUnPaidInternshipLetter from "./CompanyWiseUnPaidInternshipLetter/NimbjaUnPaidInternshipLetter";
// import DevconsUnPaidInternshipLetter from "./CompanyWiseUnPaidInternshipLetter/DevconsUnPaidInternshipLetter";
// import QuickUnPaidInternshipLetter from "./CompanyWiseUnPaidInternshipLetter/QuickUnPaidInternshipLetter";

// same company ids, just Increment components
const companyComponentMap = {
  //   1: CubeageUnPaidInternshipLetter,
  //   2: NeweageUnPaidInternshipLetter,
  3: SmartMatrixSalarySlip,
  4: DevconsSalarySlip,

  5: RPSalarySlip,
  //   6: PentaUnPaidInternshipLetter,
  7: NimbjaSalarySlip,
  //   8: JDITUnPaidInternshipLetter,
  //   9: QuickUnPaidInternshipLetter,
  //   10:SmartSoftwareUnPaidInternshipLetter,
};

const WithPFLetterTemplate = ({ company, data }) => {
  if (!company) return null;

  const WithPFInternshipComponent = companyComponentMap[company.id];

  if (!WithPFInternshipComponent) {
    return <div>No WithPF template available for this company</div>;
  }

  return <WithPFInternshipComponent company={company} data={data} />;
};

export default WithPFLetterTemplate;
