import React from "react";
import {
  Box,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableCell,
  TableBody,
} from "@mui/material";
import A4Layout from "../../../../layout/A4Page";
import { calculateIncrement, formatCurrency, numberToWords } from "../../../../../utils/salaryCalculations";
import KritiSign from "../../../../../assets/images/Newagecloud/Kirti Kumar.png";

/* ================= DATE FORMAT ================= */
const formatDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
    : "";

/* ================= STYLES ================= */
const TEXT = {
  fontFamily: "Times New Roman, serif",
  fontSize: "14px",
  lineHeight: 1.8,
};

const CELL = {
  border: "1px solid #000",
  padding: "5px",
  fontSize: "13px",
};

/* ================= FIXED SALARY DATA ================= */
const salaryComponents = [
  { name: "Basic", monthly: 4000, annual: 48000 },
  { name: "House Rent Allowance", monthly: 1800, annual: 21600 },
  { name: "Dearness Allowance", monthly: 1200, annual: 14400 },
  { name: "Special Allowance", monthly: 1600, annual: 19200 },
  { name: "Food Allowance", monthly: 600, annual: 7200 },
  { name: "Misc. Allowance", monthly: 800, annual: 9600 },
];

/* ================= MAIN COMPONENT ================= */
const NeweageIncrement = ({ company, data }) => {
  if (company?.name === "Cubeage Technologies Services Pvt. Ltd.") {
    return <CubeageIncrementLetter data={data} company={company} />;
  }

  const newCTC = parseFloat(data.newCTC); // annual salary


  // === Annual components (percentages of totalSalaryAnually) ===
  const totalAnnual = newCTC;
  const basicAnnual = newCTC * 0.4013;
  const hraAnnual = newCTC * 0.1798;
  const conveyanceAnnual = newCTC * 0.1599;
  const medicAnnual = newCTC * 0.1394;
  const specialAnnual = newCTC * 0.1196;

  // === Monthly components ===
  const totalMonthly = basicAnnual / 12 + hraAnnual / 12 + conveyanceAnnual / 12 + medicAnnual / 12 + specialAnnual / 12;
  const basicMonthly = Math.round(basicAnnual / 12);
  const hraMonthly = Math.round(hraAnnual / 12);
  const conveyanceMonthly = Math.round(conveyanceAnnual / 12);
  const medicMonthly = Math.round(medicAnnual / 12);
  const specialMonthly = Math.round(specialAnnual / 12);

  // Calculate increment details
  const incrementDetails = calculateIncrement(
    data.currentCTC || 350000, // Default to 3.5 LPA
    data.incrementPercentage || 10 // Default to 10% increment
  );

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  // Calculate previous year and issue year dynamically
  const issueDate = data.issueDate ? new Date(data.issueDate) : new Date();
  const issueYear = issueDate.getFullYear();
  const prevYear = issueYear - 1;

  const {
    employeeName = "",
    employeeId = "",
    effectiveDate = "",
  } = data;


  const monthlyPF = 3750;
  const annualPF = monthlyPF * 12;

  const tableCellStyle = {
    border: "1px solid #333",
    fontSize: "9.75pt",
    py: "0.35mm",
  };

  return (
    <>
      {/* =====================================================
          PAGE 1 : INCREMENT LETTER
      ====================================================== */}
      <A4Layout
        headerSrc={company.headerImage}
        footerSrc={company.footerImage}

      >
        {/* Date */}
        <Typography align="right" sx={{ ...TEXT, mb: 6 }}>
          {formatDate(issueDate)}
        </Typography>

        {/* Greeting */}
        <Typography sx={{ ...TEXT, mb: 4 }}>
          Dear {employeeName.split(" ")[0]},
        </Typography>

        <Typography sx={{ ...TEXT, mb: 3 }}>
          After careful evaluation of your contributions, achievements, and
          dedication to your role over the past year, I am pleased to inform you
          that you have demonstrated exceptional performance. Your hard work,
          commitment, and positive impact on our team have not gone unnoticed.
        </Typography>

        <Typography sx={{ ...TEXT, mb: 3 }}>
          As a result of your outstanding performance, I am delighted to inform
          you that you will be receiving a salary increment. This increase is a
          reflection of your valuable contributions to our organisation and the
          high level of professionalism you consistently demonstrate.
        </Typography>

        <Typography sx={{ ...TEXT, mb: 3 }}>
          Your new salary will be{" "}
          <b>₹{newCTC.toLocaleString("en-IN")}</b> per annum, effective{" "}
          <b>{formatDate(effectiveDate)}</b>. Please note that this adjustment
          will be reflected in your next pay check.
        </Typography>

        <Typography sx={{ ...TEXT, mb: 3 }}>
          I want to take this opportunity to express my appreciation for your
          continued dedication and hard work. Your contributions are integral to
          our success, and we look forward to your ongoing contributions to our
          team.
        </Typography>

        <Typography sx={{ ...TEXT, mb: 3 }}>
          If you have any questions or would like to discuss this further, please
          do not hesitate to reach out to me.
        </Typography>

        <Typography sx={{ ...TEXT, mb: 4 }}>
          Once again, congratulations on this well-deserved recognition, and
          thank you for your continued commitment to excellence.
        </Typography>

        <Typography sx={{ ...TEXT, mb: 6 }}>Best regards,</Typography>


        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", mb: 2, marginRight: "-20px" }}>
          <Box>

            <img src={KritiSign} alt="Signature" style={{ height: '50px' }} />
            <img src={company.stamp} alt="Stamp" style={{ height: '100px' }} />

            <Typography sx={{ ...TEXT, fontWeight: "bold" }}>
              CEO & Managing Director
            </Typography>

          </Box>
        </Box>
      </A4Layout>

      {/* =====================================================
          PAGE 2 : SALARY ANNEXURE
      ====================================================== */}
      <A4Layout
        headerSrc={company.headerImage}
        footerSrc={company.footerImage}

      >
        <Typography align="center" sx={{ ...TEXT, mb: 4, fontWeight: "bold" }}>
          Salary Annexure
        </Typography>

        {/* Employee Info */}
        <Box sx={{ mb: 3 }}>
          <Typography sx={TEXT}>
            <b>Employee Code</b> : {employeeId}
          </Typography>
          <Typography sx={TEXT}>
            <b>Employee Name</b> : {employeeName}
          </Typography>
          <Typography sx={TEXT}>
            <b>Effective Date</b> : {formatDate(effectiveDate)}
          </Typography>
        </Box>

        {/* Salary Comparison Table */}
        <TableContainer sx={{ mb: "4mm" }}>
          <Table
            size="small"
            sx={{
              border: "1px solid #333",
              borderCollapse: "collapse",
              width: "100%",
              color: "rgb(0, 0, 0)",
            }}
          >
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: "#32a1c2ff !important",
                  "& th": {
                    color: "#000 !important",
                    fontWeight: 600,
                    fontSize: "10pt",
                    border: "1px solid #333",
                    py: "0.4mm",
                  },
                }}
              >
                <TableCell>Salary Components</TableCell>
                <TableCell align="center">Per month (Rs.)</TableCell>
                <TableCell align="center">Per Annum (Rs.)</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {salaryComponents
                .filter((row) => row.name !== "Misc")
                .map((row, i) => (
                  <TableRow key={i}>
                    <TableCell sx={tableCellStyle}>{row.name}</TableCell>
                    <TableCell align="center" sx={tableCellStyle}>
                      {formatCurrency(row.monthly)}
                    </TableCell>
                    <TableCell align="center" sx={tableCellStyle}>
                      {formatCurrency(row.annual)}
                    </TableCell>
                  </TableRow>
                ))}


              {/* Static PF Row */}
              <TableRow>
                <TableCell sx={tableCellStyle}>
                  Provident Fund (PF)
                </TableCell>
                <TableCell align="center" sx={tableCellStyle}>
                  {formatCurrency(monthlyPF)}
                </TableCell>
                <TableCell align="center" sx={tableCellStyle}>
                  {formatCurrency(annualPF)}
                </TableCell>
              </TableRow>

              {/* Total Row */}
              <TableRow
                sx={{
                  backgroundColor: "#32a1c2ff !important",
                  "& td": {
                    color: "#000 !important",
                    fontWeight: 600,
                    fontSize: "10pt",
                    border: "1px solid #333",
                    py: "0.4mm",
                  },
                }}
              >
                <TableCell>Total Monthly Gross Salary</TableCell>
                <TableCell align="center">
                  {formatCurrency(totalMonthly)}
                </TableCell>
                <TableCell align="center">
                  {formatCurrency(totalAnnual)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>



        <Typography sx={{ ...TEXT, mt: 4 }}>
          Please note that the details in this communication are confidential and
          you are requested not to share the same with others.
        </Typography>

      </A4Layout>
    </>
  );
};

export default NeweageIncrement;