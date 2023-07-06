import { useState } from "react";
import { Card, Icon, IconButton, Typography } from "@mui/material";
import clsx from "clsx";
import NotificationIcon from "./NotificationIcon";

const NotificationCard = ({ item }) => {
  const [close, setClose] = useState(true);

  const handleClose = () => {
    setClose(false);
  };

  return (
    <>
      {close ? (
        <Card
          className={clsx(
            "flex items-center relative w-full rounded-16 p-20 min-h-64 shadow",
            item.options === "success" && "bg-green-600 text-white",
            item.options === "info" && "bg-blue-700 text-white",
            item.options === "error" && "bg-red-600 text-white",
            item.options === "warning" && "bg-orange-600 text-white"
          )}
          elevation={0}
        >
          <NotificationIcon value={item.options} />
          <Typography component="div">{item.message}</Typography>
          <IconButton
            disableRipple
            className="top-0 right-0 absolute p-8"
            color="inherit"
            size="small"
            onClick={handleClose}
          >
            <Icon className="text-12 opacity-75" color="inherit">
              close
            </Icon>
          </IconButton>
        </Card>
      ) : (
        <></>
      )}
    </>
  );
};

export default NotificationCard;
