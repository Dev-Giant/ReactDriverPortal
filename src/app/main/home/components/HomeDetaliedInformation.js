import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const HomeDetailedInformation = () => {
  return (
    <Box
      className="flex justify-center w-full"
      sx={{ margin: { xs: "10px 0px", md: "50px 0px" }, padding: "0px 30px" }}
    >
      <Card
        sx={{ maxWidth: 1100 }}
        className="flex flex-col md:flex-row w-full items-center px-16"
      >
        <CardMedia
          component="img"
          image="assets/images/avatars/male-09.jpg"
          alt="user avatar"
          sx={{
            width: { xs: "80%", md: "auto" },
            height: "80%",
            marginTop: { xs: "20px", md: "0px" },
            borderRadius: 10,
            border: "0.5rem #eee solid",
          }}
        />
        <CardContent sx={{ width: { xs: "100%", md: "80%" } }}>
          <Typography
            sx={{ fontSize: { xs: "4rem", md: "6rem" } }}
            gutterBottom
          >
            Veljko Evence
          </Typography>
          <Typography variant="h5" component="div" className="my-16">
            Eld Milage : 4,514.45
          </Typography>
          <Typography variant="h5" component="div" className="my-16">
            TRUCK : 454 : CASCADIA FRHT WHITE IL
          </Typography>
          <Typography variant="h5" component="div" className="my-16">
            TRAILER : 702: BENSON, 53' STEP DECK / SINGLE DROP TRAILER 2016
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default HomeDetailedInformation;
