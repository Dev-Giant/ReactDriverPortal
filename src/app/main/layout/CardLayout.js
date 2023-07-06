import { Card } from "@mui/material";

const CardLayout = ({ children }) => {
  return (
    <Card
      sx={{
        width: "345px",
        display: "flex",
        paddingTop: "30px",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {children}
    </Card>
  );
};

export default CardLayout;
