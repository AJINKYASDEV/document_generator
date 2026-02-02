// import React from "react";

// /* ================= DATE FORMATTER ================= */
// const formatDate = (date) => {
//   if (!date) return "";
//   return new Date(date).toLocaleDateString("en-US", {
//     day: "2-digit",
//     month: "long",
//     year: "numeric",
//   });
// };

// const SmartMatrixAppointment = ({ company, data }) => {
//   if (!company || !data) return null;

//   return (
//     <div
//       className="a4-content-only"
//       style={{
//         width: "210mm",
//         minHeight: "297mm",
//         position: "relative",
//         padding: "22mm 25mm 28mm 25mm", // 🎯 Word-accurate margins
//         fontFamily: '"Times New Roman", serif',
//         fontSize: "12pt",
//         lineHeight: "1.6",
//         color: "#000",
//         backgroundColor: "#fff",
//       }}
//     >
//       {/* ================= HEADER ================= */}
//       {company.header && (
//         <img
//           src={company.header}
//           alt="Company Header"
//           style={{ width: "100%", marginBottom: "12mm" }}
//         />
//       )}

//       {/* ================= DATE ================= */}
//       <p style={{ marginBottom: "10mm" }}>{formatDate(data.issueDate)}</p>

//       {/* ================= ADDRESS ================= */}
//       <p style={{ marginBottom: "6mm" }}>
//         <strong>
//           {data.mrms} {data.employeeName}
//         </strong>
//         <br />
//         {data.address}
//       </p>

//       {/* ================= SALUTATION ================= */}
//       <p style={{ marginBottom: "8mm" }}>
//         Dear {data.employeeName.split(" ")[0]},
//       </p>

//       {/* ================= TITLE ================= */}
//       <p
//         style={{
//           textAlign: "center",
//           fontWeight: 700,
//           textDecoration: "underline",
//           marginBottom: "10mm",
//         }}
//       >
//         Letter of Appointment
//       </p>

//       {/* ================= BODY ================= */}
//       <p style={{ textAlign: "justify", marginBottom: "6mm" }}>
//         Further to your acceptance of our Letter of Offer dated{" "}
//         <strong>{formatDate(data.offerDate)}</strong>, we are pleased to appoint
//         you in our organization with effect from{" "}
//         <strong>{formatDate(data.joiningDate)}</strong>, under the terms and
//         conditions given below:
//       </p>

//       <p style={{ marginBottom: "4mm" }}>
//         Your Designation will be <strong>“{data.designation}”</strong>.
//       </p>

//       <p style={{ marginBottom: "4mm" }}>
//         Your total emoluments will be{" "}
//         <strong>Rs. {data.salary} per annum</strong>.
//       </p>

//       <p style={{ textAlign: "justify", marginBottom: "6mm" }}>
//         Full details of your pay package are given in the enclosure to this
//         letter. However, please note that LTA is payable after completion of one
//         year of service, subject to your confirmation. The Management reserves
//         the right to revise salary components while protecting the total gross
//         salary.
//       </p>

//       <p style={{ textAlign: "justify", marginBottom: "6mm" }}>
//         You will be on probation for a period of{" "}
//         <strong>{data.probationPeriod} months</strong> from the date of joining.
//         During this period, your performance will be reviewed and confirmation
//         will be subject to satisfactory performance.
//       </p>

//       <p style={{ textAlign: "justify", marginBottom: "6mm" }}>
//         Your services are terminable with one month’s notice on either side or
//         salary in lieu thereof. The Company reserves the right to terminate your
//         services without notice in case of misconduct or false information.
//       </p>

//       <p style={{ textAlign: "justify", marginBottom: "6mm" }}>
//         You shall devote full time and attention to your duties and shall not
//         engage in any other employment or business without prior written
//         permission of the Company.
//       </p>

//       <p style={{ textAlign: "justify", marginBottom: "10mm" }}>
//         You will be governed by the service rules and policies of the Company as
//         amended from time to time.
//       </p>

//       {/* ================= CLOSING ================= */}
//       <p style={{ marginBottom: "14mm" }}>
//         You are requested to sign and return the duplicate copy of this letter
//         as a token of acceptance.
//       </p>

//       {/* ================= SIGNATURE SECTION ================= */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "flex-start",
//           marginTop: "12mm",
//         }}
//       >
//         <div>
//           <p style={{ marginBottom: "18mm" }}>
//             Yours faithfully,
//             <br />
//             <strong>{company.name}</strong>
//           </p>

//           {company.signature && (
//             <img
//               src={company.signature}
//               alt="HR Signature"
//               style={{ height: "45px" }}
//             />
//           )}

//           <p style={{ margin: 0 }}>
//             <strong>{company.hrName}</strong>
//           </p>
//           <p style={{ margin: 0 }}>HR Manager - HR Services</p>
//         </div>

//         {company.stamp && (
//           <img
//             src={company.stamp}
//             alt="Company Stamp"
//             style={{ height: "70px" }}
//           />
//         )}
//       </div>

//       {/* ================= FOOTER ================= */}
//       {company.footer && (
//         <img
//           src={company.footer}
//           alt="Company Footer"
//           style={{
//             position: "absolute",
//             bottom: 0,
//             left: 0,
//             width: "100%",
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default SmartMatrixAppointment;



// import React from "react";
// import {
//   Box,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableRow,
//   Paper,
// } from "@mui/material";
// import A4Page from "../../layout/A4Page";
// import {
//   formatCurrency,
//   getProfessionalTax,
// } from "../../../utils/salaryCalculations";

