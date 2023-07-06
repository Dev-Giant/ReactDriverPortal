import React, { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import { Document, Page } from "react-pdf/dist/esm/entry";

const PDFShow = ({ fileSrc }) => {
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
    <Box className="w-full flex justify-center my-16">
      <Box>
        <Typography variant="h3" className="my-32">
          {fileSrc}
        </Typography>
        <Document
          file={`assets/documents/${fileSrc}.pdf`}
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
    </Box>
  );
};

export default PDFShow;
