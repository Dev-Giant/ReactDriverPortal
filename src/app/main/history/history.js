import { Box, Typography } from "@mui/material";
import EarningWidgets from "./components/EarningWidgets";
import NewDateTimePicker from "./components/NewDateTimePicker";
import PerformanceWidgets from "./components/PerformanceWidgets";
import ButtonsGroup from "./components/ButtonsGroup";
import HistoryTable from "./components/HistoryTable";

const History = () => {
  return (
    <Box className="w-full flex justify-center">
      <Box className="md:w-3/4 w-full mt-64">
        <Box className="w-full px-12">
          <NewDateTimePicker />
        </Box>
        <Box className="w-full text-center px-12 py-32">
          <Typography variant="h2">Performance</Typography>
        </Box>
        <PerformanceWidgets />
        <Box className="w-full text-center px-12 py-32">
          <Typography variant="h2">Earnings</Typography>
        </Box>
        <Box className="w-full px-12">
          <EarningWidgets />
        </Box>
        <Box className="w-full px-12 mt-64">
          <HistoryTable />
        </Box>
        <Box className="w-full px-12 mt-12 block md:hidden">
          <ButtonsGroup />
        </Box>
      </Box>
    </Box>
  );
};

export default History;
