import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

const Header = () => {

  return (
    <AppBar style={{ backgroundColor: "white" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" color="blue">
          JobRinger
          <Typography color="black">India job portal</Typography>
        </Typography>
        <Box style={{ display: "flex", flexDirection: "row" }}>
          <Typography color="black" style={{ marginRight: 3 }}>
            BRINGING YOU
          </Typography>
          <Typography color="blue" text="bold">
            THE PERFECT JOB!
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "#000",
              boxShadow: 0,
              // border: "1px solid green",
              "&:hover": {
                backgroundColor: "blue",
                color: "#fff",
              },
              margin: "0 5px",
            }}
          >
            Jobs
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "#000",
              boxShadow: 0,
              "&:hover": {
                backgroundColor: "blue",
                color: "#fff",
              },
              margin: "0 5px",
            }}
          >
            Active Employers
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "#000",
              boxShadow:0,
              "&:hover": {
                backgroundColor: "blue",
                color: "#fff"
              },
              margin: "0 5px",
            }}
          >
            Pricing
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "#000",
              boxShadow:0,
              border: "1px solid green",
              "&:hover": {
                backgroundColor: "#e0a800",
                color: "#fff"
              },
              margin: "0 5px",
            }}
          >
            Jobseeker Login
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#e0a800",
              color: "black",
              border: "1px solid green",
              "&:hover": {
                backgroundColor: "blue",
                color: "#fff",
              },
              margin: "0 5px",
            }}
          >
            Employer Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;