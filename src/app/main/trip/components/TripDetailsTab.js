import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Avatar from "@mui/material/Avatar";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GoogleMap from "google-map-react";
import { useState } from "react";

function Marker(props) {
  return (
    <Tooltip title={props.text} placement="top">
      <Icon className="text-red">place</Icon>
    </Tooltip>
  );
}

const TripDetailsTab = ({ data }) => {
  const [map, setMap] = useState("Pickup");

  return (
    <div>
      <div className="pb-48">
        <div className="pb-16 flex items-center">
          <Icon color="action">account_circle</Icon>
          <Typography className="h2 mx-12 font-medium" color="textSecondary">
            Customer
          </Typography>
        </div>

        <div className="mb-24">
          <div className="table-responsive mb-48">
            <table className="simple">
              <thead>
                <tr>
                  <th>
                    <Typography className="font-semibold">Name</Typography>
                  </th>
                  <th>
                    <Typography className="font-semibold">Email</Typography>
                  </th>
                  <th>
                    <Typography className="font-semibold">Phone</Typography>
                  </th>
                  <th>
                    <Typography className="font-semibold">Company</Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="flex items-center">
                      <Avatar src="assets/images/avatars/Abbott.jpg" />
                      <Typography className="truncate mx-8">
                        Dollie Block
                      </Typography>
                    </div>
                  </td>
                  <td>
                    <Typography className="truncate">
                      abbott@withinpixels.com
                    </Typography>
                  </td>
                  <td>
                    <Typography className="truncate">
                      +1-202-555-0175
                    </Typography>
                  </td>
                  <td>
                    <span className="truncate">Saois</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {data.map((dataItem) => {
            return (
              <Accordion
                key={dataItem.address}
                className="border-0 shadow-0 overflow-hidden"
                expanded={map === dataItem.type}
                onChange={() =>
                  setMap(map !== dataItem.type ? dataItem.type : false)
                }
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  classes={{ root: "border border-solid rounded-16 mb-16" }}
                >
                  <Typography className="font-semibold">
                    {dataItem.type} Address: {dataItem.address}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="flex flex-col md:flex-row -mx-8">
                  <Typography className="w-full md:max-w-256 mb-16 md:mb-0 mx-8 text-16">
                    {dataItem.address}
                  </Typography>
                  <div className="w-full h-320 rounded-16 overflow-hidden mx-8">
                    <GoogleMap
                      bootstrapURLKeys={{
                        key: process.env.REACT_APP_MAP_KEY,
                      }}
                      defaultZoom={15}
                      defaultCenter={[40.7424739, -73.99283919999999]}
                    >
                      <Marker
                        text={dataItem.address}
                        lat={41.2183223}
                        lng={-95.8420876}
                      />
                    </GoogleMap>
                  </div>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TripDetailsTab;
