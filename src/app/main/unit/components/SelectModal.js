import { useState } from "react";
import {
  Box,
  Button,
  Modal,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";

const trucks = [
  "FVS210274: TR VOLVO WHITE IN",
  "001: CASCADIA FRHT WHITE IL",
  "010: Tractor Kenworth WHITE IL",
  "074: CASCADIA FRHT RED NV",
  "123: Tractor WE/ST RED NY",
  "292: T680 Kenworth ORANGE IL",
  "410: CASCADIA FRHT WHITE IL",
  "419: T680 KW BLUE IL",
  "423: CASCADIA FRHT BLUE IL",
  "454: CASCADIA FRHT WHITE IL",
  "477: CASCADIA FRHT WHITE IL",
  "552: 387 PETERBILT WHITE IL",
  "603: CASCADIA FRHT WHITE IL",
  "643: CORONADO FRHT WHITE IL",
  "708: CASCADIA FRHT WHITE IL",
  "798: W900L Kenworth GRAY IL",
  "799: W900L Kenworth WHITE IL",
  "801: CASCADIA FRHT WHITE IL",
  "854: Tractor FRHT WHITE CA",
  "889: T680 Kenworth GRAY IL",
  "890: T680 Kenworth GRAY IL",
  "891: T680 Kenworth GRAY IL",
  "892: T680 Kenworth GRAY IL",
  "893: T680 Kenworth GRAY IL",
  "1560: Construction Kenworth WHITE IL",
  "1626: TR Kenworth BLUE IL",
  "4000: 579 PETERBILT BLUE IL",
  "8891: TRACTOR KENWORTH WHITE IL",
  "8892: TRACTOR KENWORTH WHITE IL",
  "8893: TRACTOR KENWORTH WHITE IL",
  "8894: TRACTOR KENWORTH WHITE IL",
  "8895: TRACTOR KENWORTH WHITE IL",
  "8896: TRACTOR KENWORTH WHITE IL",
  "9730: Tractor Kenworth red IL",
  "127402: Tractor FTL WHITE IN",
  "15960: TR FREIGHTLINER WHITE IN",
  "191972: TR FREIGHTLINER WHITE IN",
  "201542: TR FRHT GRAY IN",
  "315674: TR FREIGHTLINER WHITE IN",
  "317473: TR VOLVO WHITE IN",
  "382919: TR FTL GREY IN",
  "386902: TR VOLVO GRAY IN",
  "394116: TR FRHT GRAY IN",
  "394258: TR FREIGHTLINER YELLOW IN",
  "394366: TR FRHT yellow IN",
  "468810: TR FRHT WHITE IN",
  "468811: TR FRHT BLUE IN",
  "468812: Tractor FRHT WHITE IN",
  "468813: Tractor FTL WHITE IN",
  "468814: TR FTL WHITE IN",
  "468815: TR FTL WHITE IN",
  "468816: Tractor FTL WHITE IN",
  "468817: TR FRHT WHITE IN",
  "468818: Tractor FRHT WHITE IN",
  "468819: Tractor FRHT WHITE IN",
];

const trailers = [
  "AMZN: WABASJ, 223, 2020",
  "W03089: GREAT DANE, 223, 2013",
  "U98101: HYUNDAI, 223, 2013",
  "W05810: WABASH, 223, 2014",
  "W14819: HYUNDAI, 223, 2016",
  "W20953: HYUNDAI, 223, 2016",
  "W07068: WABASH, 223, 2014",
  "W08469: WABASH, 223, 2015",
  "W18487: HYUNDAI WABASH, 223, 2016",
  "W28073: HYUNDAI WABASH, 223, 2019",
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  minWidth: "300px",
  height: "20vh",
  minHeight: "300px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const SelectModal = ({ modalType }) => {
  const [truck, setTruck] = useState("798: W900L Kenworth GRAY IL");
  const [trailer, setTrailer] = useState("W07068: WABASH, 223, 2014");
  const handleChange1 = (event) => {
    setTruck(event.target.value);
  };
  const handleChange2 = (event) => {
    setTrailer(event.target.value);
  };
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  return (
    <>
      {modalType === 1 ? (
        <>
          <Button
            className="w-full text-center bg-white text-blue-400"
            variant="outlined"
            onClick={() => setOpen1(true)}
          >
            Change Truck
          </Button>
          <Modal
            open={open1}
            onClose={() => setOpen1(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography variant="h4" className="mb-64">
                Select Truck
              </Typography>
              <Select value={truck} className="w-full" onChange={handleChange1}>
                {trucks.map((truck) => {
                  return (
                    <MenuItem key={truck} value={truck}>
                      {truck}
                    </MenuItem>
                  );
                })}
              </Select>
            </Box>
          </Modal>
        </>
      ) : (
        <>
          <Button
            className="w-full text-center bg-white text-blue-400"
            variant="outlined"
            onClick={() => setOpen2(true)}
          >
            Change Trailer
          </Button>
          <Modal
            open={open2}
            onClose={() => setOpen2(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography variant="h4" className="mb-64">
                Select Trailer
              </Typography>
              <Select
                value={trailer}
                onChange={handleChange2}
                className="w-full"
              >
                {trailers.map((trailer) => {
                  return (
                    <MenuItem key={trailer} value={trailer}>
                      {trailer}
                    </MenuItem>
                  );
                })}
              </Select>
            </Box>
          </Modal>
        </>
      )}
    </>
  );
};

export default SelectModal;
