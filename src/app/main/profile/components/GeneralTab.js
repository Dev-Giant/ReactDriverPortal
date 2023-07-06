import { useState } from "react";
import {
  Box,
  Card,
  IconButton,
  Avatar,
  Typography,
  Switch,
  Grid,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";

const countries = [
  {
    value: "US",
    label: "United States",
  },
  {
    value: "GB",
    label: "Great Britain",
  },
  {
    value: "AU",
    label: "Australia",
  },
  {
    value: "GE",
    label: "Germarny",
  },
];

const GeneralTab = () => {
  const [country, setCountry] = useState("US");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box className="w-full flex justify-center">
      <Box className="w-full flex flex-wrap">
        <Box className="w-full md:w-1/3 px-16 mt-32">
          <Card className="w-full" sx={{ height: "50vh" }}>
            <Box className="w-full h-full flex flex-col items-center justify-center">
              <Box className="flex flex-col items-center">
                <Avatar
                  alt="user img"
                  src="assets/images/avatars/Abbott.jpg"
                  sx={{ width: "150px", height: "150px" }}
                />
                <Box className="flex mt-64 items-center">
                  <Typography variant="body2">Public Profile</Typography>
                  <Switch />
                </Box>
              </Box>
            </Box>
          </Card>
        </Box>
        <Box className="w-full md:w-2/3 px-16 mt-32">
          <Card className="w-full p-32">
            <Box component="form">
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <TextField
                    className="w-full"
                    label="Name"
                    defaultValue="Abbott"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    className="w-full"
                    label="Email Address"
                    defaultValue="demo@minimals.cc"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    className="w-full"
                    label="Phone Number"
                    defaultValue="+30-2106019311"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    className="w-full"
                    label="Address"
                    defaultValue="Keas 69 Str."
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    select
                    label="Select"
                    value={country}
                    onChange={handleChange}
                    className="w-full"
                  >
                    {countries.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    className="w-full"
                    label="State/Region"
                    defaultValue="Chalandri"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    className="w-full"
                    label="City"
                    defaultValue="Chalandri"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    className="w-full"
                    label="Zip/Code"
                    defaultValue="22000"
                  />
                </Grid>
              </Grid>
              <TextField
                className="w-full mt-32"
                label="About"
                multiline
                rows={4}
                defaultValue="Nullum Curus lacina erat. Vestibrum"
              />
              <Box className="w-full flex flex-row-reverse mt-32">
                <Button
                  className="text-center bg-white text-blue-400"
                  variant="outlined"
                >
                  Save Changes
                </Button>
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default GeneralTab;
