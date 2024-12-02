import React from "react";
import { Box, Typography, Grid, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn, Telegram } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f0f8ff",
        padding: "2rem",
        textAlign: "center",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <Grid container spacing={2} justifyContent="space-around">
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            JOBS IN INDIA
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            #Mumbai #Delhi #Ajmer #Pune #Hyderabad #Agra #Chennai #Kolkata
            #Indore #Gurugram #Jaipur #Ahmedabad
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            INTERNATIONAL JOBS
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            #Africa #USA #UK #Australia #Canada #Singapore #Dubai #Saudi Arabia
            #New Zealand
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ my: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Jobs Posted: 31258 | Jobs Filled: 15153
        </Typography>
        <Typography variant="body1">
          Employers: 19967 | Active Users: 1295533
        </Typography>
      </Box>

      <Box sx={{ mt: 3, borderTop: "1px solid #ccc", pt: 3 }}>
        <Typography variant="caption" sx={{ display: "block", mb: 2 }}>
          Disclaimer: All trademarks and logos are the property of their
          respective owners, depicted here purely for representation purposes.
          Jobringer.com has taken all reasonable steps to ensure that
          information on this site is genuine. Applicants are advised to
          evaluate independently.
        </Typography>
        <Typography variant="caption" sx={{ display: "block", mb: 2 }}>
          Recognized by <span style={{ color: "#f57c00" }}>#startupindia</span>
        </Typography>

        <Box sx={{ mt: 2 }}>
          <IconButton>
            <Facebook />
          </IconButton>
          <IconButton>
            <Twitter />
          </IconButton>
          <IconButton>
            <Instagram />
          </IconButton>
          <IconButton>
            <LinkedIn />
          </IconButton>
          <IconButton>
            <Telegram />
          </IconButton>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Link href="#" sx={{ mx: 1 }}>
            Terms and Conditions
          </Link>
          <Link href="#" sx={{ mx: 1 }}>
            Privacy Policy
          </Link>
          <Link href="#" sx={{ mx: 1 }}>
            Refund / Cancellation Policy
          </Link>
          <Link href="#" sx={{ mx: 1 }}>
            About Us
          </Link>
          <Link href="#" sx={{ mx: 1 }}>
            Contact Us
          </Link>
          <Link href="#" sx={{ mx: 1 }}>
            FAQ
          </Link>
        </Box>
        <Typography variant="caption" sx={{ mt: 2, display: "block" }}>
          © All Rights Reserved @ 2024 Jobtech Ventures Private Limited
        </Typography>
      </Box>
    </Box>
  );
};
export default Footer;