// /* ================= DATE FORMATTER ================= */
// const formatDate = (date) => {
//   if (!date) return "";
//   return new Date(date).toLocaleDateString("en-US", {
//     day: "2-digit",
//     month: "long",
//     year: "numeric",
//   });
// };

// const SmartMatrixAppointment = ({ company, data }) => {
//   if (!company || !data) return null;

//   return (
//     <>
//       <A4Page headerSrc={company.header} footerSrc={company.footer}>
//         <div className="a4-content-only">
//           {/* ================= DATE ================= */}
//           <p style={{ marginBottom: "10mm" }}>{formatDate(data.issueDate)}</p>

//           {/* ================= ADDRESS ================= */}
//           <p style={{ marginBottom: "6mm" }}>
//             <strong>
//               {data.mrms} {data.employeeName}
//             </strong>
//             <br />
//             {data.address}
//           </p>

//           {/* ================= SALUTATION ================= */}
//           <p style={{ marginBottom: "8mm" }}>
//             Dear {data.employeeName.split(" ")[0]},
//           </p>

//           {/* ================= TITLE ================= */}
//           <p
//             style={{
//               textAlign: "center",
//               fontWeight: 700,
//               textDecoration: "underline",
//               marginBottom: "10mm",
//             }}
//           >
//             Letter of Appointment
//           </p>

//           {/* ================= BODY ================= */}
//           <p style={{ textAlign: "justify", marginBottom: "6mm" }}>
//             Further to your acceptance of our Letter of Offer dated{" "}
//             <strong>{formatDate(data.offerDate)}</strong>, we are pleased to
//             appoint you in our organization with effect from{" "}
//             <strong>{formatDate(data.joiningDate)}</strong>, under the terms and
//             conditions given below:
//           </p>

//           <p style={{ marginBottom: "4mm" }}>
//             Your Designation will be <strong>“{data.designation}”</strong>.
//           </p>

//           <p style={{ marginBottom: "4mm" }}>
//             Your total emoluments will be{" "}
//             <strong>Rs. {data.salary} per annum</strong>.
//           </p>

//           <p style={{ textAlign: "justify", marginBottom: "6mm" }}>
//             Full details of your pay package are given in the enclosure to this
//             letter. However, please note that LTA is payable after completion of
//             one year of service, subject to your confirmation. The Management
//             reserves the right to revise salary components while protecting the
//             total gross salary.
//           </p>

//           <p style={{ textAlign: "justify", marginBottom: "6mm" }}>
//             You will be on probation for a period of{" "}
//             <strong>{data.probationPeriod} months</strong> from the date of
//             joining. During this period, your performance will be reviewed and
//             confirmation will be subject to satisfactory performance.
//           </p>

//           <p style={{ textAlign: "justify", marginBottom: "6mm" }}>
//             Your services are terminable with one month’s notice on either side
//             or salary in lieu thereof. The Company reserves the right to
//             terminate your services without notice in case of misconduct or
//             false information.
//           </p>

//           <p style={{ textAlign: "justify", marginBottom: "6mm" }}>
//             You shall devote full time and attention to your duties and shall
//             not engage in any other employment or business without prior written
//             permission of the Company.
//           </p>

//           <p style={{ textAlign: "justify", marginBottom: "10mm" }}>
//             You will be governed by the service rules and policies of the
//             Company as amended from time to time.
//           </p>

//           {/* ================= CLOSING ================= */}
//           <p style={{ marginBottom: "14mm" }}>
//             You are requested to sign and return the duplicate copy of this
//             letter as a token of acceptance.
//           </p>

//           {/* ================= SIGNATURE SECTION ================= */}
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "flex-start",
//               marginTop: "12mm",
//             }}
//           >
//             <div>
//               <p style={{ marginBottom: "4mm" }}>
//                 Yours faithfully,
//                 <br />
//                 <strong>{company.name}</strong>
//               </p>

//               {company.signature && (
//                 <img
//                   src={company.signature}
//                   alt="HR Signature"
//                   style={{ height: "45px" }}
//                 />
//               )}

//               {company.stamp && (
//                 <img
//                   src={company.stamp}
//                   alt="Company Stamp"
//                   style={{ height: "70px" }}
//                 />
//               )}

//               <p style={{ margin: 0 }}>
//                 <strong>{company.hrName}</strong>
//               </p>
//               <p style={{ margin: 0 }}>HR Manager - HR Services</p>
//             </div>
//           </div>
//         </div>
//       </A4Page>
//       <A4Page headerSrc={company.header} footerSrc={company.footer}></A4Page>
//       <A4Page headerSrc={company.header} footerSrc={company.footer}></A4Page>
//       <A4Page headerSrc={company.header} footerSrc={company.footer}></A4Page>
//       <A4Page headerSrc={company.header} footerSrc={company.footer}></A4Page>
//     </>
//   );
// };

// export default SmartMatrixAppointment;






// import React from "react";
// import {
//   Box,
//   Grid,
//   Typography,
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
//   TableContainer,
// } from "@mui/material";
// import A4Page from "../../layout/A4Page";
// import { formatCurrency } from "../../../utils/salaryCalculations";


// // ================= TABLE CELL STYLES =================
// const headCell = {
//   fontWeight: 700,
//   border: "1px solid #333",
//   fontFamily: "Times New Roman",
// };

// const bodyCell = {
//   border: "1px solid #333",
//   fontFamily: "Times New Roman",
// };

// const totalCell = {
//   fontWeight: 700,
//   border: "1px solid #333",
//   fontFamily: "Times New Roman",
// };




