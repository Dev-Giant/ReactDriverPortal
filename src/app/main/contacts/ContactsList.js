import FuseUtils from "@fuse/utils";
import { Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ContactsCardList from "./ContactsCardList";
import { selectContacts } from "./store/contactsSlice";

function ContactsList() {
  const contacts = useSelector(selectContacts);
  const searchText = useSelector(
    ({ contactsApp }) => contactsApp.contacts.searchText
  );

  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    function getFilteredArray(entities, _searchText) {
      if (_searchText.length === 0) {
        return contacts;
      }
      return FuseUtils.filterArrayByString(contacts, _searchText);
    }

    if (contacts) {
      setFilteredData(getFilteredArray(contacts, searchText));
    }
  }, [contacts, searchText]);

  if (!filteredData) {
    return null;
  }

  if (filteredData.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center h-full mx-auto">
        <Typography color="textSecondary" variant="h5">
          There are no contacts!
        </Typography>
      </div>
    );
  }

  return (
    <Box>
      {/* <ContactsTable
        columns={columns}
        data={filteredData}
        onRowClick={(ev, row) => {
          if (row) {
            dispatch(openEditContactDialog(row.original));
          }
        }}
      /> */}
      <ContactsCardList data={filteredData} />
    </Box>
  );
}

export default ContactsList;
