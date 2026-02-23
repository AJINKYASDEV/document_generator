// import React, { useMemo } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableRow,
// } from "@mui/material";
// import A4Layout from "../../../../layout/A4Page";

// import {
//   getProfessionalTax,
//   numberToWords,
//   formatCurrency,
// } from "../../../../../utils/salaryCalculations";

// /* ================= DATE FORMAT ================= */
// const formatDate = (date) =>
//   date
//     ? new Date(date).toLocaleDateString("en-GB", {
//         day: "2-digit",
//         month: "long",
//         year: "numeric",
//       })
//     : "";

// /* ================= STYLES ================= */
// const CELL = {
//   border: "1px solid #000",
//   padding: "6px",
//   fontSize: "13px",
// };

// const CENTER_CELL = {
//   ...CELL,
//   textAlign: "center",
// };

// /* ================= COMPONENT ================= */
// const NeweageSalarySlip = ({ company, data }) => {
//   if (!company || !data) return null;

//   const {
//     month,
//     employeeName,
//     employeeId,
//     gender,
//     doj,
//     department,
//     pan,
//     designation,
//     dob,
//     mode,
//     accountNo,
//     workdays,
//     totalSalary,
//   } = data;

//   /* ================= SALARY CALCULATION ================= */
//   const {
//     basicSalary,
//     hra,
//     dearnessAllowance,
//     foodAllowance,
//     miscAllowance,
//     pf,
//     professionalTax,
//   } = useMemo(() => {
//     const gross = Number(totalSalary) || 0;

//     const basic = Math.round(gross * 0.40);
//     const hraCalc = Math.round(basic * 0.40);
//     const da = Math.round(gross * 0.10);
//     const food = Math.round(gross * 0.10);

//     const pfCalc = Math.round(basic * 0.12);
//     const pt = getProfessionalTax(month, gross);

//     const misc = gross - (basic + hraCalc + da + food);

//     return {
//       basicSalary: basic,
//       hra: hraCalc,
//       dearnessAllowance: da,
//       foodAllowance: food,
//       miscAllowance: misc,
//       pf: pfCalc,
//       professionalTax: pt,
//     };
//   }, [totalSalary, month]);

//   /* ================= EARNINGS & DEDUCTIONS ================= */
//   const earnings = [
//     { label: "BASIC", value: basicSalary },
//     { label: "HRA", value: hra },
//     { label: "DEARNESS ALLOWANCE", value: dearnessAllowance },
//     { label: "FOOD ALLOWANCE", value: foodAllowance },
//     { label: "PF", value: 3750},
//   ];

//   const deductions = [
//     { label: "Other Deductions", value: 1500 },
//     { label: "PT", value: professionalTax },
//   ];

//   const totalEarnings = earnings.reduce((sum, e) => sum + e.value, 0);
//   const totalDeductions = deductions.reduce((sum, d) => sum + d.value, 0);

//   const netPay = totalEarnings - totalDeductions; // ✅ Correct Net Pay

//   const formatMonthYear = (month) =>
//     month
//       ? new Date(`${month}-01`).toLocaleDateString("en-GB", {
//           month: "long",
//           year: "numeric",
//         })
//       : "";

//   /* ================= RENDER ================= */
//   return (
//     <A4Layout headerSrc={company.headerImage} footerSrc={company.footerImage}>
//       <Table>
//         <TableBody>

//           {/* HEADER */}
//           <TableRow>
//             <TableCell colSpan={4} sx={{ ...CELL, textAlign: "center", fontWeight: "bold", fontSize: "16px" }}>
//               NEWEAGE CLOUD SOFTWARE SERVICES PVT. LTD.
//             </TableCell>
//           </TableRow>

//           <TableRow>
//             <TableCell colSpan={4} sx={{ ...CELL, textAlign: "center", fontSize: "13px" }}>
//               <b>Office No-4B, Second Floor, Ganesham Wing-A, On BRTS Road,
//               Pimple Saudagar, Pune - 411027</b>
//             </TableCell>
//           </TableRow>

