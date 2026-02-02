// import React from "react";
// import {
//   Box,
//   Table,
//   TableBody,
//   TableCell,
//   TableRow,
//   Typography,
// } from "@mui/material";

// /* ---------------- COLORS ---------------- */
// const headerBg = "#EAF4FB";
// const sectionBg = "#F3F6F8";
// const totalBg = "#E1EEF9";

// /* ---------------- STYLES ---------------- */
// const cell = {
//   border: "1px solid #000",
//   padding: "4px",
//   fontSize: "12px",
//   lineHeight: 1.2,
// };

// const bold = { fontWeight: "bold" };
// const center = { textAlign: "center" };



// /* ---------------- UTILS ---------------- */
// const formatDate = (d) =>
//   d ? new Date(d).toLocaleDateString("en-GB") : "";

// const formatMonth = (v) => {
//   if (!v) return "";
//   const d = new Date(`${v}-01`);
//   return d.toLocaleDateString("en-US", { month: "long" });
// };

// const numberFormat = (n) =>
//   Number(n || 0).toLocaleString("en-IN", {
//     minimumFractionDigits: 2,
//   });

// /* ---------------- SALARY LOGIC ---------------- */
// const getSalaryBreakup = (data = {}) => {
//   const total = Number(data.total || 0);

//   const basic = +(total * 0.4).toFixed(2);
//   const hra = +(total * 0.18).toFixed(2);
//   const da = +(total * 0.12).toFixed(2);
//   const special = +(total * 0.16).toFixed(2);
//   const food = +(total * 0.06).toFixed(2);
//   const misc = +(total - (basic + hra + da + special + food)).toFixed(2);

//   return {
//     basic,
//     hra,
//     da,
//     special,
//     food,
//     misc,
//     pt: 200,
//     other: 2000,
//   };
// };

// /* ---------------- NUMBER TO WORDS ---------------- */
// const numberToWords = (num) => {
//   if (!num) return "Zero Only";

//   const a = [
//     "", "One", "Two", "Three", "Four", "Five", "Six",
//     "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve",
//     "Thirteen", "Fourteen", "Fifteen", "Sixteen",
//     "Seventeen", "Eighteen", "Nineteen",
//   ];
//   const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

//   const inWords = (n) => {
//     if (n < 20) return a[n];
//     if (n < 100) return b[Math.floor(n / 10)] + (n % 10 ? " " + a[n % 10] : "");
//     if (n < 1000) return a[Math.floor(n / 100)] + " Hundred" + (n % 100 ? " " + inWords(n % 100) : "");
//     if (n < 100000) return inWords(Math.floor(n / 1000)) + " Thousand" + (n % 1000 ? " " + inWords(n % 1000) : "");
//     if (n < 10000000) return inWords(Math.floor(n / 100000)) + " Lakh" + (n % 100000 ? " " + inWords(n % 100000) : "");
//     return inWords(Math.floor(n / 10000000)) + " Crore";
//   };

//   return inWords(Math.round(num)) + " Rs Only";
// };

// /* ---------------- COMPONENT ---------------- */
// const PentaFullAndFinal = ({ company = {}, data = {} }) => {
//   const salary = getSalaryBreakup(data);

//   const earningsTotal =
//     salary.basic +
//     salary.hra +
//     salary.da +
//     salary.special +
//     salary.food +
//     salary.misc;

//   const deductionsTotal = salary.pt + salary.other;

//   const netPay =
//     earningsTotal -
//     deductionsTotal +
//     Number(data.leaveencashment || 0);

//   return (
//     <Box
//       sx={{
//         width: "210mm",
//         height: "297mm",
//         position: "relative",
//         fontFamily: "Cambria, serif",
//         backgroundColor: "#fff",
//         overflow: "hidden",
//       }}
//     >
//       {/* HEADER */}
//       {company.header && (
//         <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
//           <img src={company.header} width="100%" alt="header" />
//         </Box>
//       )}

