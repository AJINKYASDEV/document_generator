 import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import A4Page from "../layout/A4Page";
import { formatCurrency, getProfessionalTax } from "../../utils/salaryCalculations";
import wattermark from "../../assets/images/SmartSoftware/Watermark.png";
import stamp from "../../assets/images/SmartSoftware/Stamp.png";
import sign from "../../assets/images/SmartSoftware/Sign.png";
import JDITSalarySlipTemplate from "./JDITSalarySlipTemplate";

/* 🔢 Utility — Convert number to words */
const numberToWords = (num) => {
  if (num === 0) return "Zero Rupees Only";
  const a = [
    "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
    "Sixteen", "Seventeen", "Eighteen", "Nineteen"
  ];
  const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  const inWords = (n) => {
    if (n < 20) return a[n];
    if (n < 100) return b[Math.floor(n / 10)] + (n % 10 ? " " + a[n % 10] : "");
    if (n < 1000)
      return a[Math.floor(n / 100)] + " Hundred" + (n % 100 ? " and " + inWords(n % 100) : "");
    if (n < 100000)
      return (
        inWords(Math.floor(n / 1000)) +
        " Thousand" +
        (n % 1000 ? " " + inWords(n % 1000) : "")
      );
    if (n < 10000000)
      return (
        inWords(Math.floor(n / 100000)) +
        " Lakh" +
        (n % 100000 ? " " + inWords(n % 100000) : "")
      );
    return "Value too large";
  };
  return inWords(num) + " Rupees Only";
};

