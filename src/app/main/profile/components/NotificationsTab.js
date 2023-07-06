import { Box } from "@mui/material";
import NotificationCard from "./NotificationCard";

const notifications = [
  {
    id: 1,
    options: "success",
    message: "Succeed",
  },
  {
    id: 2,
    options: "info",
    message: "Here is your information",
  },
  {
    id: 3,
    options: "error",
    message: "Error Message",
  },
  {
    id: 4,
    options: "success",
    message: "Final One",
  },
  {
    id: 5,
    options: "warning",
    message: "This is warning message",
  },
];

const NotificationsTab = () => {
  return (
    <Box className="w-full flex justify-center">
      <Box className="w-full flex flex-wrap mt-32">
        {notifications.map((item) => {
          return (
            <Box key={item.id} className="w-full my-16">
              <NotificationCard item={item} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default NotificationsTab;