// /* ================= DATE FORMATTER ================= */
// const formatDate = (date) => {
//   if (!date) return "";
//   return new Date(date).toLocaleDateString("en-US", {
//     day: "2-digit",
//     month: "long",
//     year: "numeric",
//   });
// };

// const SmartMatrixAppointment = ({ company, data }) => {
//   if (!company || !data) return null;

//   return (
//     <>
//       {/* ================= FIRST PAGE ================= */}
//       <A4Page headerSrc={company.header} footerSrc={company.footer}>
//         <div
//           className="a4-content-only"
//           style={{
//             position: "relative",
//             paddingBottom: "40mm",
//             fontFamily: '"Yu Gothic","Yu Gothic UI","Segoe UI",sans-serif',
//             fontSize: "12pt",
//             lineHeight: "1.5",
//           }}
//         >
//           {/* ================= DATE (TOP RIGHT) ================= */}
//           <div
//             style={{
//               position: "absolute",
//               top: "-15mm",
//               right: "0",
//               fontSize: "11pt",
//               fontFamily: '"Yu Gothic","Yu Gothic UI",sans-serif',
//             }}
//           >
//             {formatDate(data.issueDate)}
//           </div>

//           {/* ================= ADDRESS ================= */}
//           <p style={{ marginTop: "20mm", marginBottom: "6mm" }}>
//             <strong>
//               {data.mrms} {data.employeeName}
//             </strong>
//             <br />
//             {data.address}
//           </p>

//           {/* ================= SALUTATION ================= */}
//           <p style={{ marginBottom: "8mm" }}>
//             Dear {data.employeeName.split(" ")[0]},
//           </p>

//           {/* ================= TITLE ================= */}
//           <p
//             style={{
//               textAlign: "center",
//               fontWeight: 700,
//               textDecoration: "underline",
//               marginBottom: "10mm",
//               fontFamily: '"Yu Gothic","Yu Gothic UI",sans-serif',
//               fontSize: "12pt",
//             }}
//           >
//             Letter of Appointment
//           </p>

//           {/* ================= BODY ================= */}
//           <p
//             style={{
//               textAlign: "justify",
//               marginBottom: "6mm",
//             }}
//           >
//             Further to your acceptance of our Letter of Offer dated{" "}
//             <strong>{formatDate(data.issueDate)}</strong>, we are pleased to
//             appoint you in our organization with effect from{" "}
//             <strong>{formatDate(data.joiningDate)}</strong>, under the terms and
//             conditions given below:
//           </p>

//           <p style={{ marginBottom: "6mm" }}>
//             1. Your Designation will be <strong>“{data.position}”</strong>.
//           </p>

//           <p style={{ marginBottom: "6mm" }}>
//             2. Your total emoluments will be <strong>Rs. {data.salary}</strong>
//             per annum.
//           </p>

//           <p style={{ textAlign: "justify", marginBottom: "6mm" }}>
//             3. Full details of your pay package are given in the enclosure to
//             this letter. However, please note that, LTA is payable after
//             completion of one year of service, subject to your getting confirmed
//             in the service. If the company provides accommodation/transit
//             accommodation, appropriate deductions will be made for the same, as
//             per the rules applicable.
//           </p>

//           <p style={{ textAlign: "justify", marginBottom: "6mm" }}>
//             4. Whilst you are located abroad, the terms applicable will be
//             intimated to you at the relevant point of time.
//           </p>

//           <p style={{ textAlign: "justify", marginBottom: "6mm" }}>
//             5. You shall be due for salary revision not before one year from
//             your date of joining.
//           </p>

//           <p style={{ textAlign: "justify", marginBottom: "10mm" }}>
//             6. The Management reserves the right to change the different
//             components/allowances in the total emoluments package, at its own
//             discretion, at any time in future. However, your total monthly
//             salary will be protected.
//           </p>
//         </div>
//       </A4Page>

//       <A4Page headerSrc={company.header} footerSrc={company.footer}>
//         <div
//           className="a4-content-only"
//           style={{
//             fontFamily: '"Yu Gothic","Yu Gothic UI","Segoe UI",sans-serif',
//             fontSize: "12pt",
//             lineHeight: "1.5",
//             paddingTop: "20mm",
//             paddingBottom: "40mm",
//             marginTop: "-20mm",
//           }}
//         >
//           <p style={{ textAlign: "justify", marginBottom: "6mm" }}>
//             7. You will be on probation for a period of six months from the
//             first of the calendar month following the date of your joining,
//             after which you will be confirmed if your work is found
//             satisfactory. The probation period can be extended at the discretion
//             of the Company. You shall continue to be on probation, till your
//             services are confirmed in writing by a letter of confirmation.In
//             case your performance is not found satisfactory during such period
//             of probation or extended period of probation and you shall be
//             informed of the same in writing.
//           </p>

//           <p style={{ textAlign: "justify", marginBottom: "6mm" }}>
//             8. Your services are terminable with one month’s notice on either
//             side. The Company may, at its discretion, choose to terminate your
//             services with one month’s total salary in lieu of notice period.
//           </p>

//           <p style={{ textAlign: "justify", marginBottom: "6mm" }}>
//             9. The Company shall have the right to terminate your service
//             without notice, if the information given by you at a time of
//             interview or in the application is found to be incorrect or in case
//             of any serious misconduct or if reference check leads to an adverse
//             report of your credentials
//           </p>

//           <p style={{ marginBottom: "6mm" }}>
//             10. This appointment is subject to your being medically fit.
//           </p>

