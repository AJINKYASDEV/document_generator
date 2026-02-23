import React, { useMemo } from "react";
import {
  Typography,
  Box,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  TableContainer,
} from "@mui/material";
import A4Layout from "../../../../layout/A4Page";

/* ================= SALARY UTILITIES ================= */
import {
  generateOfferLetterComponents,
  formatCurrency,
  numberToWords,
} from "../../../../../utils/salaryCalculations";

/* ================= COMMON TEXT ================= */
const TEXT = {
  fontFamily: "Verdana, Geneva, sans-serif",
  fontSize: "14px",
  lineHeight: 1.8,
};

/* ================= DATE FORMAT ================= */
const formatDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric",
      })
    : "";

export default function JDITIncrement({ company, data }) {
  const {
    employeeName = "",
    employeeId = "",
    issueDate = "",
    effectiveDate = "",
    newCTC = 0,
    designation = "",
    mrms = "",
  } = data || {};

  const firstName = employeeName.split(" ")[0] || "";

  /* ================= SALARY ================= */
  const salaryComponents = useMemo(
    () => generateOfferLetterComponents(newCTC),
    [newCTC]
  );

  const totalAnnual = Number(newCTC) || 0;
  const totalMonthly = Math.round(totalAnnual / 12);
  const salaryInWords = numberToWords(totalAnnual);

  const monthlyPF = 3750;
  const annualPF = monthlyPF * 12;

  return (
    <>
      {/* ================= PAGE 1 – INCREMENT LETTER ================= */}
      <A4Layout company={company}>
        <Box sx={TEXT}>
          <Typography align="right">
            {formatDate(issueDate)}
          </Typography>

          <Typography sx={{ mt: 5 }}>
            Dear {firstName},
          </Typography>

          <Typography sx={{ mt: 3 }}>
            We are delighted to inform you that in recognition of your exceptional
            performance and dedication as <b>{designation}</b>, your salary has been increased.
            <br /><br />
            Your new annual salary will be{" "}
            <b>Rs. {formatCurrency(totalAnnual)}</b> per annum
            effective from <b>{formatDate(effectiveDate)}</b>.
          </Typography>

          <Typography sx={{ mt: 3 }}>
            Thank you for your hard work and dedication. We sincerely appreciate
            your efforts and look forward to your continued contributions to our team.
          </Typography>

          <Typography sx={{ mt: 5 }}>Best Regards,</Typography>

          {/* SIGNATURE & STAMP */}
          <Box sx={{ display: "flex", gap: 3, mt: 5 }}>
            {company.incrementSignature && (
              <Box
                component="img"
                src={company.incrementSignature}
                sx={{ height: 50 }}
              />
            )}
            {company.stamp && (
              <Box
                component="img"
                src={company.stamp}
                sx={{ height: 100 }}
              />
            )}
          </Box>
        </Box>

        <Typography><b>{company.hrNameOne}</b></Typography>
        <Typography><b>CEO & Managing Director</b></Typography>
      </A4Layout>

      {/* ================= PAGE 2 – SALARY ANNEXURE ================= */}
      <A4Layout company={company}>
        <Typography align="center" sx={{ ...TEXT, fontWeight: "bold" }}>
          Salary Annexure
        </Typography>

        <Box
          sx={{
            width: "150px",
            height: "3px",
            backgroundColor: "#000",
            margin: "0 auto 30px",
          }}
        />

        {/* EMPLOYEE INFO */}
        <Box sx={{ mb: 3 }}>
          <Typography sx={TEXT}>
            Employee Code : {employeeId}
          </Typography>
          <Typography sx={TEXT}>
            Employee Name : {mrms}{employeeName}
          </Typography>
          <Typography sx={TEXT}>
            Effective Date : {formatDate(effectiveDate)}
          </Typography>
        </Box>

        {/* ================= SALARY TABLE ================= */}
        <TableContainer sx={{ mb: "4mm" }}>
          <Table
            size="small"
            sx={{
              border: "1px solid #333",
              borderCollapse: "collapse",
              width: "100%",
            }}
          >
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: "#000",
                  "& th": {
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "10pt",
                    border: "1px solid #333",
                    py: "0.4mm",
                  },
                }}
              >
                <TableCell>Salary Components</TableCell>
                <TableCell align="center">Per month (Rs.)</TableCell>
                <TableCell align="center">Per Annum (Rs.)</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {/* Dynamic Components except Misc */}
              {salaryComponents
                .filter((row) => row.name !== "Misc")
                .map((row, i) => (
                  <TableRow key={i}>
                    <TableCell
                      sx={{
                        border: "1px solid #333",
                        fontSize: "9.75pt",
                        py: "0.35mm",
                      }}
                    >
                      {row.name}
                    </TableCell>

                    <TableCell
                      align="center"
                      sx={{
                        border: "1px solid #333",
                        fontSize: "9.75pt",
                        py: "0.35mm",
                      }}
                    >
                      {formatCurrency(row.monthly)}
                    </TableCell>

                    <TableCell
                      align="center"
                      sx={{
                        border: "1px solid #333",
                        fontSize: "9.75pt",
                        py: "0.35mm",
                      }}
                    >
                      {formatCurrency(row.annual)}
                    </TableCell>
                  </TableRow>
                ))}

              {/* Static PF Row */}
              <TableRow>
                <TableCell
                  sx={{
                    border: "1px solid #333",
                    fontSize: "9.75pt",
                    py: "0.35mm",
                  }}
                >
                  Provident Fund (PF)
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    border: "1px solid #333",
                    fontSize: "9.75pt",
                    py: "0.35mm",
                  }}
                >
                  {formatCurrency(monthlyPF)}
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    border: "1px solid #333",
                    fontSize: "9.75pt",
                    py: "0.35mm",
                  }}
                >
                  {formatCurrency(annualPF)}
                </TableCell>
              </TableRow>

              {/* Total Row */}
              <TableRow
                sx={{
                  backgroundColor: "#000",
                  "& td": {
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "10pt",
                    border: "1px solid #333",
                    py: "0.4mm",
                  },
                }}
              >
                <TableCell>Total Monthly Gross Salary</TableCell>
                <TableCell align="center">
                  {formatCurrency(totalMonthly)}
                </TableCell>
                <TableCell align="center">
                  {formatCurrency(totalAnnual)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography sx={{ ...TEXT, mt: 4 }}>
          Please note that the details in this communication are confidential and
          you are requested not to share the same with others.
        </Typography>
      </A4Layout>
    </>
  );
}
