import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";

import raj from '../../../../../assets/images/rp/rajparekh.png';
import A4Page from '../../../../layout/A4Page';


import {

  formatCurrency,
} from "../../../../../utils/salaryCalculations";

const RPIncrement = ({ company, data }) => {


const getFinancialYear = (effectiveDate) => {
  if (!effectiveDate) return "";

  const year = new Date(effectiveDate).getFullYear();
  return `${year - 1} - ${year}`;
};



  /* ================= SALARY LOGIC (STANDARDIZED – SAME AS DEVCONS) ================= */

  // Helper to keep 2 decimals everywhere
  const round2 = (num) => Number(num.toFixed(2));

  // Source of truth
  const annualCTC = round2(Number(data.newCTC || 0));

  // Fixed annual components (percent based)
  const basicAnnual = round2(annualCTC * 0.40);
  const hraAnnual = round2(annualCTC * 0.18);
  const daAnnual = round2(annualCTC * 0.12);
  const specialAnnual = round2(annualCTC * 0.16);
  const foodAnnual = round2(annualCTC * 0.06);

  // Sum of fixed components
  const usedAnnual =
    basicAnnual +
    hraAnnual +
    daAnnual +
    specialAnnual +
    foodAnnual;

  // ✅ Adjustment component (guarantees exact CTC)
  const miscAnnual = round2(annualCTC - usedAnnual);

  // Monthly breakup (derived ONLY from final annual values)
  const basicSalary = round2(basicAnnual / 12);
  const hra = round2(hraAnnual / 12);
  const dearnessAllowance = round2(daAnnual / 12);
  const specialAllowance = round2(specialAnnual / 12);
  const foodAllowance = round2(foodAnnual / 12);
  const miscAllowance = round2(miscAnnual / 12);



  const salaryComponents = [
    { name: "Basic", monthly: basicSalary, annual: basicAnnual },
    { name: "House Rent Allowance", monthly: hra, annual: hraAnnual },
    { name: "Dearness Allowance", monthly: dearnessAllowance, annual: daAnnual },
    { name: "Special Allowance", monthly: specialAllowance, annual: specialAnnual },
    { name: "Food Allowance", monthly: foodAllowance, annual: foodAnnual },
    { name: "Misc. Allowance", monthly: miscAllowance, annual: miscAnnual },
  ];


  const totalMonthly = round2(
    salaryComponents.reduce((sum, row) => sum + row.monthly, 0)
  );

  const totalAnnual = round2(
    salaryComponents.reduce((sum, row) => sum + row.annual, 0)
  );

  // Alias for existing UI usage
  const totalEarnings = totalMonthly;
  const ctc = totalAnnual;



  return (


    <>
      <A4Page
        headerSrc={company.header}
        footerSrc={company.footer}
      // watermarkSrc={company.watermark}
      >
        {/* ======================================================
          PAGE 1 – INCREMENT LETTER (UNCHANGED)
      ====================================================== */}
        <Box sx={{ position: "relative", zIndex: 1, color: "#000" }}>
          <Typography align="right" mb={4}>
            {new Date(data.issueDate).toLocaleDateString("en-US", {
              month: "long",
              day: "2-digit",
              year: "numeric",
            })}
          </Typography>

          <Typography mb={3}>Dear {data.employeeName},</Typography>

          <Typography mb={3}>
            At R P Business Solutions, employee performance forms the core basis
            for annual compensation review and career enhancement apart from
            ensuring parity.
          </Typography>

          <Typography mb={3}>
            Your performance has been reviewed and your performance banding for
            the year{" "}
            {getFinancialYear(data.effectiveDate)}{" "}
            is <strong>"Met Expectation".</strong>
          </Typography>


          <Typography mb={3}>
            In recognition of your performance your compensation has been
            revised to{" "}<strong>{formatCurrency(ctc)}</strong> per annum effective{" "}
            <strong>
              {new Date(data.effectiveDate).toLocaleDateString("en-US", {
                month: "long",
                day: "2-digit",
                year: "numeric",
              })}
            </strong>
            .
          </Typography>

          <Typography mb={4}>
            Details of your revised compensation are given in Salary Annexure.
          </Typography>

          <Typography mb={4}>
            We look forward to your very active participation and contribution
            on our journey of scaling newer heights.
          </Typography>

          <Typography mb={6}>
            Wishing you a happy and rewarding career with R P Business
            Solutions LLP.
          </Typography>

          <Typography mb={4} >Yours Sincerely,</Typography>

          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <img
              src={raj}
              alt="Signature"
              style={{ height: 60, marginRight: 25 }}
            />
            <img src={company.stamp} alt="Stamp" style={{ height: 90 }} />
          </Box>

          <Typography fontWeight={600}>{company.ceoName}</Typography>
          <Typography>CEO & Managing Director</Typography>
        </Box>

      </A4Page>


      {/* ======================================================
          PAGE 2 – SALARY ANNEXURE
      ====================================================== */}

      <A4Page
        headerSrc={company.header}
        footerSrc={company.footer}>
        <Box>


          <Box >
            <Typography
              align="center"
              fontWeight={600}
              mb={4}
              style={{ textDecoration: "underline" }}
            >
              Salary Annexure
            </Typography>


            {/* EMPLOYEE INFO */}
            <Box mb={3} fontSize="16px">
              <Typography>Employee Code : {data.employeeId}</Typography>
              <Typography>Employee Name : {data.employeeName}</Typography>
              <Typography>
                Effective Date :{" "}
                {new Date(data.effectiveDate).toLocaleDateString("en-US", {
              month: "long",
              day: "2-digit",
              year: "numeric",
            })}
              </Typography>
            </Box>

            {/* TABLE */}
            <Table
              sx={{
                width: "100%",
                border: "1px solid black",
                borderCollapse: "collapse",
                "& th, & td": {
                  border:"1px solid black",
                  padding:"5px",
                  fontSize:"15px",
                  lineHeight:1.2,
                },
              }}
            >
              <TableBody>
                <TableRow sx={{ backgroundColor: "#ff0000" }}>
                  <TableCell sx={{ color: "#fff", fontWeight: 700 }}>
                    Monthly Component
                  </TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 700 }} align="right">
                    Amount (Rs.)
                  </TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 700 }}>
                    Yearly Component
                  </TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 700 }} align="right">
                    Amount (Rs.)
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Basic</TableCell>
                  <TableCell align="right">{formatCurrency(basicSalary)}</TableCell>
                  <TableCell></TableCell>
                  <TableCell align="right">{formatCurrency(basicAnnual)}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>House Rent Allowance</TableCell>
                  <TableCell align="right">{formatCurrency(hra)}</TableCell>
                  <TableCell></TableCell>
                  <TableCell align="right">{formatCurrency(hraAnnual)}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Dearness Allowance</TableCell>
                  <TableCell align="right">
                    {formatCurrency(dearnessAllowance)}
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell align="right">{formatCurrency(daAnnual)}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Special Allowance</TableCell>
                  <TableCell align="right">
                    {formatCurrency(specialAllowance)}
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell align="right">
                    {formatCurrency(specialAnnual)}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Food Allowance</TableCell>
                  <TableCell align="right">
                    {formatCurrency(foodAllowance)}
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell align="right">
                    {formatCurrency(foodAnnual)}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Misc. Allowance</TableCell>
                  <TableCell align="right">
                    {formatCurrency(miscAllowance)}
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell align="right">
                    {formatCurrency(miscAnnual)}
                  </TableCell>
                </TableRow>

                <TableRow sx={{ backgroundColor: "#ff0000" }}>
                  <TableCell sx={{ color: "#fff", fontWeight: 700 }}>
                    Monthly Gross
                  </TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 700 }} align="right">
                    {formatCurrency(totalEarnings)}
                  </TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 700 }}>
                    Annual CTC
                  </TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 700 }} align="right">
                    {formatCurrency(ctc)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <Typography mt={3} fontSize="16px" textAlign="left" color="black">
              Please note that the details in this communication are confidential
              and you are requested not to share the same with others.
            </Typography>
          </Box>
        </Box>
      </A4Page>

    </>
  );
};

export default RPIncrement;


