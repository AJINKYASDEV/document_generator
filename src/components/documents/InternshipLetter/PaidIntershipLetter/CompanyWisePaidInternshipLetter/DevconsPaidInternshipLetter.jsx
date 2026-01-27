import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { formatCurrency } from "../../../../../utils/salaryCalculations";
import A4Page from "../../../../layout/A4Page";


const DevconsInternshipWithAnnexure = ({ company, data }) => {
  const firstName = data.employeeName?.split(" ")[0] || "";

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    });

  /* ================= SALARY LOGIC (SAME AS DevconsIncrement) ================= */

  const round2 = (num) => Number(num.toFixed(2));

  const annualCTC = round2(Number(data.stipend || 0));

  const basicAnnual = round2(annualCTC * 0.40);
  const hraAnnual = round2(annualCTC * 0.18);
  const daAnnual = round2(annualCTC * 0.12);
  const specialAnnual = round2(annualCTC * 0.16);
  const foodAnnual = round2(annualCTC * 0.06);

  const usedAnnual =
    basicAnnual +
    hraAnnual +
    daAnnual +
    specialAnnual +
    foodAnnual;

  const miscAnnual = round2(annualCTC - usedAnnual);

  const basicMonthly = round2(basicAnnual / 12);
  const hraMonthly = round2(hraAnnual / 12);
  const daMonthly = round2(daAnnual / 12);
  const specialMonthly = round2(specialAnnual / 12);
  const foodMonthly = round2(foodAnnual / 12);
  const miscMonthly = round2(miscAnnual / 12);

  const salaryComponents = [
    { name: "Basic", monthly: basicMonthly, annual: basicAnnual },
    { name: "House Rent Allowance", monthly: hraMonthly, annual: hraAnnual },
    { name: "Dearness Allowance", monthly: daMonthly, annual: daAnnual },
    { name: "Special Allowance", monthly: specialMonthly, annual: specialAnnual },
    { name: "Food Allowance", monthly: foodMonthly, annual: foodAnnual },
    { name: "Misc. Allowance", monthly: miscMonthly, annual: miscAnnual },
  ];

  const totalMonthly = round2(
    salaryComponents.reduce((sum, r) => sum + r.monthly, 0)
  );
  const totalAnnual = round2(
    salaryComponents.reduce((sum, r) => sum + r.annual, 0)
  );


  const numberToWords = (num) => {
    const a = [
      "", "One", "Two", "Three", "Four", "Five", "Six", "Seven",
      "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen",
      "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
    ];

    const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    const convert = (n) => {
      if (n < 20) return a[n];
      if (n < 100) return b[Math.floor(n / 10)] + (n % 10 ? " " + a[n % 10] : "");
      if (n < 1000)
        return a[Math.floor(n / 100)] + " Hundred" + (n % 100 ? " " + convert(n % 100) : "");
      if (n < 100000)
        return convert(Math.floor(n / 1000)) + " Thousand" + (n % 1000 ? " " + convert(n % 1000) : "");
      if (n < 10000000)
        return convert(Math.floor(n / 100000)) + " Lakh" + (n % 100000 ? " " + convert(n % 100000) : "");
      return "";
    };

    return convert(num) + " Only";
  };


  return (
    <>
      {/* ================= PAGE 1 – INTERNSHIP LETTER ================= */}
      <A4Page
        headerSrc={company.header}
        footerSrc={company.footer}
      // watermarkSrc={company.watermark}
      >



        <Box>
          <Typography align="right" mb={3}>
            {formatDate(data.issueDate)}
          </Typography>

          <Typography mb={1}>
            <strong>Name :</strong> {data.mrms} {data.employeeName}
          </Typography>

          <Typography mb={3}>
            <strong>Subject :</strong> Letter of intent for the Internship of position
            as <strong>{data.designation}</strong>
          </Typography>

          <Typography mb={2}>Dear {firstName},</Typography>

          <Typography mb={2} textAlign="justify">
            We are pleased to offer you the Internship on position as an{" "}
            <strong>{data.designation}</strong> with{" "}
            <strong>Devcons Software Solutions Pvt. Ltd.</strong> with effective date{" "}
            <strong>{formatDate(data.startDate)}</strong> considering your
            performance and support towards the organization.
          </Typography>

          <Typography mb={2} textAlign="justify">
            If there is any change in the date of joining, changes can be taken
            under consideration. Your total Gross salary will be Rs.{" "}
            <strong>
              {formatCurrency(annualCTC)} (
              {numberToWords(annualCTC)})
            </strong>{" "}
            per year.
          </Typography>


          <Typography mb={2} textAlign="justify">
            Subject to various deductions as per companies and government policy.
          </Typography>

          <Typography mb={2} textAlign="justify">
            We welcome you to <strong>Devcons Software Solutions Pvt. Ltd.</strong>
            family and hope it would be the beginning of a long and mutually
            beneficial association.
          </Typography>

          <Typography mb={4}>
            Kindly acknowledge the duplicate copy of this letter as an acceptance
            of this offer.
          </Typography>

          <Typography mb={3}>Yours Sincerely,</Typography>
          <Typography fontWeight={700} mb={2}>
            For DEVCONS SOFTWARE SOLUTIONS PVT. LTD.
          </Typography>

          {/* SIGNATURE BLOCK */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
            <Box>
              <Box sx={{ display: "flex", gap: 3, mb: 1 }}>
                {company?.signature && (
                  <img src={company.signature} alt="Signature" style={{ height: 60 }} />
                )}
                {company?.stamp && (
                  <img src={company.stamp} alt="Stamp" style={{ height: 90 }} />
                )}
              </Box>
              {/* <Typography fontWeight={600}>{company.hrName}</Typography> */}
              <Typography fontSize="16px"><b>HR Relations Lead</b></Typography>
            </Box>

            <Box minWidth="260px" mb={3}>
              <Box sx={{ display: "flex", mb: 2 }}>
                <Typography fontSize="16px" mr={1}>
                  Signature :
                </Typography>
                <Box sx={{ flexGrow: 1, borderBottom: "1px solid #000" }} />
              </Box>

              <Typography fontSize="16px">
                Candidate Name : {data.employeeName}
              </Typography>
            </Box>

          </Box>

          <Typography
            mt={4}
            fontSize="16px"
            textAlign="center"
            sx={{ textDecoration: "underline" }}
          >
            <b>Enclosures: Annexure A – Salary Structure</b>
          </Typography>

        </Box>



      </A4Page>

      {/* ================= PAGE 2 – ANNEXURE A (SALARY STRUCTURE) ================= */}
      <A4Page
        headerSrc={company.header}
        footerSrc={company.footer}
      // watermarkSrc={company.watermark}
      >

        <Box>
          <Typography align="center" fontWeight={600} mb={5} sx={{ textDecoration: "underline" }}>
            Annexure A – Salary Structure
          </Typography>

          <Table
            sx={{
              width: "100%",
              border: "1px solid #000",
              "& th, & td": {
                border: "1px solid #000",
                padding: "4px 6px",
                fontSize: "16px",
              },
            }}
          >
            <TableBody>
              <TableRow sx={{ backgroundColor: "#f2b705" }}>
                <TableCell><strong>Salary Components</strong></TableCell>
                <TableCell align="right"><strong>Per month (Rs.)</strong></TableCell>
                <TableCell align="right"><strong>Per Annum (Rs.)</strong></TableCell>
              </TableRow>

              {salaryComponents.map((row, i) => (
                <TableRow key={i}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align="right">{formatCurrency(row.monthly)}</TableCell>
                  <TableCell align="right">{formatCurrency(row.annual)}</TableCell>
                </TableRow>
              ))}

              <TableRow sx={{ backgroundColor: "#f2b705" }}>
                <TableCell><strong>Total Monthly Gross Salary</strong></TableCell>
                <TableCell align="right"><strong>{formatCurrency(totalMonthly)}</strong></TableCell>
                <TableCell align="right"><strong>{formatCurrency(totalAnnual)}</strong></TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 10 }}>
            <Box>
              <Box sx={{ display: "flex", gap: 3, mb: 1 }}>
                {company?.signature && (
                  <img src={company.signature} alt="Signature" style={{ height: 65 }} />
                )}
                {company?.stamp && (
                  <img src={company.stamp} alt="Stamp" style={{ height: 95 }} />
                )}
              </Box>
              {/* <Typography fontWeight={600}>{company.hrName}</Typography> */}
              <Typography fontSize="16px"><b>HR Relations Lead</b></Typography>
            </Box>

            <Box minWidth="260px" mb={3}>
              <Box sx={{ display: "flex", mb: 2 }}>
                <Typography fontSize="16px" mr={1}>
                  Signature :
                </Typography>
                <Box sx={{ flexGrow: 1, borderBottom: "1px solid #000" }} />
              </Box>

              <Typography fontSize="16px">
                Candidate Name : {data.employeeName}
              </Typography>
            </Box>

          </Box>
        </Box>



      </A4Page>
    </>
  );
};

export default DevconsInternshipWithAnnexure;
