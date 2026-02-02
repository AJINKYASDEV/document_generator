import React from "react";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

/* ===================== A4 PAGE LAYOUT ===================== */
const A4Page = ({ children, headerSrc, footerSrc }) => (
  <Box
    sx={{
      width: "210mm",
      minHeight: "297mm",
      backgroundColor: "#fff",
      fontFamily: `"Times New Roman", Times, serif`,
      position: "relative",
      mx: "auto",
      pageBreakAfter: "always",
    }}
  >
    {headerSrc && (
      <img src={headerSrc} alt="Header" style={{ width: "100%" }} />
    )}

    {children}

    {footerSrc && (
      <Box sx={{ position: "absolute", bottom: 0, width: "100%" }}>
        <img src={footerSrc} alt="Footer" style={{ width: "100%" }} />
      </Box>
    )}
  </Box>
);

/* ===================== HELPERS ===================== */
const formatDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "";

const formatCurrency = (value) =>
  Number(value || 0).toLocaleString("en-IN");

/* ===================== SALARY STRUCTURE (JDIT STYLE) ===================== */
const generateSalaryComponents = (monthlyStipend) => {
  const basic = monthlyStipend * 0.4;
  const hra = monthlyStipend * 0.2;
  const conveyance = monthlyStipend * 0.1;
  const special = monthlyStipend * 0.2;
  const medical = monthlyStipend * 0.1;

  return [
    { name: "Basic", monthly: basic, annual: basic * 12 },
    { name: "House Rent Allowance", monthly: hra, annual: hra * 12 },
    { name: "Conveyance Allowance", monthly: conveyance, annual: conveyance * 12 },
    { name: "Special Allowance", monthly: special, annual: special * 12 },
    { name: "Food Allowance", monthly: medical, annual: medical * 12 },
  ];
};

const calculateTotals = (components) => {
  const monthly = components.reduce((sum, c) => sum + c.monthly, 0);
  const annual = components.reduce((sum, c) => sum + c.annual, 0);
  return { monthly, annual };
};

