import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Divider,
} from "@mui/material";
import A4Page from "../../../layout/A4Page";

/* ================= COMMON STYLES ================= */

const tableCell = {
  border: "1px solid #000",
  fontSize: "12px",
  padding: "6px",
};

const centerBold = {
  ...tableCell,
  fontWeight: 700,
  textAlign: "center",
};

const boldCell = {
  ...tableCell,
  fontWeight: 700,
};

const rightCell = {
  ...tableCell,
  textAlign: "right",
};

const centerCell = {
  ...tableCell,
  textAlign: "center",
};

const headerBg = {
  backgroundColor: "#ffffff",
};

const subHeaderBg = {
  backgroundColor: "#ffffff",
};

const cell = {
  border: "1px solid #000",
  fontSize: "13px",
  padding: "4px 6px",
};

const right = { textAlign: "right" };

/* ================== UTILS ================== */
const formatDate = (d) =>
  d ? new Date(d).toLocaleDateString("en-GB") : "";

const formatMonth = (m) =>
  m ? new Date(`${m}-01`).toLocaleString("default", { month: "long" }) : "";

const formatAmt = (n) =>
  Number(n || 0).toLocaleString("en-IN", { minimumFractionDigits: 2 });

/* ================== NUMBER TO WORDS ================== */
const numberToWords = (num = 0) => {
  if (!num) return "Zero Only";

  const a = [
    "", "One", "Two", "Three", "Four", "Five", "Six",
    "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve",
    "Thirteen", "Fourteen", "Fifteen", "Sixteen",
    "Seventeen", "Eighteen", "Nineteen",
  ];
  const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  const inWords = (n) => {
    if (n < 20) return a[n];

    if (n < 100)
      return (
        b[Math.floor(n / 10)] +
        (n % 10 ? " " + a[n % 10] : "")
      );

    if (n < 1000)
      return (
        a[Math.floor(n / 100)] +
        " Hundred" +
        (n % 100 ? " " + inWords(n % 100) : "")
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

    return (
      inWords(Math.floor(n / 10000000)) +
      " Crore" +
      (n % 10000000 ? " " + inWords(n % 10000000) : "")
    );
  };

  return `${inWords(Math.round(num))} Only`;
};

/* ================= COMPONENT ================= */

const SmartSoftwareFullAndFinal = ({ company, data }) => {
  const totalDays = Number(data.workdays || ' ');
  const paidDays = Number(data.paiddays || 0);
  const ratio = paidDays / totalDays;

  /* ---------- PENTA SALARY LOGIC ---------- */
  const gross = Number(data.totalSalary || 0);

  const basic = +(gross * 0.4).toFixed(2);
  const hra = +(gross * 0.18).toFixed(2);
  const da = +(gross * 0.12).toFixed(2);
  const special = +(gross * 0.16).toFixed(2);
  const food = +(gross * 0.06).toFixed(2);
  const pfAllowance = +(gross - (basic + hra + da + special + food)).toFixed(2);

  const earned = (v) => +(v * ratio).toFixed(2);

  const totalActual =
    basic + hra + da + special + food + pfAllowance;

  const totalEarned =
    earned(basic) +
    earned(hra) +
    earned(da) +
    earned(special) +
    earned(food) +
    earned(pfAllowance);

  /* ---------- DEDUCTIONS ---------- */
  // const pf = 1800;
  const pt = 200;
  const others = 2000;
  const totalDeductions = pt + others;

  const netPay =
    totalEarned -
    totalDeductions +
    Number(data.leaveencashment || 0);

  return (
    <A4Page headerSrc={company.header} footerSrc={company.footer}>
      <Box mt={-6}>
        {/* ================= TITLE ================= */}
        <Table sx={{ borderCollapse: "collapse" }}>
          <TableBody>
            <TableRow>
              <TableCell sx={{ ...centerBold, ...headerBg }} colSpan={4}>
                Full & Final Settlement Statement
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ ...centerBold, ...headerBg }} colSpan={4}>
                SMART SOFTWARE SOLUTIONS PVT. LTD.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ ...centerCell, ...headerBg }} colSpan={4}>
                406 Changbhale Heights, Near Kalpataru Estate Phase III, Pimple Gurav, Pune 411 061.
              </TableCell>
            </TableRow>

            {/* ================= EMPLOYEE DETAILS ================= */}
            <TableRow>
              <TableCell sx={boldCell}>Name Of The Employee</TableCell>
              <TableCell sx={tableCell}>{data.employeeName}</TableCell>
              <TableCell sx={boldCell}>F & F Date</TableCell>
              <TableCell sx={tableCell}>{data.date}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={boldCell}>Employee ID</TableCell>
              <TableCell sx={tableCell}>{data.employeeId}</TableCell>
              <TableCell sx={boldCell}>Joining Date</TableCell>
              <TableCell sx={tableCell}>{data.doj}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={boldCell}>Designation</TableCell>
              <TableCell sx={tableCell}>{data.designation}</TableCell>
              <TableCell sx={boldCell}>Date of Resigning</TableCell>
              <TableCell sx={tableCell}>{data.dateofresignation}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={boldCell}>Department</TableCell>
              <TableCell sx={tableCell}>{data.department}</TableCell>
              <TableCell sx={boldCell}>Date of Leaving</TableCell>
              <TableCell sx={tableCell}>{data.dateofleaving}</TableCell>
            </TableRow>

            {/* ================= SALARY HEADER ================= */}
            <TableRow>
              <TableCell sx={{ ...centerBold, ...subHeaderBg }} colSpan={2}>
                Salary particulars
              </TableCell>
              <TableCell sx={{ ...centerBold, ...subHeaderBg }}>
                For the month
              </TableCell>
              <TableCell sx={{ ...centerBold, ...subHeaderBg }}>
                {formatMonth(data.month)}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={boldCell}>Total Day in the month</TableCell>
              <TableCell sx={centerCell}>{data.workdays}</TableCell>
              <TableCell sx={boldCell}>Paid days</TableCell>
              <TableCell sx={centerCell}>{data.paiddays}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={boldCell} colSpan={2}>Earnings</TableCell>
              <TableCell sx={{ ...centerCell, ...boldCell }}>Actual</TableCell>
              <TableCell sx={{ ...centerCell, ...boldCell }}>Earned</TableCell>
            </TableRow>

            {/* ================= EARNINGS ================= */}

            {[
              ["Basic", basic],
              ["HRA", hra],
              ["Dearness Allowance", da],
              ["Special Allowances", special],
              ["Food Allowances", food],
              ["Misc Allowances", pfAllowance],
            ].map(([label, val]) => (
              <TableRow key={label}>
                <TableCell colSpan={2} sx={cell}>{label}</TableCell>
                <TableCell sx={{ ...cell, ...centerCell }}>{formatAmt(val)}</TableCell>
                <TableCell sx={{ ...cell, ...centerCell }}>{formatAmt(earned(val))}</TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell sx={boldCell} colSpan={2}>Total</TableCell>
              <TableCell sx={{ ...centerCell }}>{formatAmt(totalActual)}</TableCell>
              <TableCell sx={{ ...centerCell }}>{formatAmt(totalEarned)}</TableCell>
            </TableRow>

            {/* ================= DEDUCTIONS ================= */}
            <TableRow>
              <TableCell sx={centerBold} colSpan={4}>
                Less Deductions (-)
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ ...tableCell, ...centerCell }} colSpan={2}>Professional Tax</TableCell>

              <TableCell sx={rightCell}></TableCell>
              <TableCell sx={rightCell}>200</TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ ...tableCell, ...centerCell }} colSpan={2}>Others</TableCell>

              <TableCell sx={{ ...tableCell, ...centerCell }}></TableCell>
              <TableCell sx={rightCell}>2,000</TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ ...tableCell, ...centerCell }} colSpan={2}>Total Deductions</TableCell>

              <TableCell sx={rightCell}></TableCell>
              <TableCell sx={rightCell}>2,200</TableCell>
            </TableRow>

            {/* ================= OTHER EARNINGS ================= */}
            <TableRow>
              <TableCell sx={centerBold} colSpan={4}>
                Other Earnings
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ ...tableCell, ...centerCell }} colSpan={2}>Leave encashment (Days)</TableCell>
              <TableCell sx={centerCell}>15</TableCell>

              <TableCell sx={rightCell}></TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ ...tableCell, ...centerCell }} colSpan={2}>Total</TableCell>

              <TableCell sx={rightCell}></TableCell>
              <TableCell sx={rightCell}>{formatAmt(totalEarned)}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ ...tableCell, ...centerCell }} colSpan={2}>Net Payable (Rs)</TableCell>

              <TableCell sx={rightCell}></TableCell>
              <TableCell sx={rightCell}>{formatAmt(netPay)}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={boldCell} colSpan={4}>
                <Box sx={{ display: "flex", justifyContent: "space-between", px: 2 }}>
                  <span>Amount in Words</span>
                  <span>{numberToWords(netPay)}</span>
                </Box>
              </TableCell>
            </TableRow>

            {/* ================= SIGNATURES ================= */}
            <TableRow>
              <TableCell sx={centerBold}></TableCell>
              <TableCell sx={centerBold}><img src={company.stamp} width="80px" height="80px" /></TableCell>
              <TableCell sx={centerBold} colSpan={2}><img src={company.signature} width="120px" height="60px" /></TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={centerCell}>Prepared By</TableCell>
              <TableCell sx={centerCell}>Verified By</TableCell>
              <TableCell sx={centerCell} colSpan={2}>
                Approved By
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </A4Page>
  );
};

export default SmartSoftwareFullAndFinal;
