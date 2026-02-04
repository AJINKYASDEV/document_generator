import React from "react";
import { Box, Table, TableBody, TableCell, TableRow, Typography,} from "@mui/material";

/* ---------- STYLES ---------- */
const cell = {
  border: "1px solid #000",
  padding: "6px",
  fontSize: "12px",
};

const bold = { fontWeight: "bold" };
const center = { textAlign: "center" };

/* ---------- UTILS ---------- */
const formatDate = (d) =>
  d ? new Date(d).toLocaleDateString("en-GB") : "";

const formatMonth = (m) =>
  m
    ? new Date(`${m}-01`).toLocaleDateString("en-US", { month: "long" })
    : "";

const money = (n) =>
  Number(n || 0).toLocaleString("en-IN", { minimumFractionDigits: 2 });

/* ---------- COMPONENT ---------- */
const QuickFullAndFinal = ({ company, data }) => {
  const totalDays = new Date(
    new Date(`${data.month}-01`).getFullYear(),
    new Date(`${data.month}-01`).getMonth() + 1,
    0
  ).getDate();

  const paidRatio = data.paidDays / totalDays;

  const basic = data.totalSalary * 0.4;
  const hra = data.totalSalary * 0.18;
  const conveyance = data.totalSalary * 0.12;
  const special = data.totalSalary * 0.16;
  const medical = data.totalSalary * 0.06;

  const earnings = [
    ["Basic Salary", basic],
    ["HRA", hra],
    ["Conveyance Allowance", conveyance],
    ["Medical Allowance", medical],
    ["Special Allowance", special],
  ];

  const earnedTotal = earnings.reduce(
    (sum, [, v]) => sum + v * paidRatio,
    0
  );

  const deductions = 2200;
  const netPay = earnedTotal - deductions + Number(data.leaveEncashment || 0);

  return (
    <Box
      sx={{
        width: "210mm",
        height: "297mm",
        background: "#fff",
        position: "relative",
        fontFamily: "Cambria, serif",
      }}
    >
      {/* HEADER */}
      <img src={company.header} width="100%" alt="header" />

      {/* CONTENT */}
      <Box sx={{ padding: "20mm" }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell colSpan={4} sx={{ ...cell, ...bold, ...center }}>
                Full & Final Settlement Statement
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={4} sx={{ ...cell, ...center }}>
                {company.name}
                <br />
                {company.address}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ ...cell, ...bold }}>Employee Name</TableCell>
              <TableCell sx={cell}>{data.employeeName}</TableCell>
              <TableCell sx={{ ...cell, ...bold }}>F&F Date</TableCell>
              <TableCell sx={cell}>{formatDate(data.ffDate)}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ ...cell, ...bold }}>Employee ID</TableCell>
              <TableCell sx={cell}>{data.employeeId}</TableCell>
              <TableCell sx={{ ...cell, ...bold }}>Joining Date</TableCell>
              <TableCell sx={cell}>{formatDate(data.doj)}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={2} sx={{ ...cell, ...bold }}>
                Salary Particulars
              </TableCell>
              <TableCell sx={{ ...cell, ...bold }}>For Month</TableCell>
              <TableCell sx={cell}>{formatMonth(data.month)}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ ...cell, ...bold }}>Total Days</TableCell>
              <TableCell sx={cell}>{totalDays}</TableCell>
              <TableCell sx={{ ...cell, ...bold }}>Paid Days</TableCell>
              <TableCell sx={cell}>{data.paidDays}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={2} sx={{ ...cell, ...bold }}>
                Earnings
              </TableCell>
              <TableCell sx={{ ...cell, ...bold }}>Actual</TableCell>
              <TableCell sx={{ ...cell, ...bold }}>Earned</TableCell>
            </TableRow>

            {earnings.map(([label, value]) => (
              <TableRow key={label}>
                <TableCell colSpan={2} sx={cell}>{label}</TableCell>
                <TableCell sx={cell}>{money(value)}</TableCell>
                <TableCell sx={cell}>{money(value * paidRatio)}</TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell colSpan={3} sx={{ ...cell, ...bold }}>
                Net Payable
              </TableCell>
              <TableCell sx={{ ...cell, ...bold }}>
                {money(netPay)}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={4} sx={cell}>
                Amount in Words: <b>{money(netPay)} Only</b>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ ...cell, ...center }}>
                Prepared By
              </TableCell>
              <TableCell sx={{ ...cell, ...center }}>
                <img src={company.stamp} height={40} alt="stamp" />
                <br />
                Verified By
              </TableCell>
              <TableCell colSpan={2} sx={{ ...cell, ...center }}>
                <img src={company.signature} height={35} alt="sign" />
                <br />
                Approved By
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default QuickFullAndFinal;
