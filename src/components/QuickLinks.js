import React from "react";
import { Box, Typography, Chip } from "@mui/material";

const quickLinks = [
  "Fresher",
  "Work From Home",
  "IT",
  "HR",
  "Back Office",
  "BPO Jobs",
  "Finance",
  "Medical",
  "Manager",
];

const QuickLinks = () => {
  return (
    <Box sx={{ textAlign: "center", py: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Quick Job Search
      </Typography>
      {quickLinks.map((link, index) => (
        <Chip
          key={index}
          label={`#${link}`}
          clickable
          sx={{ mx: 0.5, my: 0.5 }}
        />
      ))}
    </Box>
  );
};

export default QuickLinks;
