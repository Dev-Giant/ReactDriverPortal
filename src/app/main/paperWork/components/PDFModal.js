import { useState } from "react";
import { IconButton, Box, Modal, Typography, Button } from "@mui/material";
import { Document, Page } from "react-pdf/dist/esm/entry";
import StyledIcon from "./StyledIcon";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

const PDFModal = ({ itemName }) => {
  const [open, setOpen] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (offset) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };
  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <StyledIcon type="document" />
      </IconButton>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Document
            file={`assets/documents/${itemName}.pdf`}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <Box>
            <Typography variant="body2" className="my-16">
              Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
            </Typography>
            <Button
              className="w-1/3 text-center bg-white text-blue-400"
              variant="outlined"
              disabled={pageNumber <= 1}
              onClick={previousPage}
            >
              Previous
            </Button>
            <Button
              className="w-1/3 text-center bg-white text-blue-400"
              variant="outlined"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default PDFModal;