//           <p style={{ marginBottom: "6mm" }}>
//             11. The age of retirement will be 58 years.
//           </p>

//           <p style={{ textAlign: "justify", marginBottom: "6mm" }}>
//             12. You will devote whole time and attention to your duties to your
//             duties to promote the interests of the company and you will
//             undertake herewith not to divulge or utilize any information, which
//             may become known to you in the course of your duties concerning the
//             Company’s trade secret or affairs
//           </p>

//           <p style={{ marginBottom: "6mm" }}>
//             13. You will be required to give an undertaking on confidentiality
//             and non-competition as per the document given to you separately.
//           </p>

//           <p style={{ marginBottom: "6mm" }}>
//             14. You will not, without previous written permission of the
//             Company, engage yourself in the services or employment of any other
//             Company/Firm/Person.
//           </p>

//           <p style={{ marginBottom: "6mm" }}>
//             15. You will keep the Company informed of any change in your
//             residential address.
//           </p>

//           <p style={{ textAlign: "justify" }}>
//             16. You will be required to attend to your work according to the
//             exigencies and urgency of the various jobs, from time to time and
//             you will adhere to the requirements of the Company.
//           </p>
//         </div>
//       </A4Page>

//       <A4Page headerSrc={company.header} footerSrc={company.footer}>
//         <div
//           className="a4-content-only"
//           style={{
//             fontFamily: '"Yu Gothic","Yu Gothic UI","Segoe UI",sans-serif',
//             fontSize: "12pt",
//             lineHeight: "1.5",
//             paddingTop: "20mm",
//             paddingBottom: "40mm",
//           }}
//         >
//           <p style={{ textAlign: "justify", marginBottom: "6mm" }}>
//             17. You will governed by the service conditions applicable to the
//             employees of the Company as amended from time to time and you will
//             abide by the same as well as by the terms of the agreement between
//             yourself and the Company and also as per the undertaking on
//             confidentiality and non-competition.
//           </p>

//           <p style={{ textAlign: "justify", marginBottom: "10mm" }}>
//             18. The Company reserves the right to transfer you to any of our
//             offices/factories/establishments/group companies, whether now in
//             existence or to be set hereafter. However, your present posting will
//             be at Pune.
//           </p>

//           <p style={{ marginBottom: "12mm" }}>
//             You are requested to sign and return the duplicate copy of this
//             letter as a token of your acceptance of the above terms and
//             conditions.
//           </p>

//           {/* ================= SIGN-OFF ================= */}
//           <div>
//             <p style={{ marginBottom: "2mm" }}>
//               {/* ⬆️ reduced margin to lift content slightly */}
//               Yours faithfully,
//             </p>

//             <p style={{ marginBottom: "20mm" }}>I ACCEPT</p>

//             <p style={{ marginTop: "-9mm", marginBottom: "0" }}>
//               {/* ⬆️ negative margin lifts company name upward */}
//               <strong>SmartMatrix Digital Services Pvt Ltd.</strong>
//             </p>
//             <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//               <Box sx={{ mt: "6mm" }}>
//                 <Grid container spacing={2} alignItems="center">
//                   <Grid item>
//                     <Box
//                       component="img"
//                       src={company?.stamp}
//                       alt="Stamp"
//                       sx={{ width: 110 }}
//                     />
//                   </Grid>
//                   <Grid item>
//                     <Box
//                       component="img"
//                       src={company?.signature}
//                       alt="Signature"
//                       sx={{ width: 130, mt: "18mm", ml: "-2mm" }}
//                     />
//                   </Grid>
//                 </Grid>

//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "space-between", // ⬅️ LEFT & RIGHT alignment
//                     alignItems: "flex-start",
//                     mt: "2mm",
//                     width: "100%",
//                   }}
//                 >
//                   {/* ================= LEFT — HR DETAILS ================= */}
//                   <Box>
//                     <Typography
//                       sx={{
//                         fontFamily: '"Bahnschrift", "Segoe UI", sans-serif',
//                       }}
//                     >
//                       <strong>{company?.hrName}</strong>
//                     </Typography>

//                     <Typography
//                       sx={{
//                         fontFamily: '"Bahnschrift", "Segoe UI", sans-serif',
//                       }}
//                     >
//                       <strong>HR Manager - HR Services</strong>
//                     </Typography>
//                   </Box>

//                   {/* ================= RIGHT — NAME & DATE ================= */}
//                   {/* ================= RIGHT — NAME & DATE (SAME COLUMN) ================= */}
//                   <Box
//                     sx={{
//                       display: "flex",
//                       flexDirection: "column", // 🔑 vertical stacking
//                       alignItems: "flex-end", // 🔑 same right edge
//                     }}
//                   >
//                     <Typography
//                       sx={{
//                         fontFamily: '"Bahnschrift", "Segoe UI", sans-serif',
//                         textAlign: "right",
//                       }}
//                     >
//                       <strong>Name:</strong>{" "}
//                       <strong>{data.employeeName}</strong>
//                     </Typography>

//                     <Typography
//                       sx={{
//                         fontFamily: '"Bahnschrift", "Segoe UI", sans-serif',
//                         mt: "2mm", // 🔑 small Word-like gap
//                         textAlign: "right",
//                         ml: "60mm",
//                       }}
//                     >
//                       <strong>Date :</strong> ___________________
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Box>
//             </Box>
//           </div>
//         </div>
//       </A4Page>

//       {/* =================================================================== */}
//       {/* ======================= 🔴 FOURTH PAGE START ====================== */}
//       {/* =================================================================== */}

