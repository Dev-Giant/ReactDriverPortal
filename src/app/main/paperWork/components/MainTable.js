import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import ShareModal from "./ShareModal";
import StyledIcon from "./StyledIcon";

const MainTable = ({ files }) => {
  const handleOpenPDFClick = (fileName) => {
    open(`assets/documents/${fileName}.pdf`, "_blank");
  };
  return (
    <Table className="simple borderless">
      <TableHead>
        <TableRow>
          <TableCell className="max-w-64 w-64 p-0 text-center"> </TableCell>
          <TableCell>Name</TableCell>
          <TableCell className="hidden sm:table-cell">Uploaded By</TableCell>
          <TableCell className="text-center hidden sm:table-cell">
            Expiration Date
          </TableCell>
          <TableCell className="hidden sm:table-cell">Modified</TableCell>
          <TableCell sx={{ width: "20px" }}></TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {files.map((item) => {
          return (
            <TableRow key={item.id} hover className="cursor-pointer h-64">
              <TableCell className="max-w-64 w-64 p-0 text-center">
                <IconButton onClick={() => handleOpenPDFClick(item.name)}>
                  <StyledIcon type="document" />
                </IconButton>
              </TableCell>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell className="hidden sm:table-cell">
                {item.owner}
              </TableCell>
              <TableCell className="text-center hidden sm:table-cell">
                {item.created}
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                {item.modified}
              </TableCell>
              <TableCell>
                <ShareModal />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default MainTable;
