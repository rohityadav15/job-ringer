import React from "react";
import { Box, Button, TextField, MenuItem, Select, InputLabel, FormControl } from "@mui/material";

const SearchBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        background: "linear-gradient(to right, #003366, #00cccc)",
        // borderRadius: "5px",
        marginTop: 8
      }}
    >
      <Box
        sx={{
          fontWeight: "bold",
          color: "white",
          fontSize: "20px",
          marginRight: "1px",
        }}
      >
        Search Job
      </Box>

      <TextField
        variant="outlined"
        size="small"
        placeholder="Type keyword.."
        sx={{
          backgroundColor: "white",
          borderRadius: "5px",
          minWidth: "400px",
        }}
      />

      <FormControl
        sx={{
          minWidth: "150px",
          backgroundColor: "white",
          borderRadius: "5px",
          marginLeft: "5px",
          width:"20%"
        }}
      >
        <InputLabel>Select Location</InputLabel>
        <Select size="small">
          <MenuItem value={1}>Location 1</MenuItem>
          <MenuItem value={2}>Location 2</MenuItem>
          <MenuItem value={3}>Location 3</MenuItem>
        </Select>
      </FormControl>

      <FormControl
        sx={{
          minWidth: "150px",
          backgroundColor: "white",
          borderRadius: "5px",
          marginLeft: "10px",
           width:"10%"
        }}
      >
        <InputLabel>Select Experience</InputLabel>
        <Select size="small" width={"10%"}>
          <MenuItem value={1}>Fresher</MenuItem>
          <MenuItem value={2}>1-2 Years</MenuItem>
          <MenuItem value={3}>3+ Years</MenuItem>
        </Select>
      </FormControl>

      <FormControl
        sx={{
          minWidth: "150px",
          backgroundColor: "white",
          borderRadius: "5px",
          marginLeft: "10px",
        }}
      >
        <InputLabel>Select Salary</InputLabel>
        <Select size="small">
          <MenuItem value={1}>10,000+</MenuItem>
          <MenuItem value={2}>30,000+</MenuItem>
          <MenuItem value={3}>50,000+</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#ffc107",
          color: "black",
          fontWeight: "bold",
          marginLeft: "10px",
          "&:hover": {
            backgroundColor: "#e0a800",
          },
        }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
