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
import {
  formatCurrency,
  getProfessionalTax,
} from "../../utils/salaryCalculations";
import wattermark from "../../assets/images/SmartSoftware/Watermark.png";
import stamp from "../../assets/images/SmartSoftware/Stamp.png";
import sign from "../../assets/images/SmartSoftware/Sign.png";

/* 🔢 Utility — Convert number to words */
const numberToWords = (num) => {
  if (num === 0) return "Zero Rupees Only";
  const a = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const b = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  const inWords = (n) => {
    if (n < 20) return a[n];
    if (n < 100) return b[Math.floor(n / 10)] + (n % 10 ? " " + a[n % 10] : "");
    if (n < 1000)
      return (
        a[Math.floor(n / 100)] +
        " Hundred" +
        (n % 100 ? " and " + inWords(n % 100) : "")
      );
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

const JDITSalarySlipTemplate = ({ data, company }) => {
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
  const special = totalSalary * 0.1196;
  const others = totalSalary * 0.1394; // optional, can be removed if 0

  const pt = getProfessionalTax(data.month, totalSalary);
  const otherDed = parseFloat(data.otherDeduction || 2000);

  const totalEarning = basic + hra + conveyance + special + others;
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
          opacity: 0.35,
          filter: "brightness(0.35) contrast(1.7)",
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
              <TableCell
                colSpan={4}
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "16pt",
                }}
              >
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
                  fontSize: "8pt",
                }}
              >
                {company.address}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                colSpan={4}
                sx={{ textAlign: "center", fontWeight: "bold", fontSize: "8pt" }}
              >
                Salary Slip {month}
              </TableCell>
            </TableRow>

            {/* === EMPLOYEE INFO === */}
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", fontSize: "8pt" }}>Name</TableCell>
              <TableCell sx={{ fontSize: "8pt" }}>{name}</TableCell>
              <TableCell sx={{ fontSize: "8pt" }}>Employee ID</TableCell>
              <TableCell sx={{ fontSize: "8pt" }}>{empId}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  borderBottom: "none !important",
                  paddingY: 1,
                  fontSize: "8pt",
                }}
              >
                Gender
              </TableCell>
              <TableCell sx={{ borderBottom: "none !important", fontSize: "8pt" }}>{gender}</TableCell>
              <TableCell sx={{ borderBottom: "none !important", fontSize: "8pt" }}>Department</TableCell>
              <TableCell sx={{ borderBottom: "none !important", fontSize: "8pt" }}>{dept}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  borderTop: "none !important",
                  paddingY: 1,
                  fontSize: "8pt",
                }}
              >
                DOJ
              </TableCell>
              <TableCell sx={{ borderTop: "none !important", fontSize: "8pt" }}>{doj}</TableCell>
              <TableCell sx={{ borderTop: "none !important", fontSize: "8pt" }}>Pan Number</TableCell>
              <TableCell sx={{ borderTop: "none !important", fontSize: "8pt" }}>{pan}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", fontSize: "8pt" }}>Designation</TableCell>
              <TableCell sx={{ fontSize: "8pt" }}>{desg}</TableCell>
              <TableCell sx={{ fontSize: "8pt" }}>DOB</TableCell>
              <TableCell sx={{ fontSize: "8pt" }}>{dob}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", fontSize: "8pt" }}>Mode</TableCell>
              <TableCell sx={{ fontSize: "8pt" }}>{bankMode}</TableCell>
              <TableCell sx={{ fontSize: "8pt" }}>Working days</TableCell>
              <TableCell sx={{ fontSize: "8pt" }}>{totalWorkdays}</TableCell>
            </TableRow>

            {/* === SECTION HEADINGS === */}
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "8pt" }}>Earnings</TableCell>
              <TableCell colSpan={3} align="center" sx={{ fontWeight: "bold", fontSize: "8pt" }}>Amount</TableCell>
            </TableRow>

            {/* === AUTO-CALCULATED BREAKDOWN === */}
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", fontSize: "8pt" }}>Basic Salary </TableCell>
              <TableCell sx={{ fontSize: "8pt" }} colSpan={3} align="center">{formatCurrency(basic)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", fontSize: "8pt" }}>House Rent Allowance</TableCell>
              <TableCell sx={{ fontSize: "8pt" }} colSpan={3} align="center">{formatCurrency(hra)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", fontSize: "8pt" }}>Conveyance Allowance</TableCell>
              <TableCell sx={{ fontSize: "8pt" }} colSpan={3} align="center">{formatCurrency(conveyance)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", fontSize: "8pt" }}>Special Allowance</TableCell>
              <TableCell sx={{ fontSize: "8pt" }} colSpan={3} align="center">{formatCurrency(special)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", fontSize: "8pt" }}>Others</TableCell>
              <TableCell sx={{ fontSize: "8pt" }} colSpan={3} align="center">
                {formatCurrency(others)}
              </TableCell>
            </TableRow>

            {/* === TOTALS === */}
            <TableRow sx={{ fontWeight: "bold" }}>
              <TableCell sx={{ fontWeight: "bold", fontSize: "8pt" }}>Total</TableCell>
              <TableCell colSpan={3} align="center" sx={{ fontSize: "8pt" }}>
                {formatCurrency(totalEarning)}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ fontSize: "8pt" }} colSpan={4}></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "8pt" }}>
                Deduction
              </TableCell>
              <TableCell colSpan={3} align="center" sx={{ fontWeight: "bold", fontSize: "8pt" }}>
                Amount
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", fontSize: "8pt" }}>PT</TableCell>
              <TableCell sx={{ fontSize: "8pt" }} colSpan={3} align="center">
                {formatCurrency(pt)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", fontSize: "8pt" }}>Other Deduction</TableCell>
              <TableCell sx={{ fontSize: "8pt" }} colSpan={3} align="center">
                {formatCurrency(otherDed)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", fontSize: "8pt" }}>Total Deduction</TableCell>
              <TableCell colSpan={3} align="center" sx={{ fontSize: "8pt" }}>
                {formatCurrency(totalDed)}
              </TableCell>
            </TableRow>

            {/* === NET PAY === */}
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", fontSize: "8pt" }}>Net Pay</TableCell>
              <TableCell colSpan={3} align="center" sx={{ fontSize: "8pt" }}>
                {formatCurrency(net)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", fontSize: "8pt" }}>In Words:</TableCell>
              <TableCell colSpan={3} sx={{ fontSize: "8pt" }}>{netInWords}</TableCell>
            </TableRow>

            {/* === SIGNATURE AREA === */}
            <TableRow>
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
              <TableCell colSpan={2}></TableCell>
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
      <Typography sx={{ fontSize: "6pt", mt: 2 }}>
        1.Please note that all information regarding remuneration is
        confidential and should not be disclosed.
      </Typography>
      <Typography sx={{ fontSize: "6pt" }}>
        2.TDS,PF,LWF, and ESIC or any other statutory liabilities (if any)
        falling within your salary structure, would be liable for deduction as
        per the statutory norms.{" "}
      </Typography>
      <Typography sx={{ fontSize: "6pt" }}>
        3.Gratuity will be paid out to the employee as per the payment of
        Gratuity Act,1972.
      </Typography>
      <Typography sx={{ fontSize: "6pt" }}>
        4.The Employee will be paid monthly/quarterly/yearly allowances/PLI
        /Bonus (if any) only if he/she remains in the service of the company at
        the end of that period.
      </Typography>
      <Typography sx={{ fontSize: "6pt" }}>
        5.Any incentive/allowance you earn during the service will be added to
        the CTC and is subject to Income Tax regulations and other laws
        applicable from time to time.
      </Typography>
      <Typography sx={{ fontSize: "6pt" }}>
        6.Medical insurance policy valued Rs.12,000/-to be submitted within 30
        days of joining, if failed then the same value will be deducted from the
        CTC as per the JDITBS policy.
      </Typography>
      <Typography sx={{ fontSize: "6pt" }}>
        7.JDIT Business Solutions may review at any time and/or restructure the
        compensation package.
      </Typography>
    </A4Page>
  );
};

export default JDITSalarySlipTemplate;