//           <TableRow>
//             <TableCell colSpan={4} sx={{ ...CELL, textAlign: "center" }}>
//              <b>Salary Slip {formatMonthYear(month)}</b>
//             </TableCell>
//           </TableRow>

//           {/* EMPLOYEE DETAILS */}
//           <TableRow>
//             <TableCell sx={CELL}><b>Employee Name</b></TableCell>
//             <TableCell sx={CELL}>{employeeName}</TableCell>
//             <TableCell sx={CELL}>Employee ID</TableCell>
//             <TableCell sx={CELL}>{employeeId}</TableCell>
//           </TableRow>

//           <TableRow>
//             <TableCell sx={CELL}><b>Gender<br/>DOJ</b></TableCell>
//             <TableCell sx={CELL}>{gender}<br/> {formatDate(doj)}</TableCell>
//             <TableCell sx={CELL}>Department<br/>PAN Number</TableCell>
//             <TableCell sx={CELL}>{department} <br />{pan}</TableCell>
//           </TableRow>

//           <TableRow>
//             <TableCell sx={CELL}><b>Designation</b></TableCell>
//             <TableCell sx={CELL}>{designation}</TableCell>
//             <TableCell sx={CELL}>DOB</TableCell>
//             <TableCell sx={CELL}>{dob}</TableCell>
//           </TableRow>

//           <TableRow>
//             <TableCell sx={CELL}><b>Mode</b></TableCell>
//             <TableCell sx={CELL}>
//               Bank Name:{mode}<br />
//               Bank Ac No:{accountNo}
//             </TableCell>
//             <TableCell sx={CELL}>Working Days</TableCell>
//             <TableCell sx={CELL}>{workdays}</TableCell>
//           </TableRow>

//           {/* SALARY TABLE HEADER */}
//           <TableRow>
//             <TableCell sx={CELL}><b>Earnings</b></TableCell>
//             <TableCell sx={CENTER_CELL}><b>Amount</b></TableCell>
//             <TableCell sx={CENTER_CELL}><b>Deductions</b></TableCell>
//             <TableCell sx={CENTER_CELL}><b>Amount</b></TableCell>
//           </TableRow>

         
//                      <TableRow>
//                        <TableCell>BASIC</TableCell>
//                        <TableCell align="right">{formatCurrency(BASIC)}</TableCell>
//                        <TableCell>PF</TableCell>
//                        <TableCell align="right">{formatCurrency(pf)}</TableCell>
//                      </TableRow>
         
//                      <TableRow>
//                        <TableCell>HRA</TableCell>
//                        <TableCell align="right">{formatCurrency(HRA)}</TableCell>
//                        <TableCell>PT</TableCell>
//                        <TableCell align="right">{formatCurrency(PROFESSIONAL_TAX)}</TableCell>
//                      </TableRow>
         
//                      <TableRow>
//                        <TableCell>DEARNESS ALLOWANCE</TableCell>
//                        <TableCell align="right">{formatCurrency(DA)}</TableCell>
//                        <TableCell>Other Deduction</TableCell>
//                        <TableCell align="right">{formatCurrency(OTHER_DEDUCTION)}</TableCell>
//                      </TableRow>
         
//                      <TableRow>
//                        <TableCell>SPECIAL ALLOWANCE</TableCell>
//                        <TableCell align="right">{formatCurrency(SPECIAL)}</TableCell>
//                        <TableCell />
//                        <TableCell />
//                      </TableRow>
         
//                      <TableRow>
//                        <TableCell>FOOD ALLOWANCE</TableCell>
//                        <TableCell align="right">{formatCurrency(FOOD)}</TableCell>
//                        <TableCell />
//                        <TableCell />
//                      </TableRow>
         