const SalarySlipTemplate = ({ data, company }) => {
  if(company?.name === "JDIT Software Solutions Pvt. Ltd.") {
    return <JDITSalarySlipTemplate data={data} company={company} />;
  }
  
  // === Basic Info ===
  const name = data.employeeName || "Anagha Arun Kapse";
  const empId = data.employeeId || "SSS2104";
  const doj = data.doj || "05/01/2021";
  const gender = data.gender;
  const pan = data.pan || "ABCDE1234F";
  const dob = data.dob || "15/08/1995";
  const bankMode = data.mode || "HDFC Bank";
  const totalWorkdays = data.workdays || "30";
  const dept = data.department || "IT";
  const desg = data.designation || "Quality Analyst";
  // Convert "YYYY-MM" → "Month YY" (e.g. "2025-07" → "July 25")
  const month = (() => {
    if (!data.month) return "March 22"; // fallback

    const [year, monthNum] = data.month.split("-");
    const date = new Date(year, monthNum - 1); // JS months start at 0
    const monthName = date.toLocaleString("default", { month: "long" });
    const shortYear = year.slice(2);
    return `${monthName} ${shortYear}`;
  })();

  // === Total Salary ===
  const totalSalary = parseFloat(data.totalSalary || 35000); // default fallback

  // === Auto-calculated components (percentages of totalSalary) ===
  const basic = totalSalary * 0.4013;
  const hra = totalSalary * 0.1798;
  const conveyance = totalSalary * 0.1599;
  const food = totalSalary * 0.0797;
  const special = totalSalary * 0.1196;
  const others = totalSalary * 0.0597; // optional, can be removed if 0

  const pt = getProfessionalTax(data.month, totalSalary);
  const otherDed = parseFloat(data.otherDeduction || 2000);

  const totalEarning = basic + hra + conveyance + food + special + others;
  const totalDed = pt + otherDed;
  const net = totalEarning - totalDed;
  const netInWords = numberToWords(Math.round(net));

  return (
    <A4Page
      headerSrc={company?.header || company?.headerImage}
      footerSrc={company?.footer || company?.footerImage}
      watermarkSrc={company?.watermarkImage || company?.watermark || wattermark}
      company={company}
      contentTop="45mm"
      contentBottom="30mm"
    >
      {/* ✅ CENTERED WATERMARK */}
      <Box
        component="img"
        src={company?.watermarkImage || company?.watermark || wattermark}
        alt="Watermark"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "110mm",
          height: "50mm",
          opacity: 0.60,
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      {/* === MAIN TABLE === */}
      <TableContainer
        component={Paper}
        sx={{
          border: "1.5px solid black",
          borderRadius: 0,
          mt: "5mm", // ✅ Customizable margin top
          "& .MuiTableCell-root": {
            border: "1px solid black",
            fontSize: "11pt",
            padding: "6px 8px",
            verticalAlign: "middle",
          },
          boxShadow: "none",
        }}
      >
        <Table size="small">
          <TableBody>
            {/* === HEADER SECTION === */}
            <TableRow>
              <TableCell colSpan={4} sx={{ textAlign: "center", fontWeight: "bold" }}>
                {company.name}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                colSpan={4}
                sx={{
                  textAlign: "center",
                  borderBottom: "1px solid black",
                  fontWeight: "bold",
                }}
              >
                {company.address}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={4} sx={{ textAlign: "center", fontWeight: "bold" }}>
                Salary Slip {month}
              </TableCell>
            </TableRow>

            {/* === EMPLOYEE INFO === */}
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>Employee ID</TableCell>
              <TableCell>{empId}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", borderBottom: "none !important", paddingY: 1 }}>
                Gender
              </TableCell>
              <TableCell sx={{ borderBottom: "none !important", paddingY: 1 }}>{gender}</TableCell>
              <TableCell sx={{ borderBottom: "none !important", paddingY: 1 }}>Department</TableCell>
              <TableCell sx={{ borderBottom: "none !important", paddingY: 1 }}>{dept}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", borderTop: "none !important", paddingY: 1 }}>
                DOJ
              </TableCell>
              <TableCell sx={{ borderTop: "none !important", paddingY: 1 }}>{doj}</TableCell>
              <TableCell sx={{ borderTop: "none !important", paddingY: 1 }}>Pan Number</TableCell>
              <TableCell sx={{ borderTop: "none !important", paddingY: 1 }}>{pan}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Designation</TableCell>
              <TableCell>{desg}</TableCell>
              <TableCell>DOB</TableCell>
              <TableCell>{dob}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Mode</TableCell>
              <TableCell>{bankMode}</TableCell>
              <TableCell>Working days</TableCell>
              <TableCell>{totalWorkdays}</TableCell>
            </TableRow>

            {/* === SECTION HEADINGS === */}
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Earnings
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Amount
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Deductions
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Amount
              </TableCell>
            </TableRow>

            {/* === AUTO-CALCULATED BREAKDOWN === */}
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Basic Salary </TableCell>
              <TableCell align="right">{formatCurrency(basic)}</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>House Rent Allowance</TableCell>
              <TableCell align="right">{formatCurrency(hra)}</TableCell>
              <TableCell>PT</TableCell>
              <TableCell align="right">{formatCurrency(pt)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Conveyance Allowance</TableCell>
              <TableCell align="right">{formatCurrency(conveyance)}</TableCell>
              <TableCell>Other Deduction</TableCell>
              <TableCell align="right">{formatCurrency(otherDed)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Food Allowance</TableCell>
              <TableCell align="right">{formatCurrency(food)}</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Special Allowance</TableCell>
              <TableCell align="right">{formatCurrency(special)}</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Others</TableCell>
              <TableCell align="right">{formatCurrency(others)}</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>

            {/* === TOTALS === */}
            <TableRow sx={{ fontWeight: "bold" }}>
              <TableCell sx={{ fontWeight: "bold" }}>Total</TableCell>
              <TableCell align="right">{formatCurrency(totalEarning)}</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Total Deduction</TableCell>
              <TableCell align="right">{formatCurrency(totalDed)}</TableCell>
            </TableRow>

            {/* === NET PAY === */}
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Net Pay</TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                {formatCurrency(net)}
              </TableCell>
              <TableCell colSpan={2}></TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>In Words:</TableCell>
              <TableCell colSpan={3}>{netInWords}</TableCell>
            </TableRow>

            {/* === SIGNATURE AREA === */}
            <TableRow>
              <TableCell colSpan={2}></TableCell>
              <TableCell>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Box
                    component="img"
                    src={stamp}
                    alt="Stamp"
                    sx={{
                      width: 80,
                      height: 80,
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Box>
                  <Box
                    component="img"
                    src={sign}
                    alt="Signature"
                    sx={{
                      width: 120,
                      height: 60,
                      mb: 1,
                      objectFit: "contain",
                    }}
                  />
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Signature
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </A4Page>
  );
};

export default SalarySlipTemplate;