//       {/* CONTENT */}
//       <Box
//         sx={{
//           position: "absolute",
//           top: "50mm",
//           bottom: "40mm",
//           left: "12mm",
//           right: "12mm",
//           overflow: "hidden",
//         }}
//       >
//         <Table sx={{ borderCollapse: "collapse" }}>
//           <TableBody>

//             <TableRow>
//               <TableCell colSpan={4} sx={{ ...cell, ...bold, ...center }}>
//                 Full & Final Settlement Statement
//               </TableCell>
//             </TableRow>

//             <TableRow>
//               <TableCell colSpan={4} sx={{ ...cell, ...bold, ...center }}>
//                 {company.name}
//               </TableCell>
//             </TableRow>

//             <TableRow>
//               <TableCell colSpan={4} sx={{ ...cell, ...center }}>
//                 {company.address}
//               </TableCell>
//             </TableRow>

//             <TableRow>
//               <TableCell sx={{ ...cell, ...bold }}>Name Of The Employee</TableCell>
//               <TableCell sx={cell}>{data.employeeName}</TableCell>
//               <TableCell sx={{ ...cell, ...bold }}>F&F Date</TableCell>
//               <TableCell sx={cell}>{formatDate(data.fDate)}</TableCell>
//             </TableRow>

//             <TableRow>
//               <TableCell sx={{ ...cell, ...bold }}>Employee ID</TableCell>
//               <TableCell sx={cell}>{data.employeeId}</TableCell>
//               <TableCell sx={{ ...cell, ...bold }}>Joining Date</TableCell>
//               <TableCell sx={cell}>{formatDate(data.doj)}</TableCell>
//             </TableRow>

//             <TableRow>
//               <TableCell sx={{ ...cell, ...bold }}>Designation</TableCell>
//               <TableCell sx={cell}>{data.designation}</TableCell>
//               <TableCell sx={{ ...cell, ...bold }}>Date Of Resignation</TableCell>
//               <TableCell sx={cell}>{formatDate(data.dateofResignation)}</TableCell>
//             </TableRow>

//             <TableRow>
//               <TableCell sx={{ ...cell, ...bold }}>Department</TableCell>
//               <TableCell sx={cell}>{data.department}</TableCell>
//               <TableCell sx={{ ...cell, ...bold }}>Date Of Leaving</TableCell>
//               <TableCell sx={cell}>{formatDate(data.dateofLeaving)}</TableCell>
//             </TableRow>

//             <TableRow>
//               <TableCell colSpan={2} sx={{ ...cell, ...bold }}>
//                 Salary Particulars
//               </TableCell>
//               <TableCell sx={{ ...cell, ...bold }}>For the Month</TableCell>
//               <TableCell sx={cell}>{formatMonth(data.forthemonth)}</TableCell>
//             </TableRow>

//             <TableRow sx={{ backgroundColor: sectionBg }}>
//               <TableCell sx={{ ...cell, ...bold }}>Total Days in the Month</TableCell>
//               <TableCell sx={cell}>{data.totaldayinmonth}</TableCell>
//               <TableCell sx={{ ...cell, ...bold }}>Paid Days</TableCell>
//               <TableCell sx={cell}>{data.paiddays}</TableCell>
//             </TableRow>

//             <TableRow sx={{ backgroundColor: headerBg }}>
//               <TableCell colSpan={2} sx={{ ...cell, ...bold }}>
//                 Earnings
//               </TableCell>
//               <TableCell sx={{ ...cell, ...bold, ...center }}>Actual</TableCell>
//               <TableCell sx={{ ...cell, ...bold, ...center }}>Earned</TableCell>
//             </TableRow>


//             {[
//               ["Basic", salary.basic],
//               ["HRA", salary.hra],
//               ["Dearness Allowance", salary.da],
//               ["Special Allowance", salary.special],
//               ["Food Allowance", salary.food],
//               ["Misc Allowance", salary.misc],
//             ].map(([label, val], i) => (
//               <TableRow key={i}>
//                 <TableCell colSpan={2} sx={cell}>{label}</TableCell>
//                 <TableCell sx={cell}>{numberFormat(val)}</TableCell>
//                 <TableCell sx={cell}>{numberFormat(val)}</TableCell>
//               </TableRow>
//             ))}