//                      <TableRow>
//                        <TableCell>PF</TableCell>
//                        <TableCell align="right">{formatCurrency(pf)}</TableCell>
//                        <TableCell />
//                        <TableCell />
//                      </TableRow>
//           {/* TOTAL ROW */}
//           <TableRow>
//             <TableCell sx={CELL}><b>Total</b></TableCell>
//             <TableCell sx={CENTER_CELL}>{formatCurrency(totalEarnings)}</TableCell>
//             <TableCell sx={CENTER_CELL}><b>Total Deduction</b></TableCell>
//             <TableCell sx={CENTER_CELL}>{formatCurrency(totalDeductions)}</TableCell>
//           </TableRow>

//           {/* NET PAY ROW */}
//           <TableRow>
//             <TableCell sx={CELL}><b>Net Pay</b></TableCell>
//             <TableCell sx={CENTER_CELL}>{formatCurrency(netPay)}</TableCell> {/* Net Pay in first Amount column */}
//             <TableCell sx={CELL}></TableCell>       {/* Empty Deductions label */}
//             <TableCell sx={CENTER_CELL}></TableCell> {/* Empty second Amount column */}
//           </TableRow>

//           {/* IN WORDS */}
//           <TableRow>
//             <TableCell sx={CELL}><b>In Words</b></TableCell>
//             <TableCell colSpan={3} sx={CELL}>
//               {numberToWords(netPay)}
//             </TableCell>
//           </TableRow>

//           {/* SIGNATURE & STAMP */}
//           <TableRow>
//             <TableCell sx={{ border: "1px solid #000", paddingLeft: "150px" }}></TableCell>
//             <TableCell sx={{ border: "1px solid #000", paddingLeft: "150px" }}></TableCell>

//             <TableCell
//               sx={{
//                 border: "1px solid #000",
//                 verticalAlign: "top",
//                 padding: "10px",
//                 width: "50%",
//               }}
//             >
//               {company.signature && (
//                 <img
//                   src={company.signature}
//                   alt="Signature"
//                   style={{ height: "60px", marginBottom: "6px" }}
//                 />
//               )}
//             </TableCell>

//             <TableCell
//               sx={{
//                 border: "1px solid #000",
//                 verticalAlign: "top",
//                 padding: "10px",
//                 width: "50%",
//                 textAlign: "center",
//               }}
//             >
//               {company.stamp && (
//                 <img
//                   src={company.stamp}
//                   alt="Stamp"
//                   style={{ height: "100px" }}
//                 />
//               )}
//             </TableCell>
//           </TableRow>

//         </TableBody>
//       </Table>
//     </A4Layout>
//   );
// };

// export default NeweageSalarySlip;
 
