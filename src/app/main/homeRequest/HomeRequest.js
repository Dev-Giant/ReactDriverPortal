import { Box, Card } from "@mui/material";
import ButtonsGroup from "./components/ButtonsGroup";
import RequestTable from "./components/RequestTable";
import RequestForm from "./components/RequestForm";

const HomeRequest = () => {
  return (
    <Box className="w-full flex justify-center my-64 px-16">
      <Card className="w-full md:w-3/4 p-16">
        <RequestForm />
        <RequestTable />
        <Box className="w-full px-12 mt-12 block md:hidden">
          <ButtonsGroup />
        </Box>
      </Card>
    </Box>
  );
};

export default HomeRequest;
