import { Box, Card } from "@mui/material";
import MainTable from "./MainTable";

const files = [
  {
    id: "1",
    name: "Cargo Insurance",
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
    name: "Liability Insurance",
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
];

const CompanyInsuranceTab = () => {
  return (
    <Box className="w-full">
      <Card className="w-full p-32">
        <MainTable files={files} />
      </Card>
    </Box>
  );
};

export default CompanyInsuranceTab;