//       {/* =================================================================== */}
//       {/* ======================= 🔴 FOURTH PAGE START ====================== */}
//       {/* =================================================================== */}

//       <A4Page
//         headerSrc={company?.header}
//         footerSrc={company?.footer}
//         contentTop="45mm"
//         contentBottom="28mm"
//       >
//         {(() => {
//           const round2 = (num) => Number(num.toFixed(2));

//           const annualCTC = round2(
//             Number(data.salary || data.ctc || data.annualSalary || 0)
//           );

//           const basicAnnual = round2(annualCTC * 0.4);
//           const hraAnnual = round2(annualCTC * 0.18);
//           const daAnnual = round2(annualCTC * 0.12);
//           const specialAnnual = round2(annualCTC * 0.16);
//           const foodAnnual = round2(annualCTC * 0.06);

//           const usedAnnual =
//             basicAnnual + hraAnnual + daAnnual + specialAnnual + foodAnnual;

//           const miscAnnual = round2(annualCTC - usedAnnual);

//           const salaryComponents = [
//             {
//               name: "Basic",
//               monthly: round2(basicAnnual / 12),
//               annual: basicAnnual,
//             },
//             {
//               name: "House Rent Allowance",
//               monthly: round2(hraAnnual / 12),
//               annual: hraAnnual,
//             },
//             {
//               name: "Dearness Allowance",
//               monthly: round2(daAnnual / 12),
//               annual: daAnnual,
//             },
//             {
//               name: "Special Allowance",
//               monthly: round2(specialAnnual / 12),
//               annual: specialAnnual,
//             },
//             {
//               name: "Food Allowance",
//               monthly: round2(foodAnnual / 12),
//               annual: foodAnnual,
//             },
//             {
//               name: "Misc. Allowance",
//               monthly: round2(miscAnnual / 12),
//               annual: miscAnnual,
//             },
//           ];

//           const totalMonthly = round2(
//             salaryComponents.reduce((sum, r) => sum + r.monthly, 0)
//           );

//           const totalAnnual = round2(
//             salaryComponents.reduce((sum, r) => sum + r.annual, 0)
//           );

//           return (
//             <>
//               {/* ================= TITLE ================= */}
//               <Typography
//                 sx={{
//                   fontSize: "11pt",
//                   fontWeight: "bold",
//                   textAlign: "left",
//                   mb: "6mm",
//                   fontFamily: "Verdana",
//                 }}
//               >
//                 Salary Structure - Break Up
//               </Typography>
//               {/* ================= ISSUE DATE (TOP RIGHT) ================= */}
//               <Box
//                 sx={{
//                   position: "absolute",
//                   top: "0",
//                   right: "0",
//                   fontSize: "11pt",
//                   fontFamily: '"Bahnschrift","Segoe UI",sans-serif',
//                 }}
//               >
//                 {formatDate(data.issueDate)}
//               </Box>

//               {/* ================= TITLE ================= */}
              

//               {/* ================= EMPLOYEE DETAILS ================= */}
//               <Box
//                 sx={{
//                   fontFamily: '"Bahnschrift","Segoe UI",sans-serif',
//                   fontSize: "11pt",
//                   lineHeight: "1.6",
//                   mb: "6mm",
//                 }}
//               >
//                 <Typography>
//                   <strong>Name :</strong> {data.mrms} {data.employeeName}
//                 </Typography>

//                 <Typography>
//                   <strong>Designation :</strong> {data.position}
//                 </Typography>

//                 <Typography>
//                   <strong>Date of Joining :</strong>{" "}
//                   {formatDate(data.joiningDate)}
//                 </Typography>

//                 <Typography>
//                   <strong>EMP ID :</strong> {data.empId}
//                 </Typography>
//               </Box>

//               {/* ================= SALARY TABLE ================= */}
//               <TableContainer sx={{ mb: "6mm" }}>
//                 <Table sx={{ border: "2px solid #333" }}>
//                   <TableHead>
//                     <TableRow sx={{ backgroundColor: "rgba(215,121,34,0.9)" }}>
//                       <TableCell sx={headCell}>Salary Components</TableCell>
//                       <TableCell align="center" sx={headCell}>
//                         Per month (Rs.)
//                       </TableCell>
//                       <TableCell align="center" sx={headCell}>
//                         Per Annum (Rs.)
//                       </TableCell>
//                     </TableRow>
//                   </TableHead>

//                   <TableBody>
//                     {salaryComponents.map((row, i) => (
//                       <TableRow key={i}>
//                         <TableCell sx={bodyCell}>{row.name}</TableCell>
//                         <TableCell align="right" sx={bodyCell}>
//                           {formatCurrency(row.monthly)}
//                         </TableCell>
//                         <TableCell align="right" sx={bodyCell}>
//                           {formatCurrency(row.annual)}
//                         </TableCell>
//                       </TableRow>
//                     ))}

//                     {/* ================= TOTAL ROW ================= */}
//                     <TableRow sx={{ backgroundColor: "rgba(215,121,34,0.9)" }}>
//                       <TableCell sx={totalCell}>
//                         Total Monthly Gross Salary
//                       </TableCell>
//                       <TableCell align="right" sx={totalCell}>
//                         {formatCurrency(totalMonthly)}
//                       </TableCell>
//                       <TableCell align="right" sx={totalCell}>
//                         {formatCurrency(totalAnnual)}
//                       </TableCell>
//                     </TableRow>
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//             </>
//           );
//         })()}
//       </A4Page>

