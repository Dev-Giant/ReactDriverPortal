import {
  Box,
  Card,
  Divider,
  Typography,
  TextField,
  Button,
  IconButton,
  Avatar,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const CarrierTab = () => {
  return (
    <Box className="w-full flex justify-center">
      <Box className="w-full flex flex-wrap mt-32">
        <Card className="w-full pt-32">
          <Box className="w-full">
            <Box className="w-full px-16">
              <Typography variant="h6">Carrier Invitatin Code</Typography>
              <Typography className="mb-16">
                In order to join a carrier you must apply the invitation code
                bellow. Once code applied the carrier will be able to attach
                trips to your account
              </Typography>
              <Divider className="px-16 my-16" />
              <Box className="w-full flex items-center justify-between">
                <TextField
                  className="w-2/3"
                  label="Invitation Code"
                  defaultValue=""
                />
                <Button
                  className="w-1/4 text-center bg-white text-blue-400"
                  variant="outlined"
                >
                  Apply Code
                </Button>
              </Box>
            </Box>
          </Box>
          <Box className="p-16 w-full bg-gray-100 text-black mt-16">MEMBER</Box>
          <Box className="w-full p-16 flex justify-between items-center">
            <Box className="flex items-center">
              <Avatar alt="userimage"></Avatar>
              <Box className="ml-8">
                <Typography variant="body2 font-bold">ABC TRUCKING</Typography>
                <Typography variant="body2">cao.yu@devias.io</Typography>
              </Box>
            </Box>
            <IconButton>
              <MoreHorizIcon />
            </IconButton>
          </Box>
          <Box className="w-full p-16 flex justify-between items-center">
            <Box className="flex items-center">
              <Avatar
                alt="userimage"
                src="assets/images/avatars/andrew.jpg"
              ></Avatar>
              <Box className="ml-8">
                <Typography variant="body2 font-bold">ABC TRUCKING</Typography>
                <Typography variant="body2">cao.yu@devias.io</Typography>
              </Box>
            </Box>
            <IconButton>
              <MoreHorizIcon />
            </IconButton>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default CarrierTab;