//             <TableRow sx={{ backgroundColor: totalBg }}>
//               <TableCell colSpan={2} sx={{ ...cell, ...bold }}>
//                 Total Earnings
//               </TableCell>

//               {/* Actual Total */}
//               <TableCell sx={{ ...cell, ...bold }}>
//                 {numberFormat(earningsTotal)}
//               </TableCell>

//               {/* Earned Total */}
//               <TableCell sx={{ ...cell, ...bold }}>
//                 {numberFormat(earningsTotal)}
//               </TableCell>
//             </TableRow>


//             <TableRow sx={{ backgroundColor: sectionBg }}>
//               <TableCell colSpan={4} sx={{ ...cell, ...bold, ...center }}>
//                 Less Deductions (-)
//               </TableCell>
//             </TableRow>


//             <TableRow>
//               <TableCell sx={cell}>Professional Tax</TableCell>

//               {/* merged middle column */}
//               <TableCell colSpan={2} sx={cell}></TableCell>

//               <TableCell sx={cell} align="right">
//                 {numberFormat(salary.pt)}
//               </TableCell>
//             </TableRow>


//             <TableRow>
//               <TableCell sx={cell}>Other</TableCell>

//               {/* merged middle column */}
//               <TableCell colSpan={2} sx={cell}></TableCell>

//               <TableCell sx={cell} align="right">
//                 {numberFormat(salary.other)}
//               </TableCell>
//             </TableRow>


//             <TableRow>
//               <TableCell sx={{ ...cell, ...bold }}>Total Deductions</TableCell>

//               {/* merged middle column */}
//               <TableCell colSpan={2} sx={cell}></TableCell>

//               <TableCell sx={{ ...cell, ...bold }} align="right">
//                 {numberFormat(deductionsTotal)}
//               </TableCell>
//             </TableRow>




//             <TableRow sx={{ backgroundColor: sectionBg }}>
//               <TableCell colSpan={4} sx={{ ...cell, ...bold, ...center }}>
//                 Other Earnings
//               </TableCell>
//             </TableRow>



//             <TableRow>
//               <TableCell sx={cell}>Leave Encashment (Days)</TableCell>

//               {/* merged middle space */}
//               <TableCell colSpan={2} sx={cell}></TableCell>

//               <TableCell sx={cell} align="right">
//                 {numberFormat(data.leaveencashment)}
//               </TableCell>
//             </TableRow>


//             <TableRow>
//               <TableCell sx={{ ...cell, ...bold }}>Total</TableCell>

//               {/* merged middle space */}
//               <TableCell colSpan={2} sx={cell}></TableCell>

//               <TableCell sx={{ ...cell, ...bold }} align="right">
//                 {numberFormat(netPay)}
//               </TableCell>
//             </TableRow>


//             <TableRow sx={{ backgroundColor: totalBg }}>
//               <TableCell sx={{ ...cell, ...bold }}>Net Payable (Rs)</TableCell>

//               {/* merged middle space */}
//               <TableCell colSpan={2} sx={cell}></TableCell>

//               <TableCell sx={{ ...cell, ...bold }} align="right">
//                 {numberFormat(netPay)}
//               </TableCell>
//             </TableRow>




//             <TableRow>
//               <TableCell sx={{ ...cell, ...bold }}>Amount in Words</TableCell>
//               <TableCell colSpan={3} sx={cell}>{numberToWords(netPay)}</TableCell>
//             </TableRow>

//             <TableRow>
//               {/* Prepared By */}
//               <TableCell sx={{ ...cell, ...center, height: 65 }}>
//                 <Typography mt={4} fontSize={12} fontWeight="bold">
//                   Prepared By
//                 </Typography>
//               </TableCell>

//               {/* Verified By */}
//               <TableCell sx={{ ...cell, ...center }}>
//                 {company.stamp && (
//                   <img src={company.stamp} height={45} alt="stamp" />
//                 )}
//                 <Typography fontSize={12} fontWeight="bold">
//                   Verified By
//                 </Typography>
//               </TableCell>

//               {/* Approved By */}
//               <TableCell colSpan={2} sx={{ ...cell, ...center }}>
//                 {company.signature && (
//                   <img src={company.signature} height={35} alt="sign" />
//                 )}
//                 <Typography mt={1} fontSize={12} fontWeight="bold">
//                   Approved By
//                 </Typography>
//               </TableCell>
//             </TableRow>



//           </TableBody>
//         </Table>
//       </Box>

//       {/* FOOTER */}
//       {company.footer && (
//         <Box sx={{ position: "absolute", bottom: 0, left: 0, width: "100%" }}>
//           <img src={company.footer} width="100%" alt="footer" />
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default PentaFullAndFinal;


import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";

/* ---------------- COLORS ---------------- */
const headerBg = "#EAF4FB";
const sectionBg = "#F3F6F8";
const totalBg = "#E1EEF9";

/* ---------------- STYLES ---------------- */
const cell = {
  border: "1px solid #000",
  padding: "4px",
  fontSize: "12px",
  lineHeight: 1.2,
};

const bold = { fontWeight: "bold" };
const center = { textAlign: "center" };

/* ---------------- DATE UTILS ---------------- */
const getDaysInMonth = (monthValue) => {
  if (!monthValue) return 0;
  // monthValue example: "2025-12"
  const date = new Date(`${monthValue}-01`);
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};


/* ---------------- UTILS ---------------- */
const formatDate = (d) =>
  d ? new Date(d).toLocaleDateString("en-GB") : "";

const formatMonth = (v) => {
  if (!v) return "";
  const d = new Date(`${v}-01`);
  return d.toLocaleDateString("en-US", { month: "long" });
};

const numberFormat = (n) =>
  Number(n || 0).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
  });

/* ---------------- SALARY LOGIC ---------------- */
const getSalaryBreakup = (data = {}) => {
  const total = Number(data.total || 0);

  const basic = +(total * 0.4).toFixed(2);
  const hra = +(total * 0.18).toFixed(2);
  const da = +(total * 0.12).toFixed(2);
  const special = +(total * 0.16).toFixed(2);
  const food = +(total * 0.06).toFixed(2);
  const misc = +(total - (basic + hra + da + special + food)).toFixed(2);

  return {
    basic,
    hra,
    da,
    special,
    food,
    misc,
    pt: 200,
    other: 2000,
  };
};

/* ---------------- NUMBER TO WORDS ---------------- */
const numberToWords = (num) => {
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
    if (n < 100) return b[Math.floor(n / 10)] + (n % 10 ? " " + a[n % 10] : "");
    if (n < 1000) return a[Math.floor(n / 100)] + " Hundred" + (n % 100 ? " " + inWords(n % 100) : "");
    if (n < 100000) return inWords(Math.floor(n / 1000)) + " Thousand" + (n % 1000 ? " " + inWords(n % 1000) : "");
    if (n < 10000000) return inWords(Math.floor(n / 100000)) + " Lakh" + (n % 100000 ? " " + inWords(n % 100000) : "");
    return inWords(Math.floor(n / 10000000)) + " Crore";
  };

  return inWords(Math.round(num)) + " Rs Only";
};

