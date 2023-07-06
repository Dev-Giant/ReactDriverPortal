import { Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";
import { profileDb } from "src/@fake-db/db/profile-db";
import GeneralTab from "./components/GeneralTab";
import BillingTab from "./components/BillingTab";
import CarrierTab from "./components/CarrierTab";
import NotificationsTab from "./components/NotificationsTab";
import PasswordTab from "./components/PasswordTab";

const Profile = () => {
  const [tabValue, setTabValue] = useState(0);
  function handleTabChange(event, value) {
    setTabValue(value);
  }
  const profileDetail = profileDb.profile;
  return (
    <Box className="w-full flex justify-center my-64 px-16">
      <Box className="w-full md:w-4/5">
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          classes={{ root: "w-full h-64 border-b-1" }}
        >
          <Tab className="h-64" label="General" />
          <Tab className="h-64" label="Billing" />
          <Tab className="h-64" label="Carrier" />
          <Tab className="h-64" label="Notifications" />
          <Tab className="h-64" label="Change Password" />
        </Tabs>
        <div>
          <div className={tabValue !== 0 ? "hidden" : ""}>
            <GeneralTab />
          </div>

          <div className={tabValue !== 1 ? "hidden" : ""}>
            <BillingTab />
          </div>

          <div className={tabValue !== 2 ? "hidden" : ""}>
            <CarrierTab />
          </div>

          <div className={tabValue !== 3 ? "hidden" : ""}>
            <NotificationsTab />
          </div>

          <div className={tabValue !== 4 ? "hidden" : ""}>
            <PasswordTab />
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Profile;
