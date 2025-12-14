import React from "react";

import CubeageSalarySlip from "./CompanyWiseSalary/CubeageSalarySlip";
import DevconsSalarySlip from "./CompanyWiseSalary/DevconsSalarySlip";
import JDISTalarySlip from "./CompanyWiseSalary/JDITSalarySlip";
import NeweageSalarySlip from "./CompanyWiseSalary/NeweageSalarySlip";
import PentaSalarySlip from "./CompanyWiseSalary/PentaSalarySlip";
import RPSalarySlip from "./CompanyWiseSalary/RPSalarySlip";
import SmartMatrixSalarySlip from "./CompanyWiseSalary/SmartMatrixSalarySlip";
import SmartSoftwareSalarySlip from "./CompanyWiseSalary/SmartSoftwareSalarySlip";

const companyComponentMap = {
  1: CubeageSalarySlip,
  2: NeweageSalarySlip,
  3: SmartMatrixSalarySlip,
  4: DevconsSalarySlip,
  5: RPSalarySlip,
  6: PentaSalarySlip,
  8: JDISTalarySlip,
  10: SmartSoftwareSalarySlip,
};

const SalarySlipTemplate = ({ company, data }) => {
  if (!company) return null;

  const SalarySlipComponent = companyComponentMap[company.id];

  if (!SalarySlipComponent) {
    return <div>No salary slip template available</div>;
  }

  return <SalarySlipComponent company={company} data={data} />;
};

export default SalarySlipTemplate;
