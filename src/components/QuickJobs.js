import React, { useState } from "react";
import {
  Container,
  Box,
  Grid2,
  Typography,
  Card,
  CardContent,
  Avatar,
  Button,
  Divider,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { LocationOn, Work, AttachMoney } from "@mui/icons-material";

const QuickJobs = () => {
  const [itemsPerPage, setItemsPerPage] = useState(100);

  const jobs = [
    {
      id: 1,
      title: "NURSE FRESHER - THENI",
      company: "HCL Management Services",
      experience: "0 - 3 Years",
      salary: "₹1 Lac - 2.5 Lac P.A",
      type: "Full Time",
      location: "Salem, USA",
      skills: "Nurse / Nurses",
      posted: "5 hours ago",
      mode: "In Office",
    },
    {
      id: 3,
      title: "WORDPRESS DEVELOPER",
      company: "Wipro Technologies Pvt. Ltd.",
      experience: "1 - 5 Years",
      salary: "Not Disclosed",
      type: "Full Time",
      location: "Durgapur",
      skills: "WordPress Developer",
      posted: "5 hours ago",
      mode: "In Office",
    },
    {
      id: 4,
      title: "NURSE FRESHER - THENI",
      company: "HIND Management Services",
      experience: "0 - 3 Years",
      salary: "₹1 Lac - 2.5 Lac P.A",
      type: "Full Time",
      location: "Salem, USA",
      skills: "Nurse / Nurses",
      posted: "5 hours ago",
      mode: "In Office",
    },
    {
      id: 5,
      title: "FRONT-END DEVELOPER",
      company: "Techpile Technologies Pvt. Ltd.",
      experience: "1 - 5 Years",
      salary: "Not Disclosed",
      type: "Full Time",
      location: "Durgapur",
      skills: "Front-end Developer",
      posted: "5 hours ago",
      mode: "In Office",
    },
    {
      id: 6,
      title: "NURSE FRESHER - THENI",
      company: "Devki Management Services",
      experience: "0 - 3 Years",
      salary: "₹1 Lac - 2.5 Lac P.A",
      type: "Full Time",
      location: "Salem, USA",
      skills: "Nurse / Nurses",
      posted: "5 hours ago",
      mode: "In Office",
    },
    {
      id: 7,
      title: "BACKEND DEVELOPER",
      company: "HINDCO Technologies Pvt. Ltd.",
      experience: "1 - 5 Years",
      salary: "Not Disclosed",
      type: "Full Time",
      location: "Durgapur",
      skills: "WordPress Developer",
      posted: "5 hours ago",
      mode: "In Office",
    },
  ];

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(event.target.value);
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <FormControl size="small">
          <Select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            displayEmpty
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
        </FormControl>
        <Typography variant="body2">
          Showing 1 to {itemsPerPage} 
        </Typography>
      </Box>

      <Grid2 container spacing={2}>
        {jobs.map((job) => (
          <Grid2 item xs={12} key={job.id}>
            <Card elevation={5} sx={{ borderRadius: 2 }}>
              <CardContent>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box display="flex" alignItems="center" gap={2}>
                    <Avatar
                      alt={job.company}
                      src="/placeholder-logo.png" 
                      sx={{ width: 48, height: 48 }}
                    />
                    <Box>
                      <Typography variant="h6">{job.title}</Typography>
                      <Typography variant="subtitle2" color="textSecondary">
                        {job.company}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    variant="button"
                    sx={{
                      backgroundColor: "navy",
                      color: "white",
                      padding: "4px 8px",
                      borderRadius: 1,
                    }}
                  >
                    {job.mode}
                  </Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Grid2 container spacing={1}>
                  <Grid2 item xs={12} md={6}>
                    <Typography variant="body2">
                      <Work sx={{ fontSize: 16, verticalAlign: "middle" }} />{" "}
                      {job.experience}
                    </Typography>
                  </Grid2>
                  <Grid2 item xs={12} md={6}>
                    <Typography variant="body2">
                      <AttachMoney
                        sx={{ fontSize: 16, verticalAlign: "middle" }}
                      />{" "}
                      {job.salary}
                    </Typography>
                  </Grid2>
                  <Grid2 item xs={12} md={6}>
                    <Typography variant="body2">
                      <LocationOn
                        sx={{ fontSize: 16, verticalAlign: "middle" }}
                      />{" "}
                      {job.location}
                    </Typography>
                  </Grid2>
                  <Grid2 item xs={12} md={6}>
                    <Typography variant="body2">
                      <strong>Key Skills:</strong> {job.skills}
                    </Typography>
                  </Grid2>
                </Grid2>
                <Box
                  mt={2}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box display="flex" gap={1}>
                    <Button variant="contained" color="primary" size="small">
                      Apply
                    </Button>
                  </Box>
                  <Typography variant="caption" color="textSecondary">
                    Posted {job.posted}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default QuickJobs;
