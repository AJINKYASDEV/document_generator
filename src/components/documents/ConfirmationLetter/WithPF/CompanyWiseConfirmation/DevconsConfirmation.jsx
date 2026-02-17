// import React from "react";
// import { Box, Typography, Table, TableBody, TableRow, TableCell } from "@mui/material";
// import { formatCurrency } from "../../../../../utils/salaryCalculations";

// const DevconsConfirmationLetter = ({ company = {}, data = {} }) => {

//   const round2 = (num) => Number(Number(num).toFixed(2));
//   const firstName = data.employeeName?.split(" ")[0];

  

//   /* ================= SALARY CALCULATION ================= */

// const annualCTC = round2(Number(data.totalSalary || 0));

// const basicAnnual = round2(annualCTC * 0.34);
// const hraAnnual = round2(annualCTC * 0.20);
// const daAnnual = round2(annualCTC * 0.035);
// const specialAnnual = round2(annualCTC * 0.345);
// const foodAnnual = round2(annualCTC * 0.06);

// const usedAnnual =
//   basicAnnual +
//   hraAnnual +
//   daAnnual +
//   specialAnnual +
//   foodAnnual;

// const miscAnnual = round2(annualCTC - usedAnnual);

// // Monthly
// const basicMonthly = round2(basicAnnual / 12);
// const hraMonthly = round2(hraAnnual / 12);
// const daMonthly = round2(daAnnual / 12);
// const specialMonthly = round2(specialAnnual / 12);
// const foodMonthly = round2(foodAnnual / 12);
// const miscMonthly = round2(miscAnnual / 12);

// // Totals
// const totalMonthly = round2(
//   basicMonthly +
//     hraMonthly +
//     daMonthly +
//     specialMonthly +
//     foodMonthly +
//     miscMonthly
// );

// const totalAnnual = round2(
//   basicAnnual +
//     hraAnnual +
//     daAnnual +
//     specialAnnual +
//     foodAnnual +
//     miscAnnual
// );

  

//     const numberToWords = (num = 0) => {
//   if (!num) return "Zero Only";

//   const a = [
//     "", "One", "Two", "Three", "Four", "Five", "Six",
//     "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve",
//     "Thirteen", "Fourteen", "Fifteen", "Sixteen",
//     "Seventeen", "Eighteen", "Nineteen"
//   ];

//   const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

//   const inWords = (n) => {
//     if (n < 20) return a[n];
//     if (n < 100) return b[Math.floor(n / 10)] + (n % 10 ? " " + a[n % 10] : "");
//     if (n < 1000)
//       return a[Math.floor(n / 100)] + " Hundred" + (n % 100 ? " " + inWords(n % 100) : "");
//     if (n < 100000)
//       return inWords(Math.floor(n / 1000)) + " Thousand" + (n % 1000 ? " " + inWords(n % 1000) : "");
//     if (n < 10000000)
//       return inWords(Math.floor(n / 100000)) + " Lakh" + (n % 100000 ? " " + inWords(n % 100000) : "");
//     return inWords(Math.floor(n / 10000000)) + " Crore" +
//       (n % 10000000 ? " " + inWords(n % 10000000) : "");
//   };

//   return `${inWords(Math.round(num))} Only`;
// };


// const salaryRows = [
//   ["Basic", basicMonthly, basicAnnual],
//   ["House Rent Allowance", hraMonthly, hraAnnual],
//   ["Dearness Allowance", daMonthly, daAnnual],
//   ["Special Allowance", specialMonthly, specialAnnual],
//   ["Food Allowance", foodMonthly, foodAnnual],
//   ["Misc. Allowance", miscMonthly, miscAnnual],
// ];



//   return (
//     <>
//       {/* =====================================================
//          PAGE 1 – LETTER
//       ====================================================== */}
//       <Box
//         sx={{
//           width: "210mm",
//           minHeight: "297mm",
//           backgroundColor: "#fff",
//           display: "flex",
//           flexDirection: "column",
//           fontFamily: `"Bahnschrift", "Segoe UI", Arial, sans-serif`,
//           pageBreakAfter: "always",
//         }}
//       >
//         {company?.headerImage && (
//           <img src={company.headerImage} alt="Header" style={{ width: "100%" }} />
//         )}

//         <Box sx={{ px: "25mm", py: "22mm", flexGrow: 1, fontSize: "16px", lineHeight: 1.7 }}>

//           <Typography mb={2}>
//             <strong>Name :</strong> {data.employeeName}
//           </Typography>

//           <Typography mb={2}>
//             <strong>Address :</strong> {data.address}
//           </Typography>

//           <Typography mb={3}>
//             <strong>Subject :</strong>{" "}
//             <u>Letter of intent for the continued services as a Software Test Engineer</u>
//           </Typography>

//           <Typography mb={3}>Dear {firstName},</Typography>

//           <Typography mb={3} textAlign="justify">
//             We are pleased to confirm your continued services at the position of
//             Software Test Engineer with DEVCONS SOFTWARE SOLUTIONS PVT. LTD.
//             with effective date {data.effectiveDate}. 
//             considering your performance and support towards the organization.
//             If there is any change in the date of joining, changes can be taken under consideration.

//           </Typography>

//           <Typography mb={3} textAlign="justify">
//             Your total Gross salary will be Rs. {formatCurrency(data.totalSalary)} per year.
            
//           </Typography>

//           <Typography mb={3} textAlign="justify">
//             Subject to various deductions as per companies and government policy.The roles and responsibilities and other terms and conditions of your employment will be Specified in your letter of appointment. We welcome you to R P BUSINESS SOLUTIONS LLP. Family and hope it would be the beginning of a long and mutually beneficial association. Kindly acknowledge the duplicate copy of this letter as an acceptance of this offer.
//           </Typography>

//           <Typography mb={6}>
//             For DEVCONS SOFTWARE SOLUTIONS PVT. LTD.
//           </Typography>

//           {/* SIGNATURE SECTION */}
//          <Box
//     sx={{
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "flex-start",
//     }}
//   >
//     {/* LEFT SIDE (HR Signature + Stamp) */}
//     <Box>
//       <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
//         {company?.signature && (
//           <img
//             src={company.signature}
//             alt="HR Signature"
//             style={{ height: 60 }}
//           />
//         )}
//         {company?.stamp && (
//           <img
//             src={company.stamp}
//             alt="Company Stamp"
//             style={{ height: 80 }}
//           />
//         )}
//       </Box>

//       <Typography sx={{ mt: 1, fontSize: "14px" }}>
//         Mayur Patil
//       </Typography>
//       <Typography sx={{ fontSize: "14px" }}>
//         HR Relations Lead
//       </Typography>
//     </Box>

//     {/* RIGHT SIDE (Candidate Signature Line) */}
//     <Box sx={{ textAlign: "left", mt: 11 }}>
//       <Typography sx={{ fontSize: "14px" }}>
//         Signature : ______________________
//       </Typography>
//       <Typography sx={{ fontSize: "14px" }}>
//         Candidate Name: {data.employeeName}
//       </Typography>
//     </Box>
//   </Box>

//   {/* ENCLOSURE CENTERED */}
//   <Typography
//     sx={{
//       mt: 5,
//       fontSize: "14px",
//       fontWeight: 600,
//       textAlign: "center",
//       textDecoration: "underline",
//     }}
//   >
//     Enclosures: Annexure A–salary Structure
//   </Typography>

// </Box>

//         {company?.footerImage && (
//           <img src={company.footerImage} alt="Footer" style={{ width: "100%" }} />
//         )}
//       </Box>

