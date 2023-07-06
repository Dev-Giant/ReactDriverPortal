import { Box, Card, TextField, Button } from "@mui/material";

const PasswordTab = () => {
  return (
    <Box className="w-full flex justify-center">
      <Box className="w-full flex flex-wrap mt-32">
        <Card className="w-full p-32">
          <TextField
            className="w-full my-16"
            success
            label="Old Password"
            defaultValue=""
            focused
          />
          <TextField className="w-full my-16" placeholder="New Password" />
          <TextField className="w-full my-16" placeholder="Confirm Password" />
          <Box className="flex flex-row-reverse">
            <Button
              className="text-center bg-white text-blue-400"
              variant="outlined"
            >
              Save Changes
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default PasswordTab;
