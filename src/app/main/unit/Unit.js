import { Card, Box, Grid, CardContent, Typography } from "@mui/material";
import SelectModal from "./components/SelectModal";
import ImageSelect from "./components/ImageSelect";

const Unit = () => {
  return (
    <Box className="container my-64 px-16" sx={{ margin: "0 auto" }}>
      <Grid container spacing={8}>
        <Grid item md={6}>
          <Card className="p-16">
            <Grid container spacing={2} className="mb-64">
              <ImageSelect
                initialValue="assets/images/pages/unit/truck1.jpg"
                indexedValue={1}
              />
              <ImageSelect
                initialValue="assets/images/pages/unit/truck1.jpg"
                indexedValue={2}
              />
            </Grid>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Truck: 454
              </Typography>
              <Grid container>
                <Grid item md={6}>
                  <Box className="my-32">
                    <Typography variant="span" color="text.secondary">
                      Make:
                    </Typography>
                    <Typography variant="button" color="text.secondary">
                      FRHT
                    </Typography>
                  </Box>
                  <Box className="my-32">
                    <Typography variant="span" color="text.secondary">
                      Plate:
                    </Typography>
                    <Typography variant="button" color="text.secondary">
                      P1033173
                    </Typography>
                  </Box>
                  <Box className="my-32">
                    <Typography variant="span" color="text.secondary">
                      State:
                    </Typography>
                    <Typography variant="button" color="text.secondary">
                      IL
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={6}>
                  <Box className="my-32">
                    <Typography variant="span" color="text.secondary">
                      Model:
                    </Typography>
                    <Typography variant="button" color="text.secondary">
                      CASCADIA
                    </Typography>
                  </Box>
                  <Box className="my-32">
                    <Typography variant="span" color="text.secondary">
                      vin:
                    </Typography>
                    <Typography variant="button" color="text.secondary">
                      3AKJHHDR1LSLJ4454
                    </Typography>
                  </Box>
                  <Box className="my-32">
                    <Typography variant="span" color="text.secondary">
                      Year:
                    </Typography>
                    <Typography variant="button" color="text.secondary">
                      2020
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
            <Box className="w-full flex justify-center">
              <SelectModal modalType={1} />
            </Box>
          </Card>
        </Grid>
        <Grid item md={6}>
          <Card className="p-16">
            <Grid container spacing={2} className="mb-64">
              <ImageSelect
                initialValue="assets/images/avatars/male-08.jpg"
                indexedValue={3}
              />
              <ImageSelect
                initialValue="assets/images/avatars/male-08.jpg"
                indexedValue={4}
              />
            </Grid>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Trailer: 702
              </Typography>
              <Grid container>
                <Grid item md={6}>
                  <Box className="my-32">
                    <Typography variant="span" color="text.secondary">
                      Make:
                    </Typography>
                    <Typography variant="button" color="text.secondary">
                      BENSON
                    </Typography>
                  </Box>
                  <Box className="my-32">
                    <Typography variant="span" color="text.secondary">
                      State:
                    </Typography>
                    <Typography variant="button" color="text.secondary">
                      IL
                    </Typography>
                  </Box>
                  <Box className="my-32">
                    <Typography variant="span" color="text.secondary">
                      Year:
                    </Typography>
                    <Typography variant="button" color="text.secondary">
                      2016
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={6}>
                  <Box className="my-32">
                    <Typography variant="span" color="text.secondary">
                      Model:
                    </Typography>
                    <Typography
                      variant="button"
                      color="text.secondary"
                    ></Typography>
                  </Box>
                  <Box className="my-32">
                    <Typography variant="span" color="text.secondary">
                      Plate:
                    </Typography>
                    <Typography variant="button" color="text.secondary">
                      848501
                    </Typography>
                  </Box>
                  <Box className="my-32">
                    <Typography variant="span" color="text.secondary">
                      vin:
                    </Typography>
                    <Typography variant="button" color="text.secondary">
                      1TTE532A9G3959702
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
            <Box className="w-full flex justify-center">
              <SelectModal modalType={2} />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Unit;
