import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import A4Page from "../../../../layout/A4Page";
import { formatCurrency } from "../../../../../utils/salaryCalculations";

const RPConfirmationLetter = ({ company = {}, data = {} }) => {
  const firstName = data.employeeName?.split(" ")[0] || "";

  const formatDate = (date) =>
    date
      ? new Date(date).toLocaleDateString("en-US", {
          month: "long",
          day: "2-digit",
          year: "numeric",
        })
      : "";

  /* ================= SALARY LOGIC (PF Balanced Inside CTC) ================= */

  const round2 = (num) => Number(num.toFixed(2));
  const annualCTC = round2(Number(data.totalSalary || 0));

  // ===== Static PF =====
  const pfMonthly = 3750;
  const pfAnnual = round2(pfMonthly * 12);

  // ===== Remaining After PF =====
  const remainingAfterPF = annualCTC - pfAnnual;

  // ===== Apply % on Remaining =====
  const basicAnnual = round2(remainingAfterPF * 0.40);
  const hraAnnual = round2(remainingAfterPF * 0.18);
  const daAnnual = round2(remainingAfterPF * 0.12);
  const foodAnnual = round2(remainingAfterPF * 0.06);

  // ===== Special (Balancing Component - Never Negative) =====
  let specialAnnual = round2(
    remainingAfterPF -
      (basicAnnual + hraAnnual + daAnnual + foodAnnual)
  );

  if (specialAnnual < 0) specialAnnual = 0;

  // ===== Monthly Values =====
  const basicMonthly = round2(basicAnnual / 12);
  const hraMonthly = round2(hraAnnual / 12);
  const daMonthly = round2(daAnnual / 12);
  const foodMonthly = round2(foodAnnual / 12);
  const specialMonthly = round2(specialAnnual / 12);

  const salaryRows = [
    ["Basic", basicMonthly, basicAnnual],
    ["House Rent Allowance", hraMonthly, hraAnnual],
    ["Dearness Allowance", daMonthly, daAnnual],
    ["Special Allowance", specialMonthly, specialAnnual],
    ["Food Allowance", foodMonthly, foodAnnual],
    ["Provident Fund (PF)", pfMonthly, pfAnnual],
  ];

  const totalMonthly = round2(annualCTC / 12);
  const totalAnnual = annualCTC;

  return (
    <>
      {/* ================= PAGE 1 ================= */}
      <A4Page headerSrc={company.header} footerSrc={company.footer}>
        <Box>
          <Typography align="right" mb={3}>
            {formatDate(data.issueDate)}
          </Typography>

          <Typography mb={1}>
            <strong>Name :</strong> {data.employeeName}
          </Typography>

          <Typography mb={3}>
            <strong>Subject :</strong>{" "}
            Letter of intent for continued services as{" "}
            <strong>{data.position}</strong>
          </Typography>

          <Typography mb={2}>Dear {firstName},</Typography>

          <Typography mb={3} textAlign="justify">
            We are pleased to confirm your continued services at the position of{" "}
            <strong>{data.position}</strong> with{" "}
            <strong>R P Business Solutions LLP</strong> with effective date{" "}
            <strong>{data.effectiveDate}</strong>, considering your performance
            and support towards the organization. If there is any change in the
            date of joining, changes can be taken under consideration.
          </Typography>

          <Typography mb={3} textAlign="justify">
            Your total Gross salary will be Rs.{" "}
            <strong>{formatCurrency(data.totalSalary)}</strong> per year.
          </Typography>

          <Typography mb={3} textAlign="justify">
            Subject to various deductions as per company and government policy.
            The roles and responsibilities and other terms and conditions of your
            employment will be specified in your letter of appointment. We welcome
            you to R P Business Solutions LLP family and hope it would be the
            beginning of a long and mutually beneficial association. Kindly
            acknowledge the duplicate copy of this letter as an acceptance of
            this offer.
          </Typography>

          <Typography mb={3}>For {company.name}</Typography>

          {/* Signature Block */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
            <Box>
              <Box sx={{ display: "flex", gap: 3 }}>
                {company?.signature && (
                  <img
                    src={company.signature}
                    alt="Signature"
                    style={{ height: 60 }}
                  />
                )}
                {company?.stamp && (
                  <img
                    src={company.stamp}
                    alt="Stamp"
                    style={{ height: 90 }}
                  />
                )}
              </Box>
              <Typography mt={1}>{company.hrName}</Typography>
              <Typography>HR Division</Typography>
            </Box>

            <Box minWidth="250px" sx={{ mt: 10 }}>
              <Typography>Signature: __________________</Typography>
              <Typography mt={2}>
                Candidate Name: {data.employeeName}
              </Typography>
            </Box>
          </Box>

          <Typography
            sx={{
              mt: 9,
              fontSize: "14px",
              fontWeight: 600,
              textAlign: "center",
              textDecoration: "underline",
            }}
          >
            Enclosures: Annexure A – Salary Structure
          </Typography>
        </Box>
      </A4Page>

      {/* ================= PAGE 2 ================= */}
      <A4Page headerSrc={company.header} footerSrc={company.footer}>
        <Typography align="center" fontWeight={600} mb={4}>
          Annexure A – Salary Structure
        </Typography>

        <Table
          sx={{
            width: "100%",
            border: "1px solid #000",
            "& td": {
              border: "1px solid #000",
              padding: "6px",
              fontSize: "14px",
            },
          }}
        >
          <TableBody>
            <TableRow sx={{ backgroundColor: "#ff0000" }}>
              <TableCell sx={{ color: "#fff" }}>
                <b>Salary Components</b>
              </TableCell>
              <TableCell align="right" sx={{ color: "#fff" }}>
                <b>Per month (Rs.)</b>
              </TableCell>
              <TableCell align="right" sx={{ color: "#fff" }}>
                <b>Per Annum (Rs.)</b>
              </TableCell>
            </TableRow>

            {salaryRows.map(([name, monthly, annual], i) => (
              <TableRow key={i}>
                <TableCell>{name}</TableCell>
                <TableCell align="right">
                  {formatCurrency(monthly)}
                </TableCell>
                <TableCell align="right">
                  {formatCurrency(annual)}
                </TableCell>
              </TableRow>
            ))}

            <TableRow sx={{ backgroundColor: "#ff0000" }}>
              <TableCell sx={{ color: "#fff" }}>
                <b>Total Monthly Gross Salary</b>
              </TableCell>
              <TableCell align="right" sx={{ color: "#fff" }}>
                <b>{formatCurrency(totalMonthly)}</b>
              </TableCell>
              <TableCell align="right" sx={{ color: "#fff" }}>
                <b>{formatCurrency(totalAnnual)}</b>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 12 }}>
            <Box>
              <Box sx={{ display: "flex", gap: 3 }}>
                {company?.signature && (
                  <img
                    src={company.signature}
                    alt="Signature"
                    style={{ height: 60 }}
                  />
                )}
                {company?.stamp && (
                  <img
                    src={company.stamp}
                    alt="Stamp"
                    style={{ height: 90 }}
                  />
                )}
              </Box>
              <Typography mt={1}>{company.hrName}</Typography>
              <Typography>HR Division</Typography>
            </Box>

            <Box minWidth="250px" sx={{ mt: 10 }}>
              <Typography>Signature: __________________</Typography>
              <Typography mt={2}>
                Candidate Name: {data.employeeName}
              </Typography>
            </Box>
          </Box>
      </A4Page>
    </>
  );
};

export default RPConfirmationLetter;
