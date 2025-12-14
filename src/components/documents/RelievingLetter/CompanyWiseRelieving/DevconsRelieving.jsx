
import React from "react";
import { Box, Typography, Container } from "@mui/material";

import headerImg from "../../assets/devcon head.png";
import footerImg from "../../assets/Devcons Footer.png";
import stampImg from "../../assets/DEVCONSSTAMPS.png";
import signatureImg from "../../assets/mayur patil sign.png";

function Relievingletter() {
  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: "#fff",
        padding: 0,
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        width: { xs: "100%", md: "210mm" }, // A4 width
      }}
    >
      {/* HEADER */}
      <Box>
        <img
          src={headerImg}
          alt="Header"
          style={{ width: "100%", display: "block" }}
        />
      </Box>

      {/* BODY */}
      <Box sx={{ px: { xs: 2, sm: 4 }, py: 4 }}>
        <Typography align="center" fontWeight="bold" sx={{ mb: 4 }}>
          Relieving Letter
        </Typography>

        {/* Name + Date */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            mb: 3,
          }}
        >
          <Typography>
            <strong>Mr. Rohit Nagesh Boddu</strong>
            <br />
            Software Test Engineer
          </Typography>

          <Typography>
            <strong>Date:</strong> March 25, 2022
          </Typography>
        </Box>

        <Typography sx={{ mb: 2 }}>Dear Rohit,</Typography>

        <Typography sx={{ mb: 2, textAlign: "justify" }}>
          This is to certify that Rohit Nagesh Boddu, who was employed with
          Devcons Software Solutions Pvt. Ltd. as Software Test Engineer from
          05 August 2019 to 25 March 2022, has been relieved from their duties.
        </Typography>

        <Typography sx={{ mb: 2, textAlign: "justify" }}>
          During their tenure, Rohit performed their responsibilities
          satisfactorily. We wish them all the best in their future endeavors.
        </Typography>

        <Typography sx={{ mt: 4 }}>Sincerely,</Typography>

        {/* Signature & Stamp */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            mt: 2,
            flexWrap: "wrap",
          }}
        >
          <img
            src={signatureImg}
            alt="Signature"
            style={{
              width: "160px",
              maxWidth: "100%",
            }}
          />

          <img
            src={stampImg}
            alt="Stamp"
            style={{
              width: "120px",
              maxWidth: "100%",
              opacity: 0.9,
            }}
          />
        </Box>

        {/* Name & Designation */}
        <Typography sx={{ mt: 1, fontWeight: "bold" }}>
          Mayur Patil
        </Typography>
        <Typography>HR Relations Lead</Typography>
        <Typography>Department of HR Relations</Typography>
      </Box>

      {/* FOOTER */}
      <Box>
        <img
          src={footerImg}
          alt="Footer"
          style={{ width: "100%", display: "block" }}
        />
      </Box>
    </Container>
  );
}

export default Relievingletter;
