import React from "react";
import { Box, Typography } from "@mui/material";
import A4Layout from "../../../layout/A4Page";

/* ================= DATE FORMAT ================= */
const formatDate = (date) => {
  if (!date) return "";

  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();

  return `${day}/${month}/${year}`;
};

const SmartMatrixCertification = ({ company, data }) => {
  return (
    <A4Layout headerSrc={company.header} footerSrc={company.footer}></A4Layout>
  );
};

export default SmartMatrixCertification;
