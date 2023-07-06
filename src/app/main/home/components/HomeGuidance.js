import { Box, Card, Typography, Grid, Link } from "@mui/material";

const navigationImages = [
  {
    src: "map.jpg",
    title: "My Trip",
    link: "Trips",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula nullam augue ipsum dolor.",
  },
  {
    src: "truck.jpg",
    title: "My Unit",
    link: "Unit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula nullam augue ipsum dolor.",
  },
  {
    src: "book.jpg",
    title: "Paper Work",
    link: "PaperWork",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula nullam augue ipsum dolor.",
  },
  {
    src: "request.jpg",
    title: "Driver Request",
    link: "#",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula nullam augue ipsum dolor.",
  },
  {
    src: "history.jpg",
    title: "My History",
    link: "History",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula nullam augue ipsum dolor.",
  },
  {
    src: "home.jpg",
    title: "Home Time",
    link: "HomeRequest",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula nullam augue ipsum dolor.",
  },
];

const HomeGuidance = () => {
  return (
    <Box sx={{ paddingTop: { xs: "20px", md: "100px" } }}>
      <Grid container spacing={2} className="px-32">
        {navigationImages.map((naviItem) => {
          return (
            <Grid item xs={12} md={6} lg={6} xl={4} key={naviItem.title}>
              <Link href={`/${naviItem.link}`}>
                <Card className="relative" style={{ height: "100%" }}>
                  <img
                    src={`assets/images/pages/home/${naviItem.src}`}
                    alt="altimg"
                    style={{ width: "100%", height: "100%" }}
                  />
                  <Box
                    className="absolute flex flex-col cursor-pointer
                        items-center top-0 justify-center h-full z-10
                        w-full p-16 text-center bg-black bg-opacity-50"
                  >
                    <Box sx={{ maxWidth: "70%" }}>
                      <Typography
                        variant="h4"
                        className="mb-32 text-white"
                        sx={{ fontSize: { xs: "3rem", md: "5rem" } }}
                      >
                        {naviItem.title}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default HomeGuidance;
