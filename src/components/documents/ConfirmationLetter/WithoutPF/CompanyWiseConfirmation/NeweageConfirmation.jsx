import React from "react";
import {
  Box,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import A4Layout from "../../../../layout/A4Page";
import {
  formatCurrency,
  numberToWords,
} from "../../../../../utils/salaryCalculations";

/* ================= DATE FORMAT ================= */
const formatDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    })
    : "";

/* ================= STYLES ================= */
const TEXT = {
  fontFamily: "Times New Roman, serif",
  fontSize: "14px",
  lineHeight: 1.8,
};

const NeweageConfirmation = ({ company, data }) => {
  if (!company || !data) return null;

  /* ================= SAFE DATA ================= */
  const {
    mrms = "",
    candidateName = "",
    employeeName = "",
    address = "",
    position = "",
    joiningDate = "",
    effectiveDate = "",
    issueDate = "",
  } = data;

  const NAME = candidateName || employeeName;
  const COMPANY_NAME = company.name?.toUpperCase() || "";

  /* ================= DYNAMIC SALARY ================= */
  const totalSalaryAnually = parseFloat(data.totalSalary);

  // === Annual components (percentages of totalSalaryAnually) ===
  const basicAnnual = totalSalaryAnually * 0.4013;
  const hraAnnual = totalSalaryAnually * 0.1798;
  const conveyanceAnnual = totalSalaryAnually * 0.1599;
  const specialAnnual = totalSalaryAnually * 0.1196;
  const foodAnnual = totalSalaryAnually * 0.0929;
  const medicAnnual = totalSalaryAnually * 0.0465;

  // === Monthly components ===
  const basicMonthly = Math.round(basicAnnual / 12);
  const hraMonthly = Math.round(hraAnnual / 12);
  const conveyanceMonthly = Math.round(conveyanceAnnual / 12);
  const specialMonthly = Math.round(specialAnnual / 12);
  const foodMonthly = Math.round(foodAnnual / 12);
  const medicMonthly = Math.round(medicAnnual / 12);

  // === Components array for table ===
  const salaryComponents = [
    { name: "Basic", monthly: basicMonthly, annual: basicAnnual },
    { name: "House Rent Allowance", monthly: hraMonthly, annual: hraAnnual },
    { name: "Dearness Allowance", monthly: conveyanceMonthly, annual: conveyanceAnnual },
    { name: "Special Allowance", monthly: specialMonthly, annual: specialAnnual },
    { name: "Food Allowance", monthly: foodMonthly, annual: foodAnnual },
    { name: "Misc. Allowance", monthly: medicMonthly, annual: medicAnnual },
  ];

  // === Totals ===
  const totalMonthly = salaryComponents.reduce((acc, c) => acc + c.monthly, 0);
  const totalAnnual = salaryComponents.reduce((acc, c) => acc + c.annual, 0);

  return (
    <>
      {/* ================= PAGE 1 ================= */}
      <A4Layout
        headerSrc={company.headerImage}
        footerSrc={company.footerImage}
      >
        <Typography sx={{ ...TEXT, mb: 2 }}>
          {formatDate(issueDate)}
        </Typography>

        <Typography sx={TEXT}>
          <b>Name</b> : {mrms} {NAME}
        </Typography>

        <Typography sx={{ ...TEXT, mb: 2 }}>
          <b>Address</b> : {address}
        </Typography>

        <Typography sx={{ ...TEXT, mb: 2 }}>
          Dear {NAME},
        </Typography>

        <Typography sx={{ ...TEXT, mb: 2 }}>
          We are pleased to confirm your continued services at the position of{" "}
          <b>{position}</b> with{" "}
          <b>NEWEAGE CLOUD SOFTWARE SERVICES Pvt. Ltd.</b> with effective date{" "}
          <b>{formatDate(effectiveDate)}</b> considering your performance and support
          towards the organization.
        </Typography>

        <Typography sx={{ ...TEXT, mb: 2 }}>
          If there is any change in the date of joining, changes can be taken under
          consideration.
        </Typography>

        <Typography sx={{ ...TEXT, mb: 2 }}>
          Your total Gross salary will be Rs.{" "}
          <b>{totalSalaryAnually.toLocaleString("en-IN")}</b> (
          <b>{numberToWords(totalSalaryAnually)}</b>) per year.
        </Typography>

        <Typography sx={{ ...TEXT, mb: 2 }}>
          Subject to various deductions as per company and government policy.
          The roles and responsibilities and other terms and conditions of your
          employment will be specified in your letter of appointment.
        </Typography>

        <Typography sx={{ ...TEXT, mb: 2 }}>
          We welcome you to{" "}
          <b>NEWEAGE CLOUD SOFTWARE SERVICES Pvt. Ltd.</b> family and hope it
          would be the beginning of a long and mutually beneficial association.
        </Typography>

        <Typography sx={{ ...TEXT, mb: 2 }}>
          Kindly acknowledge the duplicate copy of this letter as an acceptance
          of this offer.
        </Typography>

        <Typography sx={{ ...TEXT, mt: 3 }}>
          Yours Sincerely,
        </Typography>

        <Typography sx={TEXT}>
          For <b>{COMPANY_NAME}</b>
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            mt: 2,
            marginRight: "-20px",
          }}
        >
          <Box>
            <img
              src={company.signature}
              alt="Signature"
              style={{ height: "50px" }}
            />
            <img
              src={company.stamp}
              alt="Stamp"
              style={{ height: "100px" }}
            />
            <Typography>{company.hrName}</Typography>
            <Typography>HR Relations Lead</Typography>
          </Box>

          <Box sx={{ width: "55%" }}>
            <Typography>Signature : ___________________</Typography>
            <Typography>Candidate Name: {NAME}</Typography>
          </Box>
        </Box>
      </A4Layout>

      {/* ================= PAGE 2 ================= */}
      <A4Layout
        headerSrc={company.headerImage}
        footerSrc={company.footerImage}
      >
        <Typography align="center" sx={{ ...TEXT, mb: 3 }}>
          <b>Annexure A – Salary Structure</b>
        </Typography>

        <TableContainer>
          <Table
            size="small"
            sx={{
              border: "1px solid #333",
              borderCollapse: "collapse",
            }}
          >
            <TableHead>
              <TableRow sx={{ backgroundColor: "rgba(3, 171, 197, 0.95)" }}>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    border: "1px solid #333",
                    fontSize: "10pt",          // 🔽 smaller font
                    color: "white",
                    py: "0.4mm",               // 🔽 compact header height
                  }}
                >
                  <b>Salary Component</b>
                </TableCell>
                <TableCell align="center" sx={{ border: "1px solid #333" }}>
                  <b>Per Month (Rs.)</b>
                </TableCell>
                <TableCell align="center" sx={{ border: "1px solid #333" }}>
                  <b>Per Annum (Rs.)</b>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {salaryComponents.map((row, i) => (
                <TableRow key={i}>
                  <TableCell sx={{ border: "1px solid #333" }}>
                    {row.name}
                  </TableCell>
                  <TableCell align="center" sx={{ border: "1px solid #333" }}>
                    {formatCurrency(row.monthly)}
                  </TableCell>
                  <TableCell align="center" sx={{ border: "1px solid #333" }}>
                    {formatCurrency(row.annual)}
                  </TableCell>
                </TableRow>
              ))}

              <TableRow sx={{ backgroundColor: "rgba(3, 171, 197, 0.95)" }}>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    border: "1px solid #333",
                    fontSize: "10pt",          // 🔽 smaller font
                    color: "white",
                    py: "0.4mm",               // 🔽 compact header height
                  }}
                >
                  <b>Total Gross Salary</b>
                </TableCell>
                <TableCell align="center" sx={{ border: "1px solid #333" }}>
                  <b>{formatCurrency(totalMonthly)}</b>
                </TableCell>
                <TableCell align="center" sx={{ border: "1px solid #333" }}>
                  <b>{formatCurrency(totalAnnual)}</b>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </A4Layout>
    </>
  );
};

export default NeweageConfirmation;
