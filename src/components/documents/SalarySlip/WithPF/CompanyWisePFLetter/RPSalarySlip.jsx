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
  if (!num) return "Zero Only";

  const a = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
    "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  const inWords = (n) => {
    if (n < 20) return a[n];
    if (n < 100) return b[Math.floor(n / 10)] + (n % 10 ? " " + a[n % 10] : "");
    if (n < 1000) return a[Math.floor(n / 100)] + " Hundred" + (n % 100 ? " " + inWords(n % 100) : "");
    if (n < 100000) return inWords(Math.floor(n / 1000)) + " Thousand" + (n % 1000 ? " " + inWords(n % 1000) : "");
    if (n < 10000000) return inWords(Math.floor(n / 100000)) + " Lakh" + (n % 100000 ? " " + inWords(n % 100000) : "");
    return inWords(Math.floor(n / 10000000)) + " Crore";
  };

  return `${inWords(Math.round(num))} Only`;
};

const RPSalarySlip = ({ company = {}, data = {} }) => {
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

  const gross = Number(totalSalary);

  const basic = Math.round(gross * 0.40);
  const hra = Math.round(gross * 0.20);
  const da = Math.round(gross * 0.14);
  const special = Math.round(gross * 0.16);
  const food = Math.round(gross * 0.04);
  const misc = Math.round(gross * 0.06);

  const pt = getProfessionalTax(month, gross);

  const totalEarning = basic + hra + da + special + food + misc;
  const totalDeduction = pt + Number(otherDeduction);
  const netPay = totalEarning - totalDeduction;

  return (
    <Box sx={{ width: "210mm", minHeight: "297mm", fontFamily: "Arial" }}>
      {company?.header && <img src={company.header} alt="" width="100%" />}

      <Box sx={{ p: 2 }}>
        <Table sx={{ border: "1px solid #000", "& td": { border: "1px solid #000", p: "4px" } }}>
          <TableBody>

            <TableRow>
              <TableCell colSpan={4} align="center" sx={{ fontWeight: 700 }}>
                {company.name}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={4} align="center">
                {company.address}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={4} align="center" sx={{ fontWeight: 600 }}>
                Salary Slip {monthName} {year}
              </TableCell>
            </TableRow>

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
              <TableCell>Pan Number</TableCell>
              <TableCell>{pan}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Designation</TableCell>
              <TableCell>{designation}</TableCell>
              <TableCell>DOB</TableCell>
              <TableCell>{dob}</TableCell>
            </TableRow>

            <TableRow sx={{ height: 55 }}>
              <TableCell>Mode</TableCell>
              <TableCell>{mode}</TableCell>
              <TableCell>Working days</TableCell>
              <TableCell>{workdays}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center">Earnings</TableCell>
              <TableCell align="center">Amount</TableCell>
              <TableCell align="center">Deductions</TableCell>
              <TableCell align="center">Amount</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>BASIC</TableCell>
              <TableCell>{formatCurrency(basic)}</TableCell>
              <TableCell>PF</TableCell>
              <TableCell>{formatCurrency(pt)}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>HRA</TableCell>
              <TableCell>{formatCurrency(hra)}</TableCell>
              <TableCell>PT</TableCell>
              <TableCell>{formatCurrency(otherDeduction)}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>DEARNESS ALLOWANCE</TableCell>
              <TableCell>{formatCurrency(da)}</TableCell>
              <TableCell />
              <TableCell />
            </TableRow>

            <TableRow>
              <TableCell>SPECIAL ALLOWANCE</TableCell>
              <TableCell>{formatCurrency(special)}</TableCell>
              <TableCell />
              <TableCell />
            </TableRow>

            <TableRow>
              <TableCell>FOOD ALLOWANCE</TableCell>
              <TableCell>{formatCurrency(food)}</TableCell>
              <TableCell />
              <TableCell />
            </TableRow>

            <TableRow>
              <TableCell>MISC ALLOWANCE</TableCell>
              <TableCell>{formatCurrency(misc)}</TableCell>
              <TableCell />
              <TableCell />
            </TableRow>

            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell>{formatCurrency(totalEarning)}</TableCell>
              <TableCell>Total Deduction</TableCell>
              <TableCell>{formatCurrency(totalDeduction)}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Net Pay</TableCell>
              <TableCell>{formatCurrency(netPay)}</TableCell>
              <TableCell />
              <TableCell />
            </TableRow>

            <TableRow>
              <TableCell>In Words</TableCell>
              <TableCell colSpan={3}>
                {numberToWords(netPay)}
              </TableCell>
            </TableRow>

            <TableRow sx={{ height: 80 }}>
              <TableCell colSpan={2} align="center">
                {company.stamp && <img src={company.stamp} height={55} alt="" />}
              </TableCell>
              <TableCell colSpan={2} align="center">
                {company.signature && <img src={company.signature} height={40} alt="" />}
              </TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </Box>

      {company?.footer && <img src={company.footer} alt="" width="100%" />}
    </Box>
  );
};

export default RPSalarySlip;
