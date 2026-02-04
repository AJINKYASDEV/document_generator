
import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";

import { formatCurrency, getProfessionalTax } from "../../../../../utils/salaryCalculations";

/* 🔢 Number to Words (Indian System) */
const numberToWords = (num = 0) => {
  if (!num) return "Zero Rupees Only";

  const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
  const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  const inWords = (n) => {
    if (n < 10) return ones[n];
    if (n < 20) return teens[n - 10];
    if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 ? " " + ones[n % 10] : "");
    if (n < 1000) return ones[Math.floor(n / 100)] + " Hundred" + (n % 100 ? " " + inWords(n % 100) : "");
    if (n < 100000) return inWords(Math.floor(n / 1000)) + " Thousand" + (n % 1000 ? " " + inWords(n % 1000) : "");
    if (n < 10000000) return inWords(Math.floor(n / 100000)) + " Lakh" + (n % 100000 ? " " + inWords(n % 100000) : "");
    return inWords(Math.floor(n / 10000000)) + " Crore";
  };

  return `${inWords(Math.round(num))} Rupees Only`;
};

const RPSalarySlip = ({ company = {}, data = {} }) => {
  /* ===== EMPLOYEE DETAILS ===== */
  const {
    employeeName = "-",
    employeeId = "-",
    gender = "-",
    department = "-",
    designation = "-",
    doj = "-",
    dob = "-",
    pan = "-",
    mode = "Bank Transfer",
    workdays = "-",
    month = "",
    totalSalary = 0,
    otherDeduction = 2000,
  } = data;

  const [year, monthNum] = month.split("-");
  const monthName = new Date(year, monthNum - 1).toLocaleString("en-IN", { month: "long" });
  const salaryMonth = `${monthName} ${year}`;

  /* ===== DEVCONS SALARY LOGIC (USED FOR RP) ===== */
  const grossSalary = Number(totalSalary);

  const basic = Math.round(grossSalary * 0.40);
  const hra = Math.round(grossSalary * 0.20);
  const conveyance = Math.round(grossSalary * 0.14);
  const food = Math.round(grossSalary * 0.04);
  const special = Math.round(grossSalary * 0.16);
  const others = Math.round(grossSalary * 0.06);

  const pt = getProfessionalTax(month, grossSalary);
  const totalEarning =
    basic + hra + conveyance + food + special + others;

  const totalDeduction = pt + Number(otherDeduction);
  const netPay = totalEarning - totalDeduction;

  return (
    <Box
      sx={{
        width: "210mm",
        minHeight: "297mm",
        backgroundColor: "#fff",
        fontFamily: `"Yu Gothic", "Segoe UI", Arial, sans-serif`,
        "& *": { fontSize: "14px" },
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* HEADER */}
      {company?.header && (
        <img src={company.header} alt="Header" style={{ width: "100%" }} />
      )}

      {/* CONTENT */}
      <Box sx={{ px: "15mm", py: "10mm", flexGrow: 1 }}>
        <Table
          sx={{
            width: "100%",
            border: "1px solid #000",
            borderCollapse: "collapse",
            "& td": { border: "1px solid #000", padding: "4px 6px" },
          }}
        >
          <TableBody>
            <TableRow>
              <TableCell colSpan={4} align="center" sx={{ fontWeight: 700, fontSize: "14px" }}>
                {company?.name || "R P BUSINESS SOLUTIONS LLP."}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={4} align="center" sx={{ fontWeight: 600 }}>
                {company?.address}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={4} align="center" sx={{ fontWeight: 600 }}>
                Salary Slip {salaryMonth}
              </TableCell>
            </TableRow>

            {/* EMPLOYEE DETAILS */}
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Employee Name</TableCell>
              <TableCell>{employeeName}</TableCell>
              <TableCell fontWeight={600}>Employee ID</TableCell>
              <TableCell>{employeeId}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Gender</TableCell>
              <TableCell>{gender}</TableCell>
              <TableCell fontWeight={600}>Department</TableCell>
              <TableCell>{department}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>DOJ</TableCell>
              <TableCell>{doj}</TableCell>
              <TableCell fontWeight={600}>Pan Number</TableCell>
              <TableCell>{pan}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Designation</TableCell>
              <TableCell>{designation}</TableCell>
              <TableCell fontWeight={600}>DOB</TableCell>
              <TableCell>{dob}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ fontWeight: 600, pb: 7 }}>Mode</TableCell>
              <TableCell sx={{  pb: 7 }}>{mode}</TableCell>
              <TableCell sx={{ fontWeight: 600, pb: 7 }}>Working days</TableCell>
              <TableCell sx={{  pb: 7 }}>{workdays}</TableCell>
            </TableRow>

            {/* EARNINGS HEADER */}
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: 600 }}>Earnings</TableCell>
              <TableCell align="center" sx={{ fontWeight: 600 }}>Amount</TableCell>
              <TableCell align="center" sx={{ fontWeight: 600 }}>Deductions</TableCell>
              <TableCell align="center" sx={{ fontWeight: 600 }}>Amount</TableCell>
            </TableRow>

            {/* EARNINGS */}
           {/* EARNINGS */}
