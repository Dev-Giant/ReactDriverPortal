import { Box } from "@mui/material";

const PaginationLayout = ({ children }) => {
  return (
    <Box
      sx={{
        margin: "100px 0px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {children}
    </Box>
  );
};

export default PaginationLayout;
