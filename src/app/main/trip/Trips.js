import { Box, Link, Grid, Card, Typography } from "@mui/material";

const trips = [
  {
    id: 9632,
    orders: [
      { type: "pickup", address: "Alpharetta, GA", date: "04/29" },
      { type: "delivery", address: "Salt Lake City, UT", date: "05/02" },
      { type: "delivery", address: "testst, AZ", date: "05/04" },
    ],
    img: "assets/images/pages/trip/trip1.jpg",
    tags: ["Main", "Partial"],
    commodity: {
      piece_count: 1,
      width: "8.inch",
      height: "10.inch",
      length: "360.inch",
      weight: "1700 .lb",
      trailer_type: "STEP DECK / SINGLE DROP TRAILER",
      loaded_miles: 7,
      empty_miles: 0,
      total_miles: 7,
    },
    detail: {},
  },
  {
    id: 150987,
    orders: [
      { type: "pickup", address: "Pooler, GA", date: "04/29" },
      { type: "delivery", address: "West Valley City, UT", date: "05/02" },
    ],
    img: "assets/images/pages/trip/trip2.jpg",
    tags: ["Main", "Partial"],
    commodity: {
      piece_count: 1,
      width: "102.inch",
      height: "102.inch",
      length: "150.inch",
      weight: "10000 .lb",
      trailer_type: "STEP DECK / SINGLE DROP TRAILER",
      loaded_miles: 65,
      empty_miles: 0,
      total_miles: 65,
    },
  },
  {
    id: 150989,
    orders: [
      { type: "pickup", address: "Pooler, GA", date: "04/28" },
      { type: "delivery", address: "Eugene, OR", date: "05/03" },
    ],
    img: "assets/images/pages/trip/trip3.jpg",
    tags: ["Main", "OD", "OD Permits"],
    commodity: {
      piece_count: 1,
      width: "102.inch",
      height: "102.inch",
      length: "200.inch",
      weight: "30000 .lb",
      trailer_type: "STEP DECK / SINGLE DROP TRAILER",
      loaded_miles: 2853,
      empty_miles: 104,
      total_miles: 2957,
    },
  },
];

const Trips = () => {
  return (
    <Box className="w-full flex justify-center">
      <Box className="w-full md:w-3/4 my-64">
        <Grid container spacing={4}>
          {trips.map((tripItem) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={tripItem.id}>
                <Link
                  href={`/Trips/${tripItem.id}`}
                  underline="none"
                  role="button"
                >
                  <Card className="w-full px-16 py-32 h-full flex flex-col justify-between">
                    <Box>
                      <Typography variant="h6" className="mb-32">
                        Load# {tripItem.id}
                      </Typography>
                      <Box>
                        {tripItem.orders.map((tripOrder) => {
                          return (
                            <Box key={tripOrder.address}>
                              <Grid container>
                                <Grid item xs={6} md={6}>
                                  <Typography>
                                    {tripOrder.type === "pickup"
                                      ? "P >>"
                                      : "D <<"}{" "}
                                    {tripOrder.address}
                                  </Typography>
                                </Grid>
                                <Grid item xs={6} md={6}>
                                  <Typography>{tripOrder.date}</Typography>
                                </Grid>
                              </Grid>
                            </Box>
                          );
                        })}
                      </Box>
                    </Box>
                    <Box className="mt-32">
                      <Box>
                        {tripItem.tags.map((tagItem) => {
                          return (
                            <Typography
                              variant="span mr-8 mb-8 text-white"
                              sx={{
                                padding: "2px 10px",
                                background: "green",
                                borderRadius: "10px",
                              }}
                            >
                              {tagItem}
                            </Typography>
                          );
                        })}
                      </Box>
                      <img
                        className="w-full mt-8"
                        src={tripItem.img}
                        style={{ height: "240px" }}
                        alt="altimg"
                      />
                    </Box>
                  </Card>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Trips;