/* ---------------- COMPONENT ---------------- */
const PentaFullAndFinal = ({ company = {}, data = {} }) => {
  const totalDays = getDaysInMonth(data.forthemonth);
  const paidDays = Number(data.paiddays || 0);
  const paidRatio = totalDays ? paidDays / totalDays : 0;

  const salary = getSalaryBreakup(data);

  const earningsTotal =
    salary.basic +
    salary.hra +
    salary.da +
    salary.special +
    salary.food +
    salary.misc;

  const earnedTotal = +(earningsTotal * paidRatio).toFixed(2);

  const deductionsTotal = salary.pt + salary.other;

  const netPay =
    earnedTotal -
    deductionsTotal +
    Number(data.leaveencashment || 0);


  return (
    <Box
      sx={{
        width: "210mm",
        height: "297mm",
        position: "relative",
        fontFamily: "Cambria, serif",
        backgroundColor: "#fff",
        overflow: "hidden",
      }}
    >
      {/* HEADER */}
      {company.header && (
        <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
          <img src={company.header} width="100%" alt="header" />
        </Box>
      )}

      {/* CONTENT */}
      <Box
        sx={{
          position: "absolute",
          top: "50mm",
          bottom: "40mm",
          left: "12mm",
          right: "12mm",
          overflow: "hidden",
        }}
      >
        <Table sx={{ borderCollapse: "collapse" }}>
          <TableBody>

            <TableRow>
              <TableCell colSpan={4} sx={{ ...cell, ...bold, ...center }}>
                Full & Final Settlement Statement
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={4} sx={{ ...cell, ...bold, ...center }}>
                {company.name}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={4} sx={{ ...cell, ...center }}>
                {company.address}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ ...cell, ...bold }}>Name Of The Employee</TableCell>
              <TableCell sx={cell}>{data.employeeName}</TableCell>
              <TableCell sx={{ ...cell, ...bold }}>F&F Date</TableCell>
              <TableCell sx={cell}>{formatDate(data.fDate)}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ ...cell, ...bold }}>Employee ID</TableCell>
              <TableCell sx={cell}>{data.employeeId}</TableCell>
              <TableCell sx={{ ...cell, ...bold }}>Joining Date</TableCell>
              <TableCell sx={cell}>{formatDate(data.doj)}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ ...cell, ...bold }}>Designation</TableCell>
              <TableCell sx={cell}>{data.designation}</TableCell>
              <TableCell sx={{ ...cell, ...bold }}>Date Of Resignation</TableCell>
              <TableCell sx={cell}>{formatDate(data.dateofResignation)}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ ...cell, ...bold }}>Department</TableCell>
              <TableCell sx={cell}>{data.department}</TableCell>
              <TableCell sx={{ ...cell, ...bold }}>Date Of Leaving</TableCell>
              <TableCell sx={cell}>{formatDate(data.dateofLeaving)}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={2} sx={{ ...cell, ...bold }}>
                Salary Particulars
              </TableCell>
              <TableCell sx={{ ...cell, ...bold }}>For the Month</TableCell>
              <TableCell sx={cell}>{formatMonth(data.forthemonth)}</TableCell>
            </TableRow>

            <TableRow sx={{ backgroundColor: sectionBg }}>
              <TableCell sx={{ ...cell, ...bold }}>Total Days in the Month</TableCell>
              <TableCell sx={cell}>{totalDays}</TableCell>
              <TableCell sx={{ ...cell, ...bold }}>Paid Days</TableCell>
              <TableCell sx={cell}>{data.paiddays}</TableCell>
            </TableRow>

            <TableRow sx={{ backgroundColor: headerBg }}>
              <TableCell colSpan={2} sx={{ ...cell, ...bold }}>
                Earnings
              </TableCell>
              <TableCell sx={{ ...cell, ...bold, ...center }}>Actual</TableCell>
              <TableCell sx={{ ...cell, ...bold, ...center }}>Earned</TableCell>
            </TableRow>


            {[
              ["Basic", salary.basic],
              ["HRA", salary.hra],
              ["Dearness Allowance", salary.da],
              ["Special Allowance", salary.special],
              ["Food Allowance", salary.food],
              ["Misc Allowance", salary.misc],
            ].map(([label, val], i) => {
              const earned = +(val * paidRatio).toFixed(2);

              return (
                <TableRow key={i}>
                  <TableCell colSpan={2} sx={cell}>{label}</TableCell>
                  <TableCell sx={cell}>{numberFormat(val)}</TableCell>
                  <TableCell sx={cell}>{numberFormat(earned)}</TableCell>
                </TableRow>
              );
            })}



            <TableRow sx={{ backgroundColor: totalBg }}>
              <TableCell colSpan={2} sx={{ ...cell, ...bold }}>
                Total Earnings
              </TableCell>

              {/* Actual Total */}
              <TableCell sx={{ ...cell, ...bold }}>
                {numberFormat(earningsTotal)}
              </TableCell>

              {/* Earned Total */}
              <TableCell sx={{ ...cell, ...bold }}>
                {numberFormat(earnedTotal)}
              </TableCell>

            </TableRow>


            <TableRow sx={{ backgroundColor: sectionBg }}>
              <TableCell colSpan={4} sx={{ ...cell, ...bold, ...center }}>
                Less Deductions (-)
              </TableCell>
            </TableRow>


            <TableRow>
              <TableCell sx={cell}>Professional Tax</TableCell>

              {/* merged middle column */}
              <TableCell colSpan={2} sx={cell}></TableCell>

              <TableCell sx={cell} align="right">
                {numberFormat(salary.pt)}
              </TableCell>
            </TableRow>


            <TableRow>
              <TableCell sx={cell}>Other</TableCell>

              {/* merged middle column */}
              <TableCell colSpan={2} sx={cell}></TableCell>

              <TableCell sx={cell} align="right">
                {numberFormat(salary.other)}
              </TableCell>
            </TableRow>


            <TableRow>
              <TableCell sx={{ ...cell, ...bold }}>Total Deductions</TableCell>

              {/* merged middle column */}
              <TableCell colSpan={2} sx={cell}></TableCell>

              <TableCell sx={{ ...cell, ...bold }} align="right">
                {numberFormat(deductionsTotal)}
              </TableCell>
            </TableRow>




            <TableRow sx={{ backgroundColor: sectionBg }}>
              <TableCell colSpan={4} sx={{ ...cell, ...bold, ...center }}>
                Other Earnings
              </TableCell>
            </TableRow>



            <TableRow>
              <TableCell sx={cell}>Leave Encashment (Days)</TableCell>

              {/* merged middle space */}
              <TableCell colSpan={2} sx={cell}></TableCell>

              <TableCell sx={cell} align="right">
                {numberFormat(data.leaveencashment)}
              </TableCell>
            </TableRow>


            <TableRow>
              <TableCell sx={{ ...cell, ...bold }}>Total</TableCell>

              {/* merged middle space */}
              <TableCell colSpan={2} sx={cell}></TableCell>

              <TableCell sx={{ ...cell, ...bold }} align="right">
                {numberFormat(earnedTotal)}
              </TableCell>
            </TableRow>


            <TableRow sx={{ backgroundColor: totalBg }}>
              <TableCell sx={{ ...cell, ...bold }}>Net Payable (Rs)</TableCell>

              {/* merged middle space */}
              <TableCell colSpan={2} sx={cell}></TableCell>

              <TableCell sx={{ ...cell, ...bold }} align="right">
                {numberFormat(netPay)}
              </TableCell>
            </TableRow>




            <TableRow>
              <TableCell sx={{ ...cell, ...bold }}>Amount in Words</TableCell>
              <TableCell colSpan={3} sx={cell}>{numberToWords(netPay)}</TableCell>
            </TableRow>

            <TableRow>
              {/* Prepared By */}
              <TableCell sx={{ ...cell, ...center, height: 65 }}>
                <Typography mt={4} fontSize={12} fontWeight="bold">
                  Prepared By
                </Typography>
              </TableCell>

              {/* Verified By */}
              <TableCell sx={{ ...cell, ...center }}>
                {company.stamp && (
                  <img src={company.stamp} height={45} alt="stamp" />
                )}
                <Typography fontSize={12} fontWeight="bold">
                  Verified By
                </Typography>
              </TableCell>

              {/* Approved By */}
              <TableCell colSpan={2} sx={{ ...cell, ...center }}>
                {company.signature && (
                  <img src={company.signature} height={35} alt="sign" />
                )}
                <Typography mt={1} fontSize={12} fontWeight="bold">
                  Approved By
                </Typography>
              </TableCell>
            </TableRow>



          </TableBody>
        </Table>
      </Box>

      {/* FOOTER */}
      {company.footer && (
        <Box sx={{ position: "absolute", bottom: 0, left: 0, width: "100%" }}>
          <img src={company.footer} width="100%" alt="footer" />
        </Box>
      )}
    </Box>
  );
};

export default PentaFullAndFinal;
