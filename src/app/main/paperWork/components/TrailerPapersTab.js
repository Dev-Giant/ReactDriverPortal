import { Box, Card } from "@mui/material";
import MainTable from "./MainTable";

const files = [
  {
    id: "1",
    name: "Lease Agreement",
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
    name: "Lease Agreement",
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
    name: "Lease Agreement",
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
    name: "Registration",
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
  {
    id: "5",
    name: "Insurance",
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
  {
    id: "6",
    name: "Annual Inspection",
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

const TrailerPapersTab = () => {
  return (
    <Box className="w-full">
      <Card className="w-full p-32">
        <MainTable files={files} />
      </Card>
    </Box>
  );
};

export default TrailerPapersTab;
