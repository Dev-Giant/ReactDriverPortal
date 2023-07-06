import { useState } from "react";
import { Box, Button, TextField, Card } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const NewDateTimePicker = () => {
  var today = new Date();
  var from = new Date(today.getTime() - 6 * 24 * 60 * 60 * 1000);
  const [value1, setValue1] = useState(
    from.getFullYear() + "-" + (from.getMonth() + 1) + "-" + from.getDate()
  );
  const [value2, setValue2] = useState(
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
  );

  const handleChange1 = (newValue) => {
    setValue1(newValue);
  };

  const handleChange2 = (newValue) => {
    setValue2(newValue);
  };
  return (
    <Card className="w-full flex flex-wrap py-16">
      <Box className="widget flex w-full sm:w-1/2 md:w-1/3 p-12">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            sx={{ width: "100%" }}
            label="Date desktop"
            inputFormat="MM/dd/yyyy"
            value={value1}
            onChange={handleChange1}
            renderInput={(params) => (
              <TextField {...params} className="w-full" />
            )}
          />
        </LocalizationProvider>
      </Box>
      <Box className="widget flex w-full sm:w-1/2 md:w-1/3 p-12">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            sx={{ width: "100%" }}
            label="Date desktop"
            inputFormat="MM/dd/yyyy"
            value={value2}
            onChange={handleChange2}
            renderInput={(params) => (
              <TextField {...params} className="w-full" />
            )}
          />
        </LocalizationProvider>
      </Box>
      <Box className="widget flex w-full sm:w-1/2 md:w-1/3 p-12 justify-center">
        <Button
          variant="outlined"
          className="w-1/2 text-center bg-white text-blue-400"
        >
          Generate
        </Button>
      </Box>
    </Card>
  );
};

export default NewDateTimePicker;
