import React from "react";

import CubeageExperience from "./CompanyWiseExperience/CubeageExperience";
import DevconsExperience from "./CompanyWiseExperience/DevconsExperience";
import JDITExperience from "./CompanyWiseExperience/JDITExperience";
import NeweageExperience from "./CompanyWiseExperience/NeweageExperience";
import PentaExperience from "./CompanyWiseExperience/PentaExperience";
import RPExperience from "./CompanyWiseExperience/RPExperience";
import SmartMatrixExperience from "./CompanyWiseExperience/SmartMatrixExperience";
import SmartSoftwareExperience from "./CompanyWiseExperience/SmartSoftwareExperience";

// map company shortName OR id to component
const companyComponentMap = {
  1: CubeageExperience,
  2: NeweageExperience,
  3: SmartMatrixExperience,
  4: DevconsExperience,
  5: RPExperience,
  6: PentaExperience,
  8: JDITExperience,
  10: SmartSoftwareExperience,
};

const ExperienceLetterTemplate = ({ company, data }) => {
  if (!company) return null;

  const ExperienceComponent = companyComponentMap[company.id];

  if (!ExperienceComponent) {
    return <div>No experience template available for this company</div>;
  }

  return <ExperienceComponent company={company} data={data} />;
};

export default ExperienceLetterTemplate;
