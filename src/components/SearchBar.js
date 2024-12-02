import {
  Box,
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

const SearchBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        background: "linear-gradient(to right, #003366, #00cccc)",
        marginTop: 8,
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
        placeholder="Type keyword..."
        sx={{
          backgroundColor: "white",
          borderRadius: "5px",
          minWidth: "400px",
          height: "30px", 
          textAlign: "center",
          marginLeft: 1,
          fontSize: 13,
        }}
        InputProps={{
          style: {
            height: "100%",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            padding: "0 10px",
          },
        }}
      />
      <FormControl
        sx={{
          backgroundColor: "pink",
          borderRadius: "5px",
          width: "20%",
          height: "30px",
        }}
      >
        <InputLabel
          sx={{
            top: "50%",
            transform: "translateY(-50%)",
            textAlign: "center",
            fontSize: 13,
            marginLeft: 1,
          }}
        >
          Select Location
        </InputLabel>
        <Select size="small" sx={{ height: "30px", backgroundColor: "#fff" }}>
          <MenuItem value={1}>LUcknow</MenuItem>
          <MenuItem value={2}>Delhi</MenuItem>
          <MenuItem value={3}>Mumbai</MenuItem>
        </Select>
      </FormControl>

      <FormControl
        sx={{
          minWidth: "150px",
          backgroundColor: "white",
          borderRadius: "5px",
          marginLeft: "10px",
          width: "10%",
          height: "30px",
        }}
      >
        <InputLabel
          sx={{
            top: "50%",
            transform: "translateY(-50%)",
            textAlign: "center",
            fontSize: 13,
            marginLeft: 1,
          }}
        >
          Select Experience
        </InputLabel>
        <Select
          size="small"
          sx={{
            height: "30px",
            backgroundColor: "#fff",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
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
          height: "30px",
        }}
      >
        <InputLabel
          sx={{
            top: "50%",
            transform: "translateY(-50%)",
            textAlign: "center",
            fontSize: 13,
            marginLeft: 1,
          }}
        >
          Select Salary
        </InputLabel>
        <Select size="small" sx={{ height: "30px", backgroundColor: "#fff" }}>
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
