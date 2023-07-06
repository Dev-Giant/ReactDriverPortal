import {
  Grid,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import CardLayout from "../../layout/CardLayout";

const ContactCards = ({ currentCards }) => {
  console.log(currentCards);
  return (
    <Grid container spacing={2} rowSpacing={8}>
      {currentCards &&
        currentCards.map((image) => (
          <Grid
            key={image.id}
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <CardLayout>
              <CardMedia
                sx={{ borderRadius: "50%", width: "unset", margin: "0 auto" }}
                component="img"
                height="25"
                image={image?.avatar}
                alt="no image"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  align="center"
                >
                  {image?.name} {image?.lastName}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="center"
                >
                  {image?.jobTitle}
                </Typography>
                <Typography variant="body2" className="my-4">
                  Email
                </Typography>
                <Typography variant="body1" component="div" className="my-4">
                  {image?.email}
                </Typography>
                <Grid container>
                  <Grid item md={6}>
                    <Typography variant="body2" className="my-4">
                      Phone
                    </Typography>
                    <Typography
                      variant="body1"
                      component="div"
                      className="my-4"
                    >
                      {image?.phone}
                    </Typography>
                  </Grid>
                  <Grid item md={6}>
                    <Typography variant="body2" className="my-4">
                      Location
                    </Typography>
                    <Typography
                      variant="body1"
                      component="div"
                      className="my-4"
                    >
                      {image?.address}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={8} className="my-16">
                  <Grid item xs={6} md={6}>
                    <Button
                      className="w-full text-center bg-white text-blue-400"
                      variant="outlined"
                    >
                      Message
                    </Button>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Button
                      className="w-full text-center bg-white text-purple-500"
                      variant="outlined"
                    >
                      Call
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </CardLayout>
          </Grid>
        ))}
    </Grid>
  );
};

export default ContactCards;
