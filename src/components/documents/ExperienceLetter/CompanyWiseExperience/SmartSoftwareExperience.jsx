import React from "react";
import { Box, Typography } from "@mui/material";
import A4Layout from "../../../layout/A4Page";

/* ================= SAFE DATE FORMAT ================= */
const formatDate = (date) => {
  if (!date) return "";

  const parsedDate = new Date(date);
  if (isNaN(parsedDate)) return "";

  return parsedDate.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

/* ================= MAIN COMPONENT ================= */
const SmartSoftwareExperience = ({ company, data }) => {
  if (!company || !data) return null;

  const {
    employeeName = "",
    designation = "",
    department = "",
    startDate = "",
    endDate = "",
    issueDate = new Date(), // ✅ fallback added
    employeeId = "",
  } = data;

  return (
    <A4Layout
      headerSrc={company.headerImage}
      footerSrc={company.footerImage}
      
    >
      {/* Date */}
      <Typography align="right" sx={{ mb: 4 }}>
        {formatDate(issueDate)}
      </Typography>

      {/* Reference */}
      <Typography sx={{ mb: 6 }}>
        <strong>Ref:SMART\PUN\RMG01\Exp-Letter\{employeeId}</strong> 
      </Typography>

      {/* Title */}
      <Typography
        align="center"
        sx={{
          fontWeight: 700,
          fontSize: 20,
          mb: 6,
          textDecoration: "underline",
        }}
      >
        EXPERIENCE CERTIFICATE
      </Typography>

      {/* Body */}
      <Typography sx={{ textAlign: "justify", mb: 3, lineHeight: 1.8 }}>
        This is to certify that <strong>{data.mrms}{employeeName}</strong> was employed with{" "}
        <strong>Smart Software Services (I) Pvt. Ltd.</strong> as{" "}
        <strong>{designation}</strong> in the{" "}
        <strong>{department} Department</strong> from{" "}
        <strong>{formatDate(data.joiningDate)}</strong> to{" "}
        <strong>{formatDate(data.relievingDate)}</strong>.
      </Typography>

      <Typography sx={{ textAlign: "justify", mb: 3, lineHeight: 1.8 }}>
        During her tenure we observe her obedient, honest and dedication in her work.
      </Typography>

      <Typography sx={{ textAlign: "justify", mb: 8, lineHeight: 1.8 }}>
        We wish her every success and a bright future in all her future
        endeavors.
      </Typography>

      {/* Signature */}
      <Box sx={{ mt: 10 }}>
        <Typography sx={{ fontWeight: 600 }}>
          For Smart Software Services (I) Pvt. Ltd.
        </Typography>
        <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  mb: 2,
                }}
              >
                {/* Signature */}
                {company.signature && (
                  <img
                    src={company.signature}
                    alt="Signature"
                    style={{ height: "60px" }}
                  />
                )}
        
                {/* Stamp */}
                {company.stamp && (
                  <img
                    src={company.stamp}
                    alt="Stamp"
                    style={{ height: "100px" }}
                  />
                )}
              </Box>
        

        <Box sx={{ mt: 6 }}>
          <Typography sx={{ fontWeight: 600 }}>
            Sandeep Patil
          </Typography>
          <Typography><b>HR Manager – HR Shared Services</b></Typography>
        </Box>
      </Box>

    </A4Layout>
  );
};

export default SmartSoftwareExperience;
