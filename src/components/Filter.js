import React from "react";
import {
  Box,
  Button,
  Card,
  Typography,
  Tab,
  Tabs,
  Divider,
  TextField,
  Paper,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import QuickJobs from "./QuickJobs";

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
        overflow: "scroll",
      }}
    >
      <Box
        sx={{
          marginRight: "20px",
          width: "30%",
        }}
      >
        <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
            Filters
          </Typography>
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant="subtitle1">Keywords</Typography>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              placeholder="Type keyword and press enter"
            />
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant="subtitle1">Experience</Typography>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              placeholder="Enter years of experience"
            />
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant="subtitle1">Work Mode</Typography>
            <Divider sx={{ marginY: 1 }} />
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="In Office" />
              <FormControlLabel
                control={<Checkbox />}
                label="Work From Home / WFH"
              />
              <FormControlLabel control={<Checkbox />} label="Hybrid" />
              <FormControlLabel control={<Checkbox />} label="Remote" />
              <FormControlLabel control={<Checkbox />} label="On Field" />
            </FormGroup>
          </Box>
          <Box>
            <Typography variant="subtitle1">Job Type</Typography>
            <Divider sx={{ marginY: 1 }} />
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="All Jobs" />
              <FormControlLabel control={<Checkbox />} label="Classic Jobs" />
              <FormControlLabel control={<Checkbox />} label="Featured Jobs" />
              <FormControlLabel control={<Checkbox />} label="Premium Jobs" />
            </FormGroup>
          </Box>
        </Paper>
      </Box>
      <Box width={"45%"}>
        <Box overflow={"auto"} height={"500px"} pb={5}>
          <QuickJobs />
        </Box>
        <Box
          overflow={"auto"}
          mt={2}
          sx={{
            border: "1px solid black",
            borderRadius: "10px",
            width: "80%",
            marginLeft: 3,
            height:"200px"
          }}
        >
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
          </Box>
        </Box>
      </Box>
      <Box sx={{ padding: 2, width: "20%", marginLeft: 2 }}>
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