//       {/* ================= OTHER PAGES (EMPTY FOR NOW) =================
//       <A4Page headerSrc={company.header} footerSrc={company.footer} />
//       <A4Page headerSrc={company.header} footerSrc={company.footer} />
//       <A4Page headerSrc={company.header} footerSrc={company.footer} /> */}
//     </>
//   );
// };

// export default SmartMatrixAppointment;




import React from "react";
import {
  Box,
  Grid,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
} from "@mui/material";
import A4Page from "../../layout/A4Page";
import { formatCurrency } from "../../../utils/salaryCalculations";


// ================= TABLE CELL STYLES =================
const headCell = {
  fontWeight: 700,
  border: "1px solid #333",
  fontFamily: "Times New Roman",
};

const bodyCell = {
  border: "1px solid #333",
  fontFamily: "Times New Roman",
};

const totalCell = {
  fontWeight: 700,
  border: "1px solid #333",
  fontFamily: "Times New Roman",
};




/* ================= DATE FORMATTER ================= */
const formatDate = (date) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const formatOneCurrency = (salary) => {
  if (!salary) return "";

  const valueInLakhs = salary / 100000;

  // remove .0 if number is whole
  return valueInLakhs % 1 === 0 
    ? valueInLakhs.toString() 
    : valueInLakhs.toFixed(1);
};

