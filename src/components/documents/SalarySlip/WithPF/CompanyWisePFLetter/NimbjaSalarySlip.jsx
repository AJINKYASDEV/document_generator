import React from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import A4Page from "../../../../layout/A4Page";
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

const DevconsSalarySlip = ({ company = {}, data = {} }) => {
  const round2 = (n) => Number(n.toFixed(2));

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
    workdays = "",
    month = "2025-02",
    totalSalary = 0,
    otherDeduction = 2000,
    bankName = "Union Bank",
    accountNo = "-",
  } = data;

  const [year, monthNum] = month.split("-");
  const salaryMonth = `${new Date(year, monthNum - 1).toLocaleString("en-IN", { month: "long" })} ${year}`;

  /* Salary breakup */
  const monthlyGross = round2(totalSalary);
  const basic = round2(monthlyGross * 0.4);
  const hra = round2(monthlyGross * 0.18);
  const da = round2(monthlyGross * 0.12);
  const special = round2(monthlyGross * 0.16);
  const food = round2(monthlyGross * 0.06);
  const misc = round2(monthlyGross * 0.08);

  const totalEarning = basic + hra + da + special + food + misc;
  const pt = getProfessionalTax(month, totalEarning);
  const totalDeduction = round2(pt + Number(otherDeduction));
  const netPay = round2(totalEarning - totalDeduction);

  return (
    <A4Page headerSrc={company.header} footerSrc={company.footer} watermarkSrc={company.watermark}>
      <TableContainer
        component={Paper}
        sx={{
          border: "1.5px solid black",
          borderRadius: 0,
          boxShadow: "none",
          mt: 2,
          "& .MuiTableCell-root": {
            border: "1px solid black",
            fontSize: "11pt",
            padding: "6px 8px",
          },
        }}
      >
        <Table size="small">
          <TableBody>

            {/* HEADER */}
            <TableRow>
              <TableCell colSpan={4} align="center" sx={{ fontWeight: "bold", fontSize: "14pt" }}>
                {company.name}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={4} align="center">{company.address}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={4} align="center" sx={{ fontWeight: "bold" }}>
                Salary Slip {salaryMonth}
              </TableCell>
            </TableRow>

            {/* EMP DETAILS */}
            <TableRow>
              <TableCell>Employee Name</TableCell>
              <TableCell>{employeeName}</TableCell>
              <TableCell>Employee ID</TableCell>
              <TableCell>{employeeId}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Gender</TableCell>
              <TableCell>{gender}</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>{department}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>DOJ</TableCell>
              <TableCell>{doj}</TableCell>
              <TableCell>PAN Number</TableCell>
              <TableCell>{pan}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Designation</TableCell>
              <TableCell>{designation}</TableCell>
              <TableCell>DOB</TableCell>
              <TableCell>{dob}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Mode</TableCell>
              <TableCell>{mode}</TableCell>
              <TableCell>Working Days</TableCell>
              <TableCell>{workdays}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Of India</TableCell>
              <TableCell>{bankName}</TableCell>
              <TableCell />
              <TableCell />
            </TableRow>

            <TableRow>
              <TableCell>Bank Account No.</TableCell>
              <TableCell>{accountNo}</TableCell>
              <TableCell />
              <TableCell />
            </TableRow>

            {/* EARNINGS HEADER */}
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>Earnings</TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>Amount</TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>Deductions</TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>Amount</TableCell>
            </TableRow>

            {/* EARNINGS */}
            <TableRow>
              <TableCell>BASIC</TableCell>
              <TableCell align="right">{formatCurrency(basic)}</TableCell>
              <TableCell>PT</TableCell>
              <TableCell align="right">{formatCurrency(pt)}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>HRA</TableCell>
              <TableCell align="right">{formatCurrency(hra)}</TableCell>
              <TableCell>Other Deduction</TableCell>
              <TableCell align="right">{formatCurrency(otherDeduction)}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>DEARNESS ALLOWANCE</TableCell>
              <TableCell align="right">{formatCurrency(da)}</TableCell>
              <TableCell />
              <TableCell />
            </TableRow>

            <TableRow>
              <TableCell>SPECIAL ALLOWANCE</TableCell>
              <TableCell align="right">{formatCurrency(special)}</TableCell>
              <TableCell />
              <TableCell />
            </TableRow>

            <TableRow>
              <TableCell>FOOD ALLOWANCE</TableCell>
              <TableCell align="right">{formatCurrency(food)}</TableCell>
              <TableCell />
              <TableCell />
            </TableRow>

            <TableRow>
              <TableCell>MISC ALLOWANCE</TableCell>
              <TableCell align="right">{formatCurrency(misc)}</TableCell>
              <TableCell />
              <TableCell />
            </TableRow>

            {/* TOTAL */}
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Total</TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>{formatCurrency(totalEarning)}</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Total Deduction</TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>{formatCurrency(totalDeduction)}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Net Pay</TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>{formatCurrency(netPay)}</TableCell>
              <TableCell />
              <TableCell />
            </TableRow>

            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>In Words</TableCell>
              <TableCell colSpan={3}>{numberToWords(netPay)}</TableCell>
            </TableRow>

            {/* SIGNATURE */}
            <TableRow>
              <TableCell />
              <TableCell />
              <TableCell align="center">
                {company?.stamp && <img src={company.stamp} height={55} alt="Stamp" />}
              </TableCell>
              <TableCell align="center">
                {company?.signature && <img src={company.signature} height={40} alt="Signature" />}
                <Typography fontWeight="bold">Signature</Typography>
              </TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </TableContainer>
    </A4Page>
  );
};

export default DevconsSalarySlip;
