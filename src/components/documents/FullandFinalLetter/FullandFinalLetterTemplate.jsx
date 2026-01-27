import React from "react";

// import CubeageExperience from "./CompanyWiseExperience/CubeageExperience";
// import JDITExperience from "./CompanyWiseExperience/JDITExperience";
// import NeweageExperience from "./CompanyWiseExperience/NeweageExperience";
// import PentaExperience from "./CompanyWiseExperience/PentaExperience";

// import SmartMatrixExperience from "./CompanyWiseExperience/SmartMatrixExperience";
// import SmartSoftwareExperience from "./CompanyWiseExperience/SmartSoftwareExperience";
import DevconsFullandFinal from "./CompanyWaiseFullandFinal/DevconsFullandFinal";
import RPfullandfinal from "./CompanyWaiseFullandFinal/RPfullandfinal";

// map company shortName OR id to component
const companyComponentMap = {
//   1: CubeageExperience,
//   2: NeweageExperience,
//   3: SmartMatrixExperience,
  4: DevconsFullandFinal,
  5: RPfullandfinal,
//   6: PentaExperience,
//   8: JDITExperience,
//   10: SmartSoftwareExperience,
};

const FullandFinalLetterTemplate = ({ company, data }) => {
  if (!company) return null;

  const FullandFinalComponent = companyComponentMap[company.id];

  if (!FullandFinalComponent) {
    return <div>No FullandFinal template available for this company</div>;
  }

  return <FullandFinalComponent company={company} data={data} />;
};

export default FullandFinalLetterTemplate;