import React, { useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import A4Layout from "../../../../layout/A4Page";
import {
  getProfessionalTax,
  numberToWords,
  formatCurrency,
} from "../../../../../utils/salaryCalculations";

/* ================= DATE FORMAT ================= */
const formatDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "";

/* ================= STYLES ================= */
const CELL = {
  border: "1px solid #000",
  padding: "6px",
  fontSize: "13px",
};

const CENTER_CELL = {
  ...CELL,
  textAlign: "center",
};

/* ================= COMPONENT ================= */
const NeweageSalarySlip = ({ company, data }) => {
  if (!company || !data) return null;

  const {
    month,
    employeeName,
    employeeId,
    gender,
    doj,
    department,
    pan,
    designation,
    dob,
    mode,
    accountNo,
    workdays,
    totalSalary,
    otherDeduction = 1500,
  } = data;

  /* ================= SALARY CALCULATION ================= */
  const {
    basicSalary,
    hra,
    dearnessAllowance,
    foodAllowance,
    miscAllowance,
    pf,
    professionalTax,
    totalEarnings,
    totalDeductions,
    netPay,
  } = useMemo(() => {
    const gross = Number(totalSalary) || 0;

    const basicSalary = Math.round(gross * 0.4);
    const hra = Math.round(gross * 0.18);
    const dearnessAllowance = Math.round(gross * 0.12);
    const foodAllowance = Math.round(gross * 0.14);
    const specialAllowance = Math.round(gross * 0.16);

    const pf = 3750;
    const professionalTax = getProfessionalTax(month, gross);

    const totalEarnings =
      basicSalary +
      hra +
      dearnessAllowance +
      foodAllowance +
      specialAllowance;

    const totalDeductions =
      pf + professionalTax + Number(otherDeduction);

    const netPay = totalEarnings - totalDeductions;

    return {
      basicSalary,
      hra,
      dearnessAllowance,
      foodAllowance,
      miscAllowance: specialAllowance,
      pf,
      professionalTax,
      totalEarnings,
      totalDeductions,
      netPay,
    };
  }, [totalSalary, month, otherDeduction]);

  return (
    <A4Layout headerSrc={company.headerImage} footerSrc={company.footerImage}>
      <Table sx={{ borderCollapse: "collapse", width: "100%" }}>
        <TableBody>

          {/* HEADER */}
          <TableRow>
            <TableCell colSpan={4} sx={{ ...CELL, textAlign: "center", fontWeight: "bold", fontSize: "16px" }}>
              NEWEAGE CLOUD SOFTWARE SERVICES PVT. LTD.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={4} sx={{ ...CELL, textAlign: "center" }}>
              Office No-4B, Second Floor, Ganesham Wing-A, On BRTS Road,
              Pimple Saudagar, Pune - 411027
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={4} sx={{ ...CELL, textAlign: "center" }}>
              <b>
                Salary Slip{" "}
                {month
                  ? new Date(`${month}-01`).toLocaleDateString("en-GB", {
                      month: "long",
                      year: "numeric",
                    })
                  : ""}
              </b>
            </TableCell>
          </TableRow>

          {/* EMPLOYEE DETAILS */}
          <TableRow>
            <TableCell sx={CELL}><b>Employee Name</b></TableCell>
            <TableCell sx={CELL}>{employeeName}</TableCell>
            <TableCell sx={CELL}><b>Employee ID</b></TableCell>
            <TableCell sx={CELL}>{employeeId}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={CELL}><b>Gender / DOJ</b></TableCell>
            <TableCell sx={CELL}>{gender} / {formatDate(doj)}</TableCell>
            <TableCell sx={CELL}><b>Department / PAN</b></TableCell>
            <TableCell sx={CELL}>{department} / {pan}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={CELL}><b>Designation</b></TableCell>
            <TableCell sx={CELL}>{designation}</TableCell>
            <TableCell sx={CELL}><b>DOB</b></TableCell>
            <TableCell sx={CELL}>{dob}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={CELL}><b>Mode</b></TableCell>
            <TableCell sx={CELL}>
              Bank: {mode} <br />
              A/C No: {accountNo}
            </TableCell>
            <TableCell sx={CELL}><b>Working Days</b></TableCell>
            <TableCell sx={CELL}>{workdays}</TableCell>
          </TableRow>

          {/* SALARY HEADER */}
          <TableRow>
            <TableCell sx={CELL}><b>Earnings</b></TableCell>
            <TableCell sx={CENTER_CELL}><b>Amount</b></TableCell>
            <TableCell sx={CENTER_CELL}><b>Deductions</b></TableCell>
            <TableCell sx={CENTER_CELL}><b>Amount</b></TableCell>
          </TableRow>

          {/* ROWS */}
          <TableRow>
            <TableCell sx={CELL}>BASIC</TableCell>
            <TableCell sx={{ ...CELL, textAlign: "right" }}>{formatCurrency(basicSalary)}</TableCell>
            <TableCell sx={CELL}>PF</TableCell>
            <TableCell sx={{ ...CELL, textAlign: "right" }}>{formatCurrency(pf)}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={CELL}>HRA</TableCell>
            <TableCell sx={{ ...CELL, textAlign: "right" }}>{formatCurrency(hra)}</TableCell>
            <TableCell sx={CELL}>PT</TableCell>
            <TableCell sx={{ ...CELL, textAlign: "right" }}>{formatCurrency(professionalTax)}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={CELL}>DEARNESS ALLOWANCE</TableCell>
            <TableCell sx={{ ...CELL, textAlign: "right" }}>{formatCurrency(dearnessAllowance)}</TableCell>
            <TableCell sx={CELL}>Other Deduction</TableCell>
            <TableCell sx={{ ...CELL, textAlign: "right" }}>{formatCurrency(otherDeduction)}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={CELL}>SPECIAL ALLOWANCE</TableCell>
            <TableCell sx={{ ...CELL, textAlign: "right" }}>{formatCurrency(miscAllowance)}</TableCell>
            <TableCell sx={CELL}></TableCell>
            <TableCell sx={CELL}></TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={CELL}>FOOD ALLOWANCE</TableCell>
            <TableCell sx={{ ...CELL, textAlign: "right" }}>{formatCurrency(foodAllowance)}</TableCell>
            <TableCell sx={CELL}></TableCell>
            <TableCell sx={CELL}></TableCell>
          </TableRow>

           <TableRow>
            <TableCell sx={CELL}>PF</TableCell>
            <TableCell sx={{ ...CELL, textAlign: "right" }}>3750</TableCell>
            <TableCell sx={CELL}></TableCell>
            <TableCell sx={CELL}></TableCell>
          </TableRow>


          {/* TOTAL */}
          <TableRow>
            <TableCell sx={CELL}><b>Total</b></TableCell>
            <TableCell sx={CENTER_CELL}><b>{formatCurrency(totalEarnings)}</b></TableCell>
            <TableCell sx={CENTER_CELL}><b>Total Deduction</b></TableCell>
            <TableCell sx={CENTER_CELL}><b>{formatCurrency(totalDeductions)}</b></TableCell>
          </TableRow>

          {/* NET PAY */}
          <TableRow>
            <TableCell sx={CELL}><b>Net Pay</b></TableCell>
            <TableCell sx={CENTER_CELL}><b>{formatCurrency(netPay)}</b></TableCell>
            <TableCell sx={CELL}></TableCell>
            <TableCell sx={CELL}></TableCell>
          </TableRow>

          {/* IN WORDS */}
          <TableRow>
            <TableCell sx={CELL}><b>In Words</b></TableCell>
            <TableCell colSpan={3} sx={CELL}>{numberToWords(netPay)}</TableCell>
          </TableRow>
           <TableRow>
              <TableCell
                sx={{ border: "1px solid #000", paddingLeft: "150px" }}
              ></TableCell>

              <TableCell
                sx={{ border: "1px solid #000", paddingLeft: "150px" }}
              ></TableCell>
              <TableCell
                sx={{
                  border: "1px solid #000",
                  verticalAlign: "top",
                  padding: "10px",
                  width: "50%",
                  textAlign: "center",
                }}
              >
                {company.stamp && (
                  <img
                    src={company.stamp}
                    alt="Stamp"
                    style={{ height: "100px" }}
                  />
                )}
              </TableCell>

              <TableCell
                sx={{
                  border: "1px solid #000",
                  verticalAlign: "top",
                  padding: "10px",
                  width: "50%",
                }}
              >
                {company.signature && (
                  <img
                    src={company.signature}
                    alt="Signature"
                    style={{ height: "60px", marginBottom: "6px" }}

                  />

                )}
                <Typography textAlign="Center"><b>Signature</b></Typography>

              </TableCell>


            </TableRow>
          </TableBody>
        </Table>
      

        
     
    </A4Layout>
  );
};

export default NeweageSalarySlip;