const SmartMatrixAppointment = ({ company, data }) => {
  if (!company || !data) return null;

  return (
    <>
      {/* ================= FIRST PAGE ================= */}
      <A4Page headerSrc={company.header} footerSrc={company.footer}>
        <div
          className="a4-content-only"
          style={{
            position: "relative",
            paddingBottom: "40mm",
            fontFamily: '"Yu Gothic","Yu Gothic UI","Segoe UI",sans-serif',
            fontSize: "12pt",
            lineHeight: "1.5",
          }}
        >
          {/* ================= DATE (TOP RIGHT) ================= */}
          <div
            style={{
              position: "absolute",
              top: "-15mm",
              right: "0",
              fontSize: "11pt",
              fontFamily: '"Yu Gothic","Yu Gothic UI",sans-serif',
            }}
          >
            {formatDate(data.issueDate)}
          </div>

          {/* ================= ADDRESS ================= */}
          <p style={{ marginTop: "20mm", marginBottom: "6mm" }}>
            
              {data.mrms} {data.employeeName}
            
            <br />
            {data.address}
          </p>

          {/* ================= SALUTATION ================= */}
          <p style={{ marginBottom: "8mm" }}>
            Dear {data.employeeName.split(" ")[0]},
          </p>

          {/* ================= TITLE ================= */}
          <p
            style={{
              textAlign: "center",
              fontWeight: 700,
              textDecoration: "underline",
              marginBottom: "10mm",
              fontFamily: '"Yu Gothic","Yu Gothic UI",sans-serif',
              fontSize: "12pt",
            }}
          >
            Letter of Appointment
          </p>

          {/* ================= BODY ================= */}
          <p
            style={{
              textAlign: "justify",
              marginBottom: "6mm",
            }}
          >
            Further to your acceptance of our Letter of Offer dated{" "}
            <strong>{formatDate(data.issueDate)}</strong>, we are pleased to
            appoint you in our organization with effect from{" "}
            <strong>{formatDate(data.joiningDate)}</strong>, under the terms and
            conditions given below:
          </p>

          <p style={{ marginBottom: "6mm" }}>
            1. Your Designation will be <strong>“{data.position}”</strong>.
          </p>

          <p style={{ marginBottom: "6mm" }}>
            2. Your total emoluments will be{" "}
            <strong>Rs. {formatOneCurrency(data.salary)}</strong> lakh per
            annum.
          </p>

          <p style={{ textAlign: "justify", marginBottom: "6mm" }}>
            3. Full details of your pay package are given in the enclosure to
            this letter. However, please note that, LTA is payable after
            completion of one year of service, subject to your getting confirmed
            in the service. If the company provides accommodation/transit
            accommodation, appropriate deductions will be made for the same, as
            per the rules applicable.
          </p>

          <p style={{ textAlign: "justify", marginBottom: "6mm" }}>
            4. Whilst you are located abroad, the terms applicable will be
            intimated to you at the relevant point of time.
          </p>

          <p style={{ textAlign: "justify", marginBottom: "6mm" }}>
            5. You shall be due for salary revision not before one year from
            your date of joining.
          </p>

          <p style={{ textAlign: "justify", marginBottom: "10mm" }}>
            6. The Management reserves the right to change the different
            components/allowances in the total emoluments package, at its own
            discretion, at any time in future. However, your total monthly
            salary will be protected.
          </p>
        </div>
      </A4Page>

      <A4Page headerSrc={company.header} footerSrc={company.footer}>
        <div
          className="a4-content-only"
          style={{
            fontFamily: '"Yu Gothic","Yu Gothic UI","Segoe UI",sans-serif',
            fontSize: "12pt",
            lineHeight: "1.5",
            paddingTop: "20mm",
            paddingBottom: "40mm",
            marginTop: "-20mm",
          }}
        >
          <p style={{ textAlign: "justify", marginBottom: "6mm" }}>
            7. You will be on probation for a period of six months from the
            first of the calendar month following the date of your joining,
            after which you will be confirmed if your work is found
            satisfactory. The probation period can be extended at the discretion
            of the Company. You shall continue to be on probation, till your
            services are confirmed in writing by a letter of confirmation.In
            case your performance is not found satisfactory during such period
            of probation or extended period of probation and you shall be
            informed of the same in writing.
          </p>

          <p style={{ textAlign: "justify", marginBottom: "6mm" }}>
            8. Your services are terminable with one month’s notice on either
            side. The Company may, at its discretion, choose to terminate your
            services with one month’s total salary in lieu of notice period.
          </p>

          <p style={{ textAlign: "justify", marginBottom: "6mm" }}>
            9. The Company shall have the right to terminate your service
            without notice, if the information given by you at a time of
            interview or in the application is found to be incorrect or in case
            of any serious misconduct or if reference check leads to an adverse
            report of your credentials
          </p>

          <p style={{ marginBottom: "6mm" }}>
            10. This appointment is subject to your being medically fit.
          </p>

          <p style={{ marginBottom: "6mm" }}>
            11. The age of retirement will be 58 years.
          </p>

          <p style={{ textAlign: "justify", marginBottom: "6mm" }}>
            12. You will devote whole time and attention to your duties to your
            duties to promote the interests of the company and you will
            undertake herewith not to divulge or utilize any information, which
            may become known to you in the course of your duties concerning the
            Company’s trade secret or affairs
          </p>

          <p style={{ marginBottom: "6mm" }}>
            13. You will be required to give an undertaking on confidentiality
            and non-competition as per the document given to you separately.
          </p>

          <p style={{ marginBottom: "6mm" }}>
            14. You will not, without previous written permission of the
            Company, engage yourself in the services or employment of any other
            Company/Firm/Person.
          </p>

          <p style={{ marginBottom: "6mm" }}>
            15. You will keep the Company informed of any change in your
            residential address.
          </p>

          <p style={{ textAlign: "justify" }}>
            16. You will be required to attend to your work according to the
            exigencies and urgency of the various jobs, from time to time and
            you will adhere to the requirements of the Company.
          </p>
        </div>
      </A4Page>

      <A4Page headerSrc={company.header} footerSrc={company.footer}>
        <div
          className="a4-content-only"
          style={{
            fontFamily: '"Yu Gothic","Yu Gothic UI","Segoe UI",sans-serif',
            fontSize: "12pt",
            lineHeight: "1.5",
            paddingTop: "20mm",
            paddingBottom: "40mm",
          }}
        >
          <p style={{ textAlign: "justify", marginBottom: "6mm" }}>
            17. You will governed by the service conditions applicable to the
            employees of the Company as amended from time to time and you will
            abide by the same as well as by the terms of the agreement between
            yourself and the Company and also as per the undertaking on
            confidentiality and non-competition.
          </p>

          <p style={{ textAlign: "justify", marginBottom: "10mm" }}>
            18. The Company reserves the right to transfer you to any of our
            offices/factories/establishments/group companies, whether now in
            existence or to be set hereafter. However, your present posting will
            be at Pune.
          </p>

          <p style={{ marginBottom: "12mm" }}>
            You are requested to sign and return the duplicate copy of this
            letter as a token of your acceptance of the above terms and
            conditions.
          </p>

          {/* ================= SIGN-OFF ================= */}
          <div>
            <p style={{ marginBottom: "2mm" }}>
              {/* ⬆️ reduced margin to lift content slightly */}
              Yours faithfully,
            </p>

            <p style={{ marginBottom: "20mm" }}>I ACCEPT</p>

            <p
              style={{
                marginTop: "-9mm",
                marginBottom: "0",
                fontWeight: "400",
                fontFamily: "Verdana",
              }}
            >
              {/* ⬆️ negative margin lifts company name upward */}
              SmartMatrix Digital Services Pvt Ltd.
            </p>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ mt: "6mm" }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Box
                      component="img"
                      src={company?.stamp}
                      alt="Stamp"
                      sx={{ width: 110 }}
                    />
                  </Grid>
                  <Grid item>
                    <Box
                      component="img"
                      src={company?.signature}
                      alt="Signature"
                      sx={{ width: 140, mt: "18mm", ml: "-2mm" }}
                    />
                  </Grid>
                </Grid>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between", // ⬅️ LEFT & RIGHT alignment
                    alignItems: "flex-start",
                    mt: "2mm",
                    width: "100%",
                  }}
                >
                  {/* ================= LEFT — HR DETAILS ================= */}
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Verdana",
                        fontWeight: "400",
                      }}
                    >
                      {company?.hrName}
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: "Verdana",
                        fontWeight: "400",
                      }}
                    >
                      HR Manager-HR Services
                    </Typography>
                  </Box>

                  {/* ================= RIGHT — NAME & DATE ================= */}
                  {/* ================= RIGHT — NAME & DATE (SAME COLUMN) ================= */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column", // 🔑 vertical stacking
                      alignItems: "flex-end", // 🔑 same right edge
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily:
                          '"Yu Gothic","Yu Gothic UI","Segoe UI",sans-serif',
                        textAlign: "right",
                      }}
                    >
                      Name: {data.employeeName}
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily:
                          '"Yu Gothic","Yu Gothic UI","Segoe UI",sans-serif',
                        mt: "2mm", // 🔑 small Word-like gap
                        textAlign: "right",
                        ml: "42mm",
                      }}
                    >
                      Date : _________________
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </div>
        </div>
      </A4Page>

      {/* =================================================================== */}
      {/* ======================= 🔴 FOURTH PAGE START ====================== */}
      {/* =================================================================== */}

      {/* =================================================================== */}
      {/* ======================= 🔴 FOURTH PAGE START ====================== */}
      {/* =================================================================== */}

      <A4Page
        headerSrc={company?.header}
        footerSrc={company?.footer}
        contentTop="45mm"
        contentBottom="28mm"
      >
        {(() => {
          const round2 = (num) => Number(num.toFixed(2));

          const annualCTC = round2(
            Number(data.salary || data.ctc || data.annualSalary || 0)
          );

          const basicAnnual = round2(annualCTC * 0.4);
          const hraAnnual = round2(annualCTC * 0.18);
          const daAnnual = round2(annualCTC * 0.12);
          const specialAnnual = round2(annualCTC * 0.16);
          const foodAnnual = round2(annualCTC * 0.06);

          const usedAnnual =
            basicAnnual + hraAnnual + daAnnual + specialAnnual + foodAnnual;

          const miscAnnual = round2(annualCTC - usedAnnual);

          const salaryComponents = [
            {
              name: "Basic",
              monthly: round2(basicAnnual / 12),
              annual: basicAnnual,
            },
            {
              name: "House Rent Allowance",
              monthly: round2(hraAnnual / 12),
              annual: hraAnnual,
            },
            {
              name: "Dearness Allowance",
              monthly: round2(daAnnual / 12),
              annual: daAnnual,
            },
            {
              name: "Special Allowance",
              monthly: round2(specialAnnual / 12),
              annual: specialAnnual,
            },
            {
              name: "Food Allowance",
              monthly: round2(foodAnnual / 12),
              annual: foodAnnual,
            },
            {
              name: "Misc. Allowance",
              monthly: round2(miscAnnual / 12),
              annual: miscAnnual,
            },
          ];

          const totalMonthly = round2(
            salaryComponents.reduce((sum, r) => sum + r.monthly, 0)
          );

          const totalAnnual = round2(
            salaryComponents.reduce((sum, r) => sum + r.annual, 0)
          );

          return (
            <>
              {/* ================= TITLE ================= */}

              {/* ================= ISSUE DATE (TOP RIGHT) ================= */}
              <Box
                sx={{
                  position: "absolute",
                  top: "58mm", // ⬇️ pushes date just BELOW header
                  right: "18mm",
                  fontSize: "11pt",
                  fontFamily:
                    '"Yu Gothic","Yu Gothic UI","Segoe UI",sans-serif',
                }}
              >
                {formatDate(data.issueDate)}
              </Box>

              {/* ================= TITLE ================= */}

              {/* ================= EMPLOYEE DETAILS ================= */}
              <Box
                sx={{
                  fontFamily:
                    '"Yu Gothic","Yu Gothic UI","Segoe UI",sans-serif',
                  fontSize: "11pt",
                  lineHeight: "1.6",
                  mb: "6mm",
                  mt: "38mm",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "11pt",
                    fontWeight: "bold",
                    textAlign: "center",
                    mb: "6mm",
                    fontFamily:
                      '"Yu Gothic","Yu Gothic UI","Segoe UI",sans-serif',
                    textDecoration: "underline",
                  }}
                >
                  Salary Structure - Break Up
                </Typography>
                <Typography>
                  Name : {data.mrms} {data.employeeName}
                </Typography>
                <br />
                <Typography>Designation : {data.position}</Typography>
                <br />
                <Typography>
                  Date of Joining : {formatDate(data.joiningDate)}
                </Typography>
                <br />
                <Typography>EMP ID : {data.employeeId}</Typography>
              </Box>

              {/* ================= SALARY TABLE ================= */}
              <TableContainer
                sx={{
                  mt: "6mm",
                  mb: "8mm",
                  fontFamily:
                    '"Yu Gothic","Yu Gothic UI","Segoe UI",sans-serif',
                }}
              >
                <Table sx={{ border: "2px solid #333" }}>
                  <TableHead>
                    <TableRow
                      sx={{
                        backgroundColor: "rgba(215,121,34,0.9)",
                        fontFamily:
                          '"Yu Gothic","Yu Gothic UI","Segoe UI",sans-serif',
                      }}
                    >
                      <TableCell sx={headCell}>Salary Components</TableCell>
                      <TableCell align="center" sx={headCell}>
                        Per month (Rs.)
                      </TableCell>
                      <TableCell align="center" sx={headCell}>
                        Per Annum (Rs.)
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {salaryComponents.map((row, i) => (
                      <TableRow key={i}>
                        <TableCell sx={bodyCell}>{row.name}</TableCell>
                        <TableCell align="right" sx={bodyCell}>
                          {formatCurrency(row.monthly)}
                        </TableCell>
                        <TableCell align="right" sx={bodyCell}>
                          {formatCurrency(row.annual)}
                        </TableCell>
                      </TableRow>
                    ))}

                    {/* ================= TOTAL ROW ================= */}
                    <TableRow
                      sx={{
                        backgroundColor: "",
                        fontFamily:
                          '"Yu Gothic","Yu Gothic UI","Segoe UI",sans-serif',
                      }}
                    >
                      <TableCell sx={totalCell}>Monthly Gross Salary</TableCell>
                      <TableCell align="right" sx={totalCell}>
                        {formatCurrency(totalMonthly)}
                      </TableCell>
                      <TableCell align="right" sx={totalCell}>
                        {formatCurrency(totalAnnual)}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          );
        })()}
      </A4Page>

      {/* ================= OTHER PAGES (EMPTY FOR NOW) =================
      <A4Page headerSrc={company.header} footerSrc={company.footer} />
      <A4Page headerSrc={company.header} footerSrc={company.footer} />
      <A4Page headerSrc={company.header} footerSrc={company.footer} /> */}
    </>
  );
};

export default SmartMatrixAppointment;



