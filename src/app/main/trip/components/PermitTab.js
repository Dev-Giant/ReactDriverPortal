import { Box } from "@mui/material";
import PDFShow from "../../paperWork/components/PDFShow";

const PermitTab = ({ data }) => {
  return (
    <Box className="w-full flex justify-center my-64 px-16">
      <Box className="w-full md:w-4/5">
        <Box className="w-full">
          {data.permit ? (
            <PDFShow fileSrc={data.permit} />
          ) : (
            <Box>No Permission yet</Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default PermitTab;
