import React from "react";
import WithoutPFFullAndFinalLetterTemplate from "./WithoutPF/WithoutPFFullAndFinalLetterTemplate";
import WithPFFullAndFinalLetterTemplate from "./WithPF/WithPFFullAndFinalLetterTemplate";




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