<TableRow>
  <TableCell sx={{ fontWeight: 600 }}>BASIC</TableCell>
  <TableCell>{formatCurrency(basic)}</TableCell>
  <TableCell>PT</TableCell>
  <TableCell>{formatCurrency(pt)}</TableCell>
</TableRow>

<TableRow>
  <TableCell sx={{ fontWeight: 600 }}>HRA</TableCell>
  <TableCell>{formatCurrency(hra)}</TableCell>
  <TableCell>Other Deduction</TableCell>
  <TableCell>{formatCurrency(otherDeduction)}</TableCell>
</TableRow>

<TableRow>
  <TableCell sx={{ fontWeight: 600 }}>DEARNESS ALLOWANCE</TableCell>
  <TableCell>{formatCurrency(conveyance)}</TableCell>
  <TableCell />
  <TableCell />
</TableRow>

<TableRow>
  <TableCell sx={{ fontWeight: 600 }}>SPECIAL ALLOWANCE</TableCell>
  <TableCell>{formatCurrency(special)}</TableCell>
  <TableCell />
  <TableCell />
</TableRow>

<TableRow>
  <TableCell sx={{ fontWeight: 600 }}>FOOD ALLOWANCE</TableCell>
  <TableCell>{formatCurrency(food)}</TableCell>
  <TableCell />
  <TableCell />
</TableRow>

<TableRow>
  <TableCell sx={{ fontWeight: 600 }}>MISC ALLOWANCE</TableCell>
  <TableCell>{formatCurrency(others)}</TableCell>
  <TableCell />
  <TableCell />
</TableRow>


            {/* TOTAL */}
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Total</TableCell>
              <TableCell fontWeight={600}>{formatCurrency(totalEarning)}</TableCell>
              <TableCell fontWeight={600}>Total Deduction</TableCell>
              <TableCell fontWeight={600}>{formatCurrency(totalDeduction)}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Net Pay</TableCell>
              <TableCell fontWeight={600}>{formatCurrency(netPay)}</TableCell>
              <TableCell />
              <TableCell />
            </TableRow>

            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>In Words</TableCell>
              <TableCell colSpan={3}>{numberToWords(netPay)}</TableCell>
            </TableRow>

            {/* SIGNATURE */}
            <TableRow>
              <TableCell />
              <TableCell />
              <TableCell align="center">
                {company?.stamp && <img src={company.stamp} alt="Stamp" height={55} />}
              </TableCell>
              <TableCell align="center">
                {company?.signature && <img src={company.signature} alt="Signature" height={40} />}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>

      {/* FOOTER */}
      {company?.footer && (
        <img src={company.footer} alt="Footer" style={{ width: "100%" }} />
      )}
    </Box>
  );
};

export default RPSalarySlip;
