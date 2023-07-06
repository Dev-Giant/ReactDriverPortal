import { Box, Grid, Card, Typography } from "@mui/material";

const CommodityInfoTab = ({ data }) => {
  return (
    <Box className="w-full">
      <Card className="w-full py-16 px-64">
        <Grid container spacing={4}>
          <Grid item md={6}>
            <Box>
              <Box className="flex my-32">
                <Typography variant="body2" className="font-bold text-base">
                  Piece count:
                </Typography>
                <Typography variant="body2" className="text-base">
                  {data.piece_count}
                </Typography>
              </Box>
              <Box className="flex my-32">
                <Typography variant="body2" className="font-bold text-base">
                  Width:
                </Typography>
                <Typography variant="body2" className="text-base">
                  {data.width}
                </Typography>
              </Box>
              <Box className="flex my-32">
                <Typography variant="body2" className="font-bold text-base">
                  Height:
                </Typography>
                <Typography variant="body2" className="text-base">
                  {data.height}
                </Typography>
              </Box>
              <Box className="flex my-32">
                <Typography variant="body2" className="font-bold text-base">
                  Length:
                </Typography>
                <Typography variant="body2" className="text-base">
                  {data.length}
                </Typography>
              </Box>
              <Box className="flex my-32">
                <Typography variant="body2" className="font-bold text-base">
                  Weight:
                </Typography>
                <Typography variant="body2" className="text-base">
                  {data.weight}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box>
              <Box className="flex my-32">
                <Typography variant="body2" className="font-bold text-base">
                  Trailer Type:
                </Typography>
                <Typography variant="body2" className="text-base">
                  {data.trailer_type}
                </Typography>
              </Box>
              <Box className="flex my-32">
                <Typography variant="body2" className="font-bold text-base">
                  Loaded Miles:
                </Typography>
                <Typography variant="body2" className="text-base">
                  {data.loaded_miles}
                </Typography>
              </Box>
              <Box className="flex my-32">
                <Typography variant="body2" className="font-bold text-base">
                  Empty Miles:
                </Typography>
                <Typography variant="body2" className="text-base">
                  {data.empty_miles}
                </Typography>
              </Box>
              <Box className="flex my-32">
                <Typography variant="body2" className="font-bold text-base">
                  Total Miles:
                </Typography>
                <Typography variant="body2" className="text-base">
                  {data.total_miles}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default CommodityInfoTab;