//       {/* ======================================================
//          PAGE 2 – ANNEXURE A
//       ====================================================== */}
//       <Box
//         sx={{
//           width: "210mm",
//           minHeight: "297mm",
//           backgroundColor: "#fff",
//           display: "flex",
//           flexDirection: "column",
//           fontFamily: `"Bahnschrift", "Segoe UI", Arial, sans-serif`,
//         }}
//       >
//         {company?.headerImage && (
//           <img src={company.headerImage} alt="Header" style={{ width: "100%" }} />
//         )}

//         <Box sx={{ px: "25mm", py: "20mm", flexGrow: 1 }}>

//           <Typography
//             align="center"
//             fontWeight={600}
//             mb={5}
//             sx={{ textDecoration: "underline", fontSize: "17px" }}
//           >
//             Annexure A Salary Structure
//           </Typography>

//           <Table
//             sx={{
//               width: "100%",
//               border: "1px solid #000",
//               borderCollapse: "collapse",
//               "& td": {
//                 border: "1px solid #000",
//                 padding: "6px 8px",
//                 fontSize: "15px",
//               },
//             }}
//           >
//            <TableBody>
//   {/* Header Row */}
//   <TableRow sx={{ backgroundColor: "#f2b705" }}>
//     <TableCell sx={{ fontWeight: 700 }}>
//       Salary Components
//     </TableCell>
//     <TableCell sx={{ fontWeight: 700 }} align="right">
//       Per month (Rs.)
//     </TableCell>
//     <TableCell sx={{ fontWeight: 700 }} align="right">
//       Per Annum (Rs.)
//     </TableCell>
//   </TableRow>

//   {/* Dynamic Rows */}
//   {salaryRows.map(([name, monthly, annual], index) => (
//     <TableRow key={index}>
//       <TableCell>{name}</TableCell>
//       <TableCell align="right">
//         {formatCurrency(monthly)}
//       </TableCell>
//       <TableCell align="right">
//         {formatCurrency(annual)}
//       </TableCell>
//     </TableRow>
//   ))}

//   {/* Total Row */}
//   <TableRow sx={{ backgroundColor: "#f2b705" }}>
//     <TableCell sx={{ fontWeight: 700 }}>
//       Total Monthly Gross Salary
//     </TableCell>
//     <TableCell sx={{ fontWeight: 700 }} align="right">
//       {formatCurrency(totalMonthly)}
//     </TableCell>
//     <TableCell sx={{ fontWeight: 700 }} align="right">
//       {formatCurrency(totalAnnual)}
//     </TableCell>
//   </TableRow>
// </TableBody>

//           </Table>

//            {/* SIGNATURE SECTION */}
//          <Box
//     sx={{
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "flex-start",
//       mt:10,
//     }}
//   >
//     {/* LEFT SIDE (HR Signature + Stamp) */}
//     <Box>
//       <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
//         {company?.signature && (
//           <img
//             src={company.signature}
//             alt="HR Signature"
//             style={{ height: 60 }}
//           />
//         )}
//         {company?.stamp && (
//           <img
//             src={company.stamp}
//             alt="Company Stamp"
//             style={{ height: 80 }}
//           />
//         )}
//       </Box>

//       <Typography sx={{ mt: 1, fontSize: "15px" }}>
//         Mayur Patil
//       </Typography>
//       <Typography sx={{ fontSize: "15px" }}>
//         HR Relations Lead
//       </Typography>
//     </Box>

//     {/* RIGHT SIDE (Candidate Signature Line) */}
//     <Box sx={{ textAlign: "left", mt: 10 }}>
//       <Typography sx={{ fontSize: "15px" }}>
//         Signature : ______________________
//       </Typography>
//       <Typography sx={{ fontSize: "15px" }}>
//         Candidate Name: {data.employeeName}
//       </Typography>
//     </Box>
//   </Box>

//         </Box>

//         {company?.footerImage && (
//           <img src={company.footerImage} alt="Footer" style={{ width: "100%" }} />
//         )}
//       </Box>
//     </>
//   );
// };

// export default DevconsConfirmationLetter;

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

