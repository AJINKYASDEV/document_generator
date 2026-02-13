import React from "react";
import DevconsSalarySlip from "./DevconsSalarySlip";
import RPSalarySlip from "./RPSalarySlip";
import NimbjaSalarySlip from "./NimbjaSalarySlip";
<<<<<<< HEAD
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
=======
import CubeageSalarySlip from "./CubeageSalarySlip";
import JDITSalarySlip from "./JDITSalarySlip";
import NeweageSalarySlip from "./NeweageSalarySlip";
import SmartMatrixSalarySlip from "./SmartMatrixSalarySlip";
import SmartSoftwareSalarySlip from "./SmartSoftwareSalarySlip";
import PentaSalarySlip from "./PentaSalarySlip";
>>>>>>> b942c54598e610beac5f97379345fecb78871a0b

// same company ids, just Increment components
const companyComponentMap = {
  //   1: CubeageUnPaidInternshipLetter,
  //   2: NeweageUnPaidInternshipLetter,
  3: SmartMatrixSalarySlip,
  4: DevconsSalarySlip,

  5: RPSalarySlip,
<<<<<<< HEAD
  //   6: PentaUnPaidInternshipLetter,
=======
  6: PentaSalarySlip,
>>>>>>> b942c54598e610beac5f97379345fecb78871a0b
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
