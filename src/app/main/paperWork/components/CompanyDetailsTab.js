import { Box, Typography, Grid, Card } from "@mui/material";
import MainTable from "./MainTable";
import ShareModal from "./ShareModal";

const files = [
  {
    id: "1",
    name: "IFTA Certificate",
    owner: "Emily Bennett",
    size: "1.2 Mb",
    modified: "July 8, 2017",
    opened: "July 8, 2017",
    created: "July 8, 2017",
    extention: "",
    location: "My Files > Documents",
    offline: true,
    preview: "assets/images/etc/sample-file-preview.jpg",
  },
  {
    id: "2",
    name: "MC Certificate",
    owner: "Emily Bennett",
    size: "980 Kb",
    modified: "July 8, 2017",
    opened: "July 8, 2017",
    created: "July 8, 2017",
    extention: "",
    location: "My Files > Documents",
    offline: true,
    preview: "assets/images/etc/sample-file-preview.jpg",
  },
  {
    id: "3",
    name: "Kentucky Certificate",
    owner: "Emily Bennett",
    size: "980 Mb",
    modified: "July 8, 2017",
    opened: "July 8, 2017",
    created: "July 8, 2017",
    extention: "",
    location: "My Files > Documents",
    offline: true,
    preview: "assets/images/etc/sample-file-preview.jpg",
  },
  {
    id: "4",
    name: "Pensylvania Certificate",
    owner: "Emily Bennett",
    size: "52 Kb",
    modified: "July 8, 2017",
    opened: "July 8, 2017",
    created: "July 8, 2017",
    extention: "",
    location: "My Files > Documents",
    offline: true,
    preview: "assets/images/etc/sample-file-preview.jpg",
  },
];

const CompanyDetailsTab = () => {
  return (
    <Box className="w-full">
      <Card className="w-full p-32 pt-0">
        <Box className="w-full">
          <Box className="w-full mt-32 text-right">
            <ShareModal />
          </Box>
          <Grid container className="mb-32">
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="body2">Carrier name</Typography>
                <Typography variant="h6">SYNCHRON DISPATCH UNION</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="body2">Fax</Typography>
                <Typography variant="h6">7025000979</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="body2">Phone</Typography>
                <Typography variant="h6">7025000979</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="body2">Dispatch email</Typography>
                <Typography variant="h6">
                  dispatch@synchrondispatch.com
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <MainTable files={files} />
        </Box>
      </Card>
    </Box>
  );
};

export default CompanyDetailsTab;
