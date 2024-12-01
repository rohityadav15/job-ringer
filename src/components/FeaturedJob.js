import React from "react";
import { Box, Card, CardContent, Typography, Button, Grid } from "@mui/material";

const jobs = [
  {
    title: "Senior Design Engineer - Mechanical",
    company: "Talent Bee Consulting Pvt. Ltd.",
    location: "Bangalore, India",
    experience: "5-10 Years",
  },
  {
    title: "WARD RMO",
    company: "Hospital Staff",
    location: "Mumbai, India",
    experience: "1-4 Years",
  },
  {
    title: "Corporate Finance Associate",
    company: "Planet Green Infra Pvt. Ltd.",
    location: "Hyderabad, India",
    experience: "3-5 Years",
  },
];

const FeaturedJob = () => {
  return (
    <Box sx={{ px: 5, py: 3 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Featured Jobs
      </Typography>
      <Grid container spacing={3}>
        {jobs.map((job, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ p: 2 }}>
              <CardContent>
                <Typography variant="h6">{job.title}</Typography>
                <Typography variant="subtitle2">{job.company}</Typography>
                <Typography variant="body2" sx={{ my: 1 }}>
                  {job.experience}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {job.location}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ mt: 2 }}
                >
                  Apply
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedJob;