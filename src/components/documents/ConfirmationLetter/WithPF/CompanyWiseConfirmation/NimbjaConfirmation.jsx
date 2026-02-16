// import React from 'react'
// import A4Page from '../../../../layout/A4Page'

// const NimbjaConfirmation = ({ company, data }) => {
//   return (
//     <>
//       <A4Page headerSrc={company.header} footerSrc={company.footer}></A4Page>
//       <A4Page headerSrc={company.header} footerSrc={company.footer}></A4Page>
//     </>
//   );
// }

// export default NimbjaConfirmation

import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import A4Page from "../../../../layout/A4Page";
import { formatCurrency } from "../../../../../utils/salaryCalculations";

const NimbjaConfirmation = ({ company = {}, data = {} }) => {
  const firstName = data.employeeName?.split(" ")[0] || "";

  const formatDate = (date) =>
    date
      ? new Date(date).toLocaleDateString("en-US", {
          month: "long",
          day: "2-digit",
          year: "numeric",
        })
      : "";

  /* ================= SALARY LOGIC ================= */

  const round2 = (num) => Number(num.toFixed(2));
  const annualCTC = round2(Number(data.totalSalary || 0));
  const grossMonthly = round2(annualCTC / 12);

  const basicAnnual = round2(annualCTC * 0.33);
  const hraAnnual = round2(annualCTC * 0.2);
  const daAnnual = round2(annualCTC * 0.05);
  const specialAnnual = round2(annualCTC * 0.33);
  const foodAnnual = round2(annualCTC * 0.04);

  const miscAnnual = round2(
    annualCTC -
      (basicAnnual + hraAnnual + daAnnual + specialAnnual + foodAnnual),
  );

  const salaryRows = [
    ["Basic", basicAnnual / 12, basicAnnual],
    ["House Rent Allowance", hraAnnual / 12, hraAnnual],
    ["Dearness Allowance", daAnnual / 12, daAnnual],
    ["Special Allowance", specialAnnual / 12, specialAnnual],
    ["Food Allowance", foodAnnual / 12, foodAnnual],
    ["Misc. Allowance", miscAnnual / 12, miscAnnual],
  ];

  return (
    <>
      {/* ================= PAGE 1 ================= */}
      <A4Page headerSrc={company.header} footerSrc={company.footer}>
        <Box>
          <Typography align="right" mb={5}>
            {formatDate(data.issueDate)}
          </Typography>

          <Typography mb={1}>
            <strong>Name :</strong> {data.employeeName}
          </Typography>

          <Typography mb={1}>
            <strong>Address :</strong> {data.address}
          </Typography>

          <Typography mb={4} mt={3}>
            <strong>Subject :</strong> Letter of intent for the continued
            services as <strong>{data.position}</strong>
          </Typography>

          <Typography mb={3}>Dear {firstName},</Typography>

          <Typography textAlign="justify" mb={3}>
            We are pleased to confirm your continued services at the position of{" "}
            <strong>{data.position}</strong> with{" "}
            <strong>Nimbja Security Solutions Pvt. Ltd.</strong> with effective
            date <strong>{formatDate(data.effectiveDate)}</strong> considering
            your performance and support towards the organization.
          </Typography>

          <Typography textAlign="justify" mb={3}>
            If there is any change in the date of joining, changes can be taken
            under consideration. Your total Gross salary will be Rs.{" "}
            <strong>{formatCurrency(annualCTC)}</strong> per year.
          </Typography>

          <Typography textAlign="justify" mb={3}>
            Subject to various deductions as per companies and government
            policy.
          </Typography>

          <Typography textAlign="justify" mb={3}>
            The roles and responsibilities and other terms and conditions of
            your employment will be specified in your letter of appointment.
          </Typography>

          <Typography textAlign="justify" mb={3}>
            We welcome you to Nimbja Security Solutions Pvt. Ltd. family and
            hope it would be the beginning of a long and mutually beneficial
            association.
          </Typography>

          <Typography mb={4}>
            Kindly acknowledge the duplicate copy of this letter as an
            acceptance of this offer.
          </Typography>

          <Typography mb={3}>Yours Sincerely,</Typography>

          <Typography mb={4}>
            For Nimbja Security Solutions Pvt. Ltd.
          </Typography>

          {/* Signature Section */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 6 }}>
            <Box>
              {company?.signature && (
                <img
                  src={company.signature}
                  alt="Signature"
                  style={{ height: 70 }}
                />
              )}
              <Typography mt={1}>{company.hrName}</Typography>
              <Typography>HR Relations Lead</Typography>
            </Box>

            <Box>
              <Typography>Signature : ________________________</Typography>
              <Typography mt={2}>
                Candidate Name : {data.employeeName}
              </Typography>
            </Box>
          </Box>

          <Typography
            sx={{
              mt: 8,
              fontWeight: 600,
              textAlign: "center",
              textDecoration: "underline",
            }}
          >
            Enclosures: Annexure A - Salary Structure
          </Typography>
        </Box>
      </A4Page>

      {/* ================= PAGE 2 ================= */}
      <A4Page headerSrc={company.header} footerSrc={company.footer}>
        {(() => {
          /* ===== helpers ===== */
          const round2 = (num) => Number(num.toFixed(2)); // monthly
          const round0 = (num) => Math.round(num); // annual

          /* ===== SOURCE OF TRUTH ===== */
          const annualCTC = round0(
            Number(data.salary || data.ctc || data.annualSalary || 0),
          );

          const grossMonthly = round2(annualCTC / 12);

          /* ===== PERCENT CONFIG (100%) ===== */
          const PERCENT = {
            basic: 0.4,
            hra: 0.18,
            da: 0.12,
            special: 0.16,
            food: 0.06,
          };

          const food = 3750;

          /* ===== MONTHLY CALCULATION (ROUND HERE ONLY) ===== */
          const basicMonthly = round2(grossMonthly * PERCENT.basic);
          const hraMonthly = round2(grossMonthly * PERCENT.hra);
          const daMonthly = round2(grossMonthly * PERCENT.da);
          const specialMonthly = round2(grossMonthly * PERCENT.special);
          const foodMonthly = round2(food / 12);


          const usedMonthly =
            basicMonthly +
            hraMonthly +
            daMonthly +
            specialMonthly +
            foodMonthly;

          /* ===== ADJUSTMENT BUCKET ===== */
          const miscMonthly = round2(grossMonthly - usedMonthly);

          /* ===== FINAL SALARY COMPONENTS ===== */
          const rows = [
            {
              name: "Basic",
              monthly: basicMonthly,
              annual: round0(basicMonthly * 12),
            },
            {
              name: "Bouquet Of Benefits",
              monthly: hraMonthly,
              annual: round0(hraMonthly * 12),
            },
            {
              name: "HRA",
              monthly: daMonthly,
              annual: round0(daMonthly * 12),
            },
            {
              name: "City Allowance",
              monthly: specialMonthly,
              annual: round0(specialMonthly * 12),
            },
            {
              name: "Provident Fund",
              monthly: foodMonthly,
              annual: round0(foodMonthly * 12),
            },
            {
              name: "Performance Bonus",
              monthly: miscMonthly,
              annual: round0(miscMonthly * 12),
            },
          ];

          /* ===== TOTALS (MATCH CTC ALWAYS) ===== */
          //
          const totalMonthly = round2(
            rows.reduce((sum, r) => sum + r.monthly, 0),
          );

          const totalAnnual = round0(
            rows.reduce((sum, r) => sum + r.annual, 0),
          );

          /* ================= TABLE STYLES (UNCHANGED) ================= */
          const CELL = {
            border: "1px solid #000",
            fontFamily: '"Bahnschrift", "Segoe UI", sans-serif',
            fontSize: "11pt",
            padding: "6px 8px",
            lineHeight: 1.4,
          };

          const GREEN_ROW = {
            backgroundColor: "#9BBB59",
          };

          return (
            <>
              {/* ================= ROOT WRAPPER ================= */}
              <Box
                sx={{
                  fontFamily: "Bahnschrift",
                  position: "relative",
                }}
              >
                {/* ================= ISSUE DATE ================= */}
                <Box
                  sx={{
                    position: "absolute",
                    right: "18mm",
                    mt: "-10mm",
                    fontFamily: "Bahnschrift",
                  }}
                >
                  {formatDate(data.issueDate)}
                </Box>

                {/* ================= EMPLOYEE DETAILS ================= */}
                <Box sx={{ fontSize: "8pt" }}>
                  <Typography
                    sx={{ fontSize: "11pt", fontFamily: "Bahnschrift" }}
                  >
                    Ref: {company.regNo}
                  </Typography>

                  <Typography
                    sx={{
                      fontWeight: "bold",
                      mt: "6mm",
                      textDecoration: "underline",
                      fontFamily: "Bahnschrift",
                      fontSize: "12pt",
                      textAlign: "center",
                    }}
                  >
                    Salary Structure - Break Up
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "10pt",
                      mt: "8mm",
                      fontFamily: "Bahnschrift",
                    }}
                  >
                    Name : {data.mrms} {data.employeeName}
                  </Typography>

                  <Typography
                    sx={{ fontSize: "10pt", fontFamily: "Bahnschrift" }}
                  >
                    Designation : {data.position}
                  </Typography>

                  <Typography
                    sx={{ fontSize: "10pt", fontFamily: "Bahnschrift" }}
                  >
                    Date of Joining : {formatDate(data.joiningDate)}
                  </Typography>

                  <Typography
                    sx={{ fontSize: "10pt", fontFamily: "Bahnschrift" }}
                  >
                    Employee ID : {data.employeeId}
                  </Typography>
                </Box>
                <br />

                {/* ================= SALARY TABLE ================= */}
                <TableContainer>
                  <Table sx={{ borderCollapse: "collapse" }}>
                    <TableHead>
                      <TableRow sx={GREEN_ROW}>
                        <TableCell sx={{ ...CELL, fontWeight: "bold" }}>
                          Salary Components
                        </TableCell>
                        <TableCell
                          sx={{ ...CELL, fontWeight: "bold" }}
                          align="right"
                        >
                          Per Month (Rs.)
                        </TableCell>
                        <TableCell
                          sx={{ ...CELL, fontWeight: "bold" }}
                          align="right"
                        >
                          Per Annum (Rs.)
                        </TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {rows.map((row, i) => (
                        <TableRow key={i}>
                          <TableCell sx={CELL}>{row.name}</TableCell>
                          <TableCell sx={CELL} align="right">
                            {formatCurrency(row.monthly)}
                          </TableCell>
                          <TableCell sx={CELL} align="right">
                            {formatCurrency(row.annual)}
                          </TableCell>
                        </TableRow>
                      ))}

                      {/* ================= TOTAL ================= */}
                      <TableRow sx={{ ...GREEN_ROW, fontWeight: "bold" }}>
                        <TableCell sx={CELL}>Total Salary</TableCell>
                        <TableCell sx={CELL} align="right">
                          {formatCurrency(totalMonthly)}
                        </TableCell>
                        <TableCell sx={CELL} align="right">
                          {formatCurrency(totalAnnual)}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </>
          );
        })()}
      </A4Page>
    </>
  );
};

export default NimbjaConfirmation;

