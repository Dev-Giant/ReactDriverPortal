import { useState } from "react";
import {
  Box,
  Typography,
  FormGroup,
  Grid,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const RequestForm = () => {
  const [value1, setValue1] = useState(new Date("2020-08-18T21:11:54"));
  const [value2, setValue2] = useState(new Date("2021-08-18T21:11:54"));
  const [truck, setTruck] = useState(1);
  const [trailer, setTrailer] = useState(1);
  const [location, setLocation] = useState("");
  const trucks = [
    "FVS210274: TR VOLVO WHITE IN",
    "001: CASCADIA FRHT WHITE IL",
    "010: Tractor Kenworth WHITE IL",
  ];
  const trailers = [
    "AMZN:,WABASH,223,2020",
    "W03089:,GREAT DANE,223,2013",
    "U98101:,HYUNDAI,223,2013",
  ];
  const handleChange1 = (newValue) => {
    setValue1(newValue);
  };

  const handleChange2 = (newValue) => {
    setValue2(newValue);
  };

  const handleChangeTruck = (event) => {
    setTruck(event.target.value);
  };

  const handleChangeTrailer = (event) => {
    setTrailer(event.target.value);
  };

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };
  return (
    <FormGroup className="pl-16">
      <Box className="w-full">
        <Grid container className="w-full my-32" spacing={4}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="body1">From Date:</Typography>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  sx={{ width: "100%" }}
                  inputFormat="MM/dd/yyyy"
                  value={value1}
                  onChange={handleChange1}
                  renderInput={(params) => (
                    <TextField {...params} className="w-full" />
                  )}
                />
              </LocalizationProvider>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography>Trucks:</Typography>
              <Select
                onChange={handleChangeTruck}
                value={truck}
                className="w-full"
              >
                {trucks.map((truckitem, index) => {
                  return (
                    <MenuItem key={truckitem} value={index}>
                      {truckitem}
                    </MenuItem>
                  );
                })}
              </Select>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="body1">To Date:</Typography>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                className="w-full"
              >
                <DesktopDatePicker
                  sx={{ width: "100%" }}
                  inputFormat="MM/dd/yyyy"
                  value={value2}
                  onChange={handleChange2}
                  renderInput={(params) => (
                    <TextField {...params} className="w-full" />
                  )}
                />
              </LocalizationProvider>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography>Trailers:</Typography>
              <Select
                onChange={handleChangeTrailer}
                value={trailer}
                className="w-full"
              >
                {trailers.map((truckitem, index) => {
                  return (
                    <MenuItem key={truckitem} value={index}>
                      {truckitem}
                    </MenuItem>
                  );
                })}
              </Select>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography>Parking Location:</Typography>
              <TextField
                className="w-full"
                placeholder="location"
                value={location}
                onChange={handleChangeLocation}
              ></TextField>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </FormGroup>
  );
};

export default RequestForm;
