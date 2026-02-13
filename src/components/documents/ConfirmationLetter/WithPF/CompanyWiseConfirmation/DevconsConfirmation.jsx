import React from "react";
import { Box, Typography, Table, TableBody, TableRow, TableCell } from "@mui/material";
import { formatCurrency } from "../../../../../utils/salaryCalculations";

const DevconsCombinedLetter = ({ company = {}, data = {} }) => {

  const round2 = (num) => Number(Number(num).toFixed(2));
  const firstName = data.employeeName?.split(" ")[0];

  /* ================= SALARY CALCULATION ================= */
  const annualCTC = round2(Number(data.newCTC || 0));

  const basicAnnual = round2(annualCTC * 0.40);
  const hraAnnual = round2(annualCTC * 0.18);
  const daAnnual = round2(annualCTC * 0.12);
  const specialAnnual = round2(annualCTC * 0.16);
  const foodAnnual = round2(annualCTC * 0.06);

  const usedAnnual =
    basicAnnual + hraAnnual + daAnnual + specialAnnual + foodAnnual;

  const miscAnnual = round2(annualCTC - usedAnnual);

  const basicMonthly = round2(basicAnnual / 12);
  const hraMonthly = round2(hraAnnual / 12);
  const daMonthly = round2(daAnnual / 12);
  const specialMonthly = round2(specialAnnual / 12);
  const foodMonthly = round2(foodAnnual / 12);
  const miscMonthly = round2(miscAnnual / 12);

  const totalMonthly =
    basicMonthly +
    hraMonthly +
    daMonthly +
    specialMonthly +
    foodMonthly +
    miscMonthly;

  const totalAnnual =
    basicAnnual +
    hraAnnual +
    daAnnual +
    specialAnnual +
    foodAnnual +
    miscAnnual;

    const numberToWords = (num = 0) => {
  if (!num) return "Zero Only";

  const a = [
    "", "One", "Two", "Three", "Four", "Five", "Six",
    "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve",
    "Thirteen", "Fourteen", "Fifteen", "Sixteen",
    "Seventeen", "Eighteen", "Nineteen"
  ];

  const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  const inWords = (n) => {
    if (n < 20) return a[n];
    if (n < 100) return b[Math.floor(n / 10)] + (n % 10 ? " " + a[n % 10] : "");
    if (n < 1000)
      return a[Math.floor(n / 100)] + " Hundred" + (n % 100 ? " " + inWords(n % 100) : "");
    if (n < 100000)
      return inWords(Math.floor(n / 1000)) + " Thousand" + (n % 1000 ? " " + inWords(n % 1000) : "");
    if (n < 10000000)
      return inWords(Math.floor(n / 100000)) + " Lakh" + (n % 100000 ? " " + inWords(n % 100000) : "");
    return inWords(Math.floor(n / 10000000)) + " Crore" +
      (n % 10000000 ? " " + inWords(n % 10000000) : "");
  };

  return `${inWords(Math.round(num))} Only`;
};


  return (
    <>
      {/* =====================================================
         PAGE 1 – LETTER
      ====================================================== */}
      <Box
        sx={{
          width: "210mm",
          minHeight: "297mm",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          fontFamily: `"Bahnschrift", "Segoe UI", Arial, sans-serif`,
          pageBreakAfter: "always",
        }}
      >
        {company?.headerImage && (
          <img src={company.headerImage} alt="Header" style={{ width: "100%" }} />
        )}

        <Box sx={{ px: "25mm", py: "22mm", flexGrow: 1, fontSize: "16px", lineHeight: 1.7 }}>

          <Typography mb={2}>
            <strong>Name :</strong> {data.employeeName}
          </Typography>

          <Typography mb={2}>
            <strong>Address :</strong> {data.address}
          </Typography>

          <Typography mb={3}>
            <strong>Subject :</strong>{" "}
            <u>Letter of intent for the continued services as a Software Test Engineer</u>
          </Typography>

          <Typography mb={3}>Dear {firstName},</Typography>

          <Typography mb={3} textAlign="justify">
            We are pleased to confirm your continued services at the position of
            Software Test Engineer with DEVCONS SOFTWARE SOLUTIONS PVT. LTD.
            with effective date {data.effectiveDate}. 
            considering your performance and support towards the organization.
            If there is any change in the date of joining, changes can be taken under consideration.

          </Typography>

          <Typography mb={3} textAlign="justify">
            Your total Gross salary will be Rs. {formatCurrency(data.totalSalary)} per year.
            
          </Typography>

          <Typography mb={3} textAlign="justify">
            Subject to various deductions as per companies and government policy.The roles and responsibilities and other terms and conditions of your employment will be Specified in your letter of appointment. We welcome you to R P BUSINESS SOLUTIONS LLP. Family and hope it would be the beginning of a long and mutually beneficial association. Kindly acknowledge the duplicate copy of this letter as an acceptance of this offer.
          </Typography>

          <Typography mb={6}>
            For DEVCONS SOFTWARE SOLUTIONS PVT. LTD.
          </Typography>

          {/* SIGNATURE SECTION */}
         <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
    }}
  >
    {/* LEFT SIDE (HR Signature + Stamp) */}
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
        {company?.signature && (
          <img
            src={company.signature}
            alt="HR Signature"
            style={{ height: 60 }}
          />
        )}
        {company?.stamp && (
          <img
            src={company.stamp}
            alt="Company Stamp"
            style={{ height: 80 }}
          />
        )}
      </Box>

      <Typography sx={{ mt: 1, fontSize: "14px" }}>
        Mayur Patil
      </Typography>
      <Typography sx={{ fontSize: "14px" }}>
        HR Relations Lead
      </Typography>
    </Box>

    {/* RIGHT SIDE (Candidate Signature Line) */}
    <Box sx={{ textAlign: "left", mt: 3 }}>
      <Typography sx={{ fontSize: "14px" }}>
        Signature : ______________________
      </Typography>
      <Typography sx={{ fontSize: "14px" }}>
        Candidate Name: {data.employeeName}
      </Typography>
    </Box>
  </Box>

  {/* ENCLOSURE CENTERED */}
  <Typography
    sx={{
      mt: 5,
      fontSize: "14px",
      fontWeight: 600,
      textAlign: "center",
      textDecoration: "underline",
    }}
  >
    Enclosures: Annexure A–salary Structure
  </Typography>

