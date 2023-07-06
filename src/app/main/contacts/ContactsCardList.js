import { Box, Pagination } from "@mui/material";
import { useState, useEffect } from "react";
import ContactCards from "./components/ContactCards";
import PaginationLayout from "../layout/PaginationLayout";

const ContactsCardList = ({ data }) => {
  const itemsPerPage = 6;
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event, value) => {
    const newOffset = ((value - 1) * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  return (
    <Box>
      <ContactCards currentCards={currentItems} />
      <PaginationLayout>
        <Pagination size="large" onChange={handlePageClick} count={pageCount} />
      </PaginationLayout>
    </Box>
  );
};

export default ContactsCardList;
