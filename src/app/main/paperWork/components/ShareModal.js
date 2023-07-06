import { useState } from "react";
import {
  IconButton,
  Box,
  Button,
  Typography,
  Modal,
  TextField,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

const ShareModal = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <ShareIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box className="flex justify-between items-center">
            <Typography variant="h6" className="ml-16">
              Send To Email
            </Typography>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box className="p-16 flex flex-col items-center">
            <TextField
              type="email"
              placeholder="Enter Email..."
              className="w-full my-16"
              value={email}
              onChange={handleEmail}
            ></TextField>
            <Button
              className="py-8 px-24 text-center bg-white text-blue-400 my-16"
              variant="outlined"
            >
              SEND
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ShareModal;
