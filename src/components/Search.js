import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  Tab,
  Tabs,
  Divider,
} from "@mui/material";

const JobDetails = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box
      sx={{
        padding: 2,
        backgroundColor: "#f9f9f9",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {/* Job Header Section */}
      <Box width={"70%"}>
        <Card sx={{ padding: 2, marginBottom: 2, borderRadius: "8px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={2}>
              <Box
                sx={{
                  backgroundColor: "#003366",
                  width: "100px",
                  height: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  marginBottom: 1,
                }}
              >
                <Typography color="white" fontWeight="bold">
                  DVIO
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Typography variant="h5" fontWeight="bold" color="blue">
                GRAPHIC DESIGNER
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                DVIO Digital
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  marginTop: 1,
                  color: "gray",
                }}
              >
                <Typography>2 - 4 Years</Typography>
                <Typography>|</Typography>
                <Typography>Not Disclosed</Typography>
                <Typography>|</Typography>
                <Typography>Full Time - Permanent</Typography>
                <Typography>|</Typography>
                <Typography>Pune</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3} textAlign="right">
              <Button variant="contained" sx={{ background: "#007FFF" }}>
                APPLY
              </Button>
              <Typography
                variant="caption"
                color="text.secondary"
                display="block"
                marginTop={1}
              >
                Posted on 17 Nov, 2024
              </Typography>
            </Grid>
          </Grid>
        </Card>

        {/* Tab Section */}
        <Box sx={{ border: "1px solid black" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={tabValue} onChange={handleTabChange}>
              <Tab label="Overview" />
              <Tab label="Job Description" />
              <Tab label="Candidate Profile" />
              <Tab label="About Employer" />
            </Tabs>
          </Box>
          <Box sx={{ padding: 2 }}>
            {tabValue === 0 && (
              <>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  backgroundColor={"#1976d2"}
                >
                  Overview
                </Typography>
                <Divider sx={{ marginY: 1 }} />
                <Typography>
                  Industry - IT Consulting Services / Advisory Services
                </Typography>
                <Typography>
                  Functional Area - IT Web Designing / Mobile App / Graphics
                </Typography>
                <Typography>Job Role - Application Designer</Typography>
              </>
            )}
            {tabValue === 1 && (
              <>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  backgroundColor={"#1976d2"}
                >
                  Job Description | Role and Responsibilities
                </Typography>
                <Divider sx={{ marginY: 1 }} />
                <Typography>
                  - Collaborate with the team to ensure consistency of designs
                  across media outlets.
                </Typography>
                <Typography>
                  - Create compelling logos, print, and digital media designs.
                </Typography>
                <Typography>
                  - Maintain awareness of current industry standards, social
                  media, and competitive landscape trends.
                </Typography>
              </>
            )}
            {/* Add more content for other tabs */}
          </Box>
        </Box>
      </Box>
      {/* Similar Jobs Section */}

      <Box sx={{ padding: 2, width: "20%", marginLeft: 5 }}>
        {/* Mobile App Promotion Section */}
        <Card
          sx={{
            padding: 2,
            marginBottom: 2,
            textAlign: "center",
            backgroundColor: "#f9f9f9",
            boxShadow: 1,
            borderRadius: 2,
          }}
        >
          <Typography fontWeight="bold" variant="subtitle1" marginBottom={1}>
            Apply to JOBS On-The-Go Jobringer Mobile App
          </Typography>
          <Button
            variant="contained"
            href="https://play.google.com"
            sx={{
              background: "#007FFF",
              color: "white",
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Get it on Google Play
          </Button>
        </Card>

        {/* Similar Jobs Section */}
        <Card sx={{ padding: 2, marginBottom: 2, backgroundColor: "#f1f9ff" }}>
          <Typography variant="h6" fontWeight="bold" marginBottom={1}>
            Similar Jobs
          </Typography>
          {/* Job Card 1 */}
          <Card
            sx={{
              marginBottom: 2,
              padding: 2,
              border: "1px solid #e0e0e0",
              borderRadius: 2,
              boxShadow: 0,
            }}
          >
            <Typography fontWeight="bold" variant="subtitle1" color="primary">
              AI GRAPHIC DESIGNER
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Probus Insurance Broker Pvt. Ltd.
            </Typography>
            <Typography variant="body2">1 - 4 years | Not Disclosed</Typography>
            <Typography variant="body2" color="text.secondary">
              Mumbai (All Areas), India
            </Typography>
            <Typography variant="body2">
              <strong>Key Skills:</strong> Graphic Designer / Developer
            </Typography>
          </Card>
          {/* Job Card 2 */}
          <Card
            sx={{
              padding: 2,
              border: "1px solid #e0e0e0",
              borderRadius: 2,
              boxShadow: 0,
            }}
          >
            <Typography fontWeight="bold" variant="subtitle1" color="primary">
              GRAPHIC DESIGNER AND VIDEO EDITOR
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Virtual Real Design Pvt. Ltd.
            </Typography>
            <Typography variant="body2">0 - 4 years | Not Disclosed</Typography>
            <Typography variant="body2" color="text.secondary">
              Dehradun, India
            </Typography>
            <Typography variant="body2">
              <strong>Key Skills:</strong> Adobe Creative Suite, Photoshop,
              Social Media Management
            </Typography>
          </Card>
        </Card>
      </Box>
    </Box>
  );
};

export default JobDetails;