/* =====================================================
   MAIN COMPONENT — JDIT PAID INTERNSHIP LETTER
===================================================== */
const JDITPaidInternshipLetter = ({ company, data }) => {
  if (!company || !data) return null;

  const salaryComponents = generateSalaryComponents(data.stipend);
  const totals = calculateTotals(salaryComponents);

  return (
    <>
      {/* ===================== PAGE 1 ===================== */}
      <A4Page headerSrc={company.header} footerSrc={company.footer}>
        <Box sx={{ px: "12mm", pt: "4mm", fontSize: "14px", lineHeight: 1.6 }}>
          {/* DATE */}
          <Typography align="right" sx={{ mb: 3 }}>
            {formatDate(data.issueDate)}
          </Typography>

          {/* NAME & ADDRESS */}
          <Typography sx={{ mb: 1 }}>
            <strong>Name :</strong> {data.mrms} {data.employeeName}
          </Typography>

          <Typography sx={{ mb: 2 }}>
            <strong>Address :</strong> {data.address}
          </Typography>

          {/* SUBJECT */}
          <Typography sx={{ mb: 3 }}>
            <strong>Subject :</strong> Letter of intent for the position of
            Internship as a <strong>{data.designation}</strong>
          </Typography>

          {/* GREETING */}
          <Typography sx={{ mb: 2 }}>
            Dear {data.employeeName},
          </Typography>

          {/* BODY */}
          <Typography sx={{ mb: 2, textAlign: "justify" }}>
            We are pleased to offer you the Internship for the position of{" "}
            <strong>{data.designation}</strong>. As discussed, you are requested
            to join on <strong>{formatDate(data.startDate)}</strong>.
          </Typography>

          <Typography sx={{ mb: 2, textAlign: "justify" }}>
            If there is any change in the date of joining, the same can be taken
            under consideration. Your total Gross Salary will be Rs.{" "}
            <strong>{formatCurrency(totals.annual)}</strong> per year.
          </Typography>

          <Typography sx={{ mb: 2 }}>
            Subject to various deductions as per company and government policy.
          </Typography>

          <Typography sx={{ mb: 3, textAlign: "justify" }}>
            We welcome you to <strong>{company.name}</strong> family and hope
            this would be the beginning of a long and mutually beneficial
            association.
          </Typography>

          <Typography sx={{ mb: 4 }}>
            Kindly acknowledge the duplicate copy of this letter as acceptance
            of this offer.
          </Typography>

          {/* SIGN OFF */}
          <Typography>Yours Sincerely,</Typography>
          <Typography sx={{ fontWeight: 700, mb: 3 }}>
            For {company.name.toUpperCase()}
          </Typography>

          {/* SIGNATURE SECTION */}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* HR */}
            <Box>
              <Box sx={{ display: "flex", gap: 1 , mt: 8 }}>
                {company.sign && (
                  <img src={company.sign} alt="HR Sign" height={45} />
                )}
                {company.stamp && (
                  <img src={company.stamp} alt="Stamp" height={90} />
                )}
              </Box>
              <Typography sx={{ fontWeight: 600 }}>
                {company.hrName}
              </Typography>
              <Typography><strong> HR Department Pune </strong> </Typography>
            </Box>

            {/* CANDIDATE */}
            <Box sx={{ minWidth: 260 }}>
              <Box sx={{ display: "flex", alignItems: "center", mt: 15 }}>
                <Typography sx={{ mr: 1 }}>Signature :</Typography>
                <Box sx={{ flexGrow: 1, borderBottom: "1px solid #000" }} />
              </Box>
              <Typography sx={{ mt: 1 }}>
                Candidate Name : {data.employeeName}
              </Typography>
            </Box>
          </Box>

          <Typography sx={{ mt: 6, textAlign: "center", fontWeight: 600 }}>
            Enclosures: Annexure A – Salary Structure
          </Typography>
        </Box>
      </A4Page>

      {/* ===================== PAGE 2 ===================== */}
      <A4Page headerSrc={company.header} footerSrc={company.footer}>
        <Box sx={{ px: "25mm", pt: "40mm", fontSize: "14px" }}>
          <Typography align="center" sx={{ fontWeight: 700, mb: 3 }}>
            Annexure A – Salary Structure
          </Typography>

          <Table
            size="small"
            sx={{
              border: "1px solid #000",
              "& th, & td": {
                border: "1px solid #000",
                py: "4px",
              },
              "& th": {
                backgroundColor: "#080504",
                fontWeight: 700,
              },
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#d32f2f", fontWeight: 700,}}>Salary Components</TableCell>
                <TableCell  sx={{ color: "#d32f2f", align:"right"}}>Per Month (Rs.)</TableCell>
                <TableCell sx={{color: "#d32f2f", align:"right"}}>Per Annum (Rs.)</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {salaryComponents.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align="right">
                    {formatCurrency(row.monthly)}
                  </TableCell>
                  <TableCell align="right">
                    {formatCurrency(row.annual)}
                  </TableCell>
                </TableRow>
              ))}

              <TableRow>
                <TableCell sx={{ fontWeight: 700 }}>
                  Total Monthly Gross Salary
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 700 }}>
                  {formatCurrency(totals.monthly)}
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 700 }}>
                  {formatCurrency(totals.annual)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          

           {/* SIGNATURE SECTION */}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* HR */}
            <Box>
              <Box sx={{ display: "flex", gap: 1 , mt: 10}}>
                {company.sign && (
                  <img src={company.sign} alt="HR Sign" height={45} />
                )}
                {company.stamp && (
                  <img src={company.stamp} alt="Stamp" height={90} />
                )}
              </Box>
              <Typography sx={{ fontWeight: 600 }}>
                {company.hrName}
              </Typography>
              <Typography><strong>HR Department Pune</strong></Typography>
            </Box>

            {/* CANDIDATE */}
            <Box sx={{ minWidth: 260 }}>
              <Box sx={{ display: "flex", alignItems: "center", mt: 19 }}>
                <Typography sx={{ mr: 1 }}>Signature :</Typography>
                <Box sx={{ flexGrow: 1, borderBottom: "1px solid #000" }} />
              </Box>
              <Typography sx={{ mt: 1 }}>
                Candidate Name : {data.employeeName}
              </Typography>
            </Box>
          </Box>
        </Box>
         
      </A4Page>
    </>
  );
};

export default JDITPaidInternshipLetter;
