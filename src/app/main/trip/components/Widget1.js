import { memo, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { motion } from "framer-motion";
import _ from "@lodash";
import { styled, useTheme, alpha } from "@mui/material/styles";
import { Tab, Tabs, Typography, Box } from "@mui/material";

const Root = styled("div")(({ theme }) => ({
  background: `linear-gradient(to right, ${theme.palette.primary.light} 0%, ${theme.palette.primary.dark} 100%)`,
  color: theme.palette.primary.contrastText,
}));

const Widget1 = (props) => {
  const theme = useTheme();
  const data = _.merge({}, props.data);

  const [tabValue, setTabValue] = useState(2);
  const series = data.series[Object.keys(data.series)[tabValue]];

  _.setWith(data, "options.fill.colors", [theme.palette.secondary.main]);
  _.setWith(data, "options.markers.colors", [theme.palette.secondary.main]);
  _.setWith(data, "options.stroke.colors", [
    theme.palette.primary.contrastText,
  ]);
  _.setWith(data, "options.markers.strokeColors", [
    theme.palette.primary.contrastText,
  ]);
  _.setWith(
    data,
    "options.grid.borderColor",
    alpha(theme.palette.primary.contrastText, 0.3)
  );

  return (
    <Root>
      <div className="container relative p-16 sm:p-24 flex flex-col sm:flex-row justify-between items-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="flex flex-col items-center sm:items-start mb-16 sm:mb-0">
            <Typography className="h2 font-semibold text-white">
              Trips
            </Typography>
            <Typography className="h5 font-medium text-white">
              Trips by month
            </Typography>
          </div>
        </motion.div>

        <div className="flex flex-row items-center">
          <Tabs
            value={tabValue}
            onChange={(event, value) => setTabValue(value)}
            indicatorColor="secondary"
            textColor="inherit"
            variant="scrollable"
            scrollButtons={false}
            className="w-full -mx-4 min-h-40"
            classes={{
              indicator: "flex justify-center bg-transparent w-full h-full",
            }}
            TabIndicatorProps={{
              children: (
                <Box
                  sx={{ bgcolor: "text.disabled" }}
                  className="w-full h-full rounded-full opacity-20"
                />
              ),
            }}
          >
            {Object.keys(data.series).map((key) => (
              <Tab
                key={key}
                className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12 capitalize"
                disableRipple
                label={key}
              />
            ))}
          </Tabs>
        </div>
      </div>
      <div className="container relative h-200 sm:h-256 pb-16">
        <ReactApexChart
          options={data.options}
          series={series}
          type={data.options.chart.type}
          height={data.options.chart.height}
        />
      </div>
    </Root>
  );
};

export default memo(Widget1);