</Box>

        {company?.footerImage && (
          <img src={company.footerImage} alt="Footer" style={{ width: "100%" }} />
        )}
      </Box>

      {/* ======================================================
         PAGE 2 – ANNEXURE A
      ====================================================== */}
      <Box
        sx={{
          width: "210mm",
          minHeight: "297mm",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          fontFamily: `"Bahnschrift", "Segoe UI", Arial, sans-serif`,
        }}
      >
        {company?.headerImage && (
          <img src={company.headerImage} alt="Header" style={{ width: "100%" }} />
        )}

        <Box sx={{ px: "25mm", py: "20mm", flexGrow: 1 }}>

          <Typography
            align="center"
            fontWeight={600}
            mb={5}
            sx={{ textDecoration: "underline", fontSize: "17px" }}
          >
            Annexure A Salary Structure
          </Typography>

          <Table
            sx={{
              width: "100%",
              border: "1px solid #000",
              borderCollapse: "collapse",
              "& td": {
                border: "1px solid #000",
                padding: "6px 8px",
                fontSize: "15px",
              },
            }}
          >
            <TableBody>

              <TableRow sx={{ backgroundColor: "#f2b705" }}>
                <TableCell sx={{ fontWeight: 700 }}>Salary Components</TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="right">Per month (Rs.)</TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="right">Per Annum (Rs.)</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Basic</TableCell>
                <TableCell align="right">{formatCurrency(basicMonthly)}</TableCell>
                <TableCell align="right">{formatCurrency(basicAnnual)}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>House Rent Allowance</TableCell>
                <TableCell align="right">{formatCurrency(hraMonthly)}</TableCell>
                <TableCell align="right">{formatCurrency(hraAnnual)}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Dearness Allowance</TableCell>
                <TableCell align="right">{formatCurrency(daMonthly)}</TableCell>
                <TableCell align="right">{formatCurrency(daAnnual)}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Special Allowance</TableCell>
                <TableCell align="right">{formatCurrency(specialMonthly)}</TableCell>
                <TableCell align="right">{formatCurrency(specialAnnual)}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Food Allowance</TableCell>
                <TableCell align="right">{formatCurrency(foodMonthly)}</TableCell>
                <TableCell align="right">{formatCurrency(foodAnnual)}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>MISC Allowance</TableCell>
                <TableCell align="right">{formatCurrency(miscMonthly)}</TableCell>
                <TableCell align="right">{formatCurrency(miscAnnual)}</TableCell>
              </TableRow>

              <TableRow sx={{ backgroundColor: "#f2b705" }}>
                <TableCell sx={{ fontWeight: 700 }}>Total Monthly Gross Salary</TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="right">
                  {formatCurrency(totalMonthly)}
                </TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="right">
                  {formatCurrency(totalAnnual)}
                </TableCell>
              </TableRow>

            </TableBody>
          </Table>

        </Box>

        {company?.footerImage && (
          <img src={company.footerImage} alt="Footer" style={{ width: "100%" }} />
        )}
      </Box>
    </>
  );
};

export default DevconsCombinedLetter;


