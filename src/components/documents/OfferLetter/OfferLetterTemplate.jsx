import React from "react";

import CubeageOffer from "./CompanyWiseOffer/CubeageOffer";
import DevconsOffer from "./CompanyWiseOffer/DevconsOffer";
import JDITOffer from "./CompanyWiseOffer/JDITOffer";
import NeweageOffer from "./CompanyWiseOffer/NeweageOffer";
import PentaOffer from "./CompanyWiseOffer/PentaOffer";
import RPOffer from "./CompanyWiseOffer/RPOffer";
import SmartMatrixOffer from "./CompanyWiseOffer/SmartMatrixOffer";
import SmartSoftwareOffer from "./CompanyWiseOffer/SmartSoftwareOffer";
import QuickManagementOffer from "./CompanyWiseOffer/QuickManagementOffer";

// same company ids, Offer components
const companyComponentMap = {
  1: CubeageOffer,
  2: NeweageOffer,
  3: SmartMatrixOffer,
  4: DevconsOffer,
  5: RPOffer,
  6: PentaOffer,
  8: JDITOffer,
  9: QuickManagementOffer,
  10: SmartSoftwareOffer,
};

const OfferLetterTemplate = ({ company, data }) => {
  if (!company) return null;

  const OfferComponent = companyComponentMap[company.id];

  if (!OfferComponent) {
    return <div>No offer letter template available for this company</div>;
  }

  return <OfferComponent company={company} data={data} />;
};

export default OfferLetterTemplate;
