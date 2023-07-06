import { useState } from "react";
import { useParams } from "react-router";
import { Tabs, Tab, Box } from "@mui/material";
import TripDetailsTab from "./components/TripDetailsTab";
import RateInfoTab from "./components/RateInfoTab";
import PermitTab from "./components/PermitTab";
import CommodityInfoTab from "./components/CommodityInfoTab";
import TimeLineTab from "./components/TimeLineTab";
import { tripDb } from "src/@fake-db/db/trips-db";

const Trip = () => {
  const [tabValue, setTabValue] = useState(0);
  function handleChangeTab(event, value) {
    setTabValue(value);
  }
  const { id } = useParams();
  const tripDetail = tripDb.trips.filter((tripItem) => tripItem.id == id);
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
                className="w-full h-full rounded-full hidden sm:block opacity-20"
              />
            ),
          }}
        >
          <Tab
            className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12"
            disableRipple
            label="Trip Details"
          />
          <Tab
            className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12"
            disableRipple
            label="Commodity Info"
          />
          <Tab
            className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12"
            disableRipple
            label="Rate info"
          />
          <Tab
            className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12"
            disableRipple
            label="Permits"
          />
          <Tab
            className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12"
            disableRipple
            label="TimeLine"
          />
        </Tabs>
        <Box className="w-full">
          {tabValue === 0 && <TripDetailsTab data={tripDetail[0].orders} />}
          {tabValue === 1 && (
            <CommodityInfoTab data={tripDetail[0].commodity} />
          )}
          {tabValue === 2 && <RateInfoTab data={tripDetail[0].rate_info} />}
          {tabValue === 3 && <PermitTab data={tripDetail[0].permission} />}
          {tabValue === 4 && <TimeLineTab />}
        </Box>
      </Box>
    </Box>
  );
};

export default Trip;