const DevconsConfirmationLetter = ({ company = {}, data = {} }) => {
  const firstName = data.employeeName?.split(" ")[0] || "";

  const formatDate = (date) =>
    date
      ? new Date(date).toLocaleDateString("en-US", {
          month: "long",
          day: "2-digit",
          year: "numeric",
        })
      : "";

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

}

  /* ================= SALARY LOGIC ================= */

  const round0 = (num) => Math.round(num);

// ================= MONTHLY CTC =================
const monthlyCTC = round0(Number(data.totalSalary || 0));

// ================= UPDATED PERCENTAGES =================
const basicMonthly = round0(monthlyCTC * 0.48); // 40% + 8%
const hraMonthly = round0(monthlyCTC * 0.18);
const daMonthly = round0(monthlyCTC * 0.12);
const specialMonthly = round0(monthlyCTC * 0.16);
const foodMonthly = round0(monthlyCTC * 0.06);

// ================= STATIC PF =================
const pfMonthly = 3750;

// ================= ANNUAL VALUES =================
const basicAnnual = basicMonthly * 12;
const hraAnnual = hraMonthly * 12;
const daAnnual = daMonthly * 12;
const specialAnnual = specialMonthly * 12;
const foodAnnual = foodMonthly * 12;
const pfAnnual = pfMonthly * 12;

// ================= SALARY TABLE =================
const salaryRows = [
  ["Basic", basicMonthly, basicAnnual],
  ["House Rent Allowance", hraMonthly, hraAnnual],
  ["Dearness Allowance", daMonthly, daAnnual],
  ["Special Allowance", specialMonthly, specialAnnual],
  ["Food Allowance", foodMonthly, foodAnnual],
  ["Provident Fund (PF)", pfMonthly, pfAnnual], // Separate
];

// ================= TOTAL EARNINGS =================
const totalMonthly =
  basicMonthly +
  hraMonthly +
  daMonthly +
  specialMonthly +
  foodMonthly;

const totalAnnual = totalMonthly * 12;





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
            <strong>Devcons Software Solutions Pvt. Ltd.</strong>{" "}
            with effective date <strong>{data.effectiveDate}</strong>,
            considering your performance and support towards the organization.
            If there is any change in the date of joining, changes can be taken
            under consideration.
          </Typography>

         <Typography mb={3} textAlign="justify">
           Your total Gross salary will be Rs.{" "}
           <strong>
             {formatCurrency(totalAnnual)} (
             {numberToWords(Number(totalAnnual))}
             )
           </strong>{" "}
           per year.
         </Typography>

          <Typography mb={3} textAlign="justify">
            Subject to various deductions as per company and government policy.
            The roles and responsibilities and other terms and conditions of your
            employment will be specified in your letter of appointment. We welcome
            you to Devcons Software Solutions Pvt. Ltd. family and hope it would
            be the beginning of a long and mutually beneficial association.
            Kindly acknowledge the duplicate copy of this letter as an acceptance
            of this offer.
          </Typography>

          <Typography mb={3}>
            For Devcons Software Solutions Pvt. Ltd.
          </Typography>

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
              <Typography>HR Relations Lead</Typography>
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
            <TableRow sx={{ backgroundColor: "#f2b705" }}>
              <TableCell>
                <b>Salary Components</b>
              </TableCell>
              <TableCell align="right">
                <b>Per month (Rs.)</b>
              </TableCell>
              <TableCell align="right">
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

            <TableRow sx={{ backgroundColor: "#f2b705" }}>
              <TableCell>
                <b>Total Monthly Gross Salary</b>
              </TableCell>
              <TableCell align="right">
                <b>{formatCurrency(totalMonthly)}</b>
              </TableCell>
              <TableCell align="right">
                <b>{formatCurrency(totalAnnual)}</b>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 10 }}>
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
            <Typography>HR Relations Lead</Typography>
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

export default DevconsConfirmationLetter;

