import { Box, Button, Card, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const BillingTab = () => {
  return (
    <Box className="w-full flex justify-center">
      <Box className="w-full flex flex-wrap mt-32">
        <Card className="w-full p-32">
          <Box>
            <Typography variant="button">billing info</Typography>
            <Card className="w-full bg-gray-100 text-black p-32 my-32">
              <Typography variant="h6" className="my-8">
                Jayvion Simon
              </Typography>
              <Box className="flex items-center my-8">
                <Typography variant="body2">Address: </Typography>
                <Typography variant="body2">
                  41256 Kamille Turnpike, East Sambury, New Hampshire, Kenya
                  85807
                </Typography>
              </Box>
              <Box className="flex items-center my-8">
                <Typography variant="body2">Phone: </Typography>
                <Typography variant="body2">365-374-4961</Typography>
              </Box>
              <Box>
                <Button className="text-red" startIcon={<DeleteIcon />}>
                  Delete
                </Button>
                <Button className="text-green" startIcon={<EditIcon />}>
                  Edit
                </Button>
              </Box>
            </Card>
            <Button className="text-green" startIcon={<AddIcon />}>
              Add New Address
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default BillingTab;
