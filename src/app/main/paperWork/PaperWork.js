import { Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";
import CompanyDetailsTab from "./components/CompanyDetailsTab";
import CompanyInsuranceTab from "./components/CompanyInsuranceTab";
import TruckPapersTab from "./components/TruckPapersTab";
import TrailerPapersTab from "./components/TrailerPapersTab";

const PaperWork = () => {
  const [tabValue, setTabValue] = useState(0);
  function handleChangeTab(event, value) {
    setTabValue(value);
  }
  return (
    <Box className="w-full flex justify-center my-64 px-16">
      <Box className="w-full md:w-4/5">
        <Tabs
          value={tabValue}
          onChange={handleChangeTab}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons={false}
          className="w-full px-24 -mx-4 min-h-40 my-32"
          classes={{
            indicator: "flex justify-center bg-transparent w-full h-full",
          }}
          TabIndicatorProps={{
            children: (
              <Box
                sx={{ bgcolor: "text.disabled" }}
                className="w-full h-full rounded-full opacity-20"
              />
            ),
          }}
        >
          <Tab
            className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12"
            disableRipple
            label="Carrier Details"
          />
          <Tab
            className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12"
            disableRipple
            label="Truck Papers"
          />
          <Tab
            className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12"
            disableRipple
            label="Trailer Papers"
          />
          <Tab
            className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12"
            disableRipple
            label="Carrier Insurance"
          />
        </Tabs>
        <Box className="w-full">
          {tabValue === 0 && <CompanyDetailsTab />}
          {tabValue === 1 && <TruckPapersTab />}
          {tabValue === 2 && <TrailerPapersTab />}
          {tabValue === 3 && <CompanyInsuranceTab />}
        </Box>
      </Box>
    </Box>
  );
};

export default PaperWork;
