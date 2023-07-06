import { Box, Button } from "@mui/material";

const buttons = ["Print all", "Print Single", "Copy", "Excel", "CSV", "PDF"];

const ButtonsGroup = () => {
  return (
    <Box className="flex flex-wrap justify-between">
      {buttons.map((item) => {
        return (
          <Box className="w-1/2 md:w-auto my-16 px-16" key={item}>
            <Button
              variant="outlined"
              className="w-full px-32 text-center bg-white text-blue-400"
            >
              {item}
            </Button>
          </Box>
        );
      })}
    </Box>
  );
};

export default ButtonsGroup;
