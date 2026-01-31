import React from "react";
import NimbjaInternship from "./CompamyWiseInternship/NimbjaInternship.jsx";
import SmartMatrixInternship from "./CompamyWiseInternship/SmartMatrixInternship.jsx";
import CubeageInternship from "./CompamyWiseInternship/CubeageInternship.jsx";


// map company shortName OR id to component
const companyComponentMap = {
      1:CubeageInternship,
//   2: NeweageExperience,
  3: SmartMatrixInternship,
//   4: DevconsExperience,
//   5: RPExperience,
//   6: PentaExperience,
  7: NimbjaInternship,
//   8: JDITExperience,
//   10: SmartSoftwareExperience,
};

const InternshipLetterTemplate = ({ company, data }) => {
  if (!company) return null;

  const InternshipComponent = companyComponentMap[company.id];

  if (!InternshipComponent) {
    return <div>No experience template available for this company</div>;
  }

  return <InternshipComponent company={company} data={data} />;
};

export default InternshipLetterTemplate;
