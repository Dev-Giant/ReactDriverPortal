import { Box } from "@mui/material";
import Widget from "./Widget";

const widgets = [
  {
    id: "widget1",
    title: "Total Miles",
    data: {
      name: "Miles",
      count: 6375,
      extra: {
        name: "Last Week",
        count: 2105,
      },
    },
  },
  {
    id: "widget2",
    title: "Loaded Miles",
    data: {
      name: "Miles",
      count: 6000,
      extra: {
        name: "Last Week",
        count: 2057,
      },
    },
  },
  {
    id: "widget3",
    title: "Empty Miles",
    data: {
      name: "Miles",
      count: 375,
      extra: {
        name: "Last Week",
        count: 48,
      },
    },
  },
];

const PerformanceWidgets = () => {
  return (
    <Box className="flex flex-wrap w-full">
      {widgets.map((widgetItem) => {
        return (
          <Box
            key={widgetItem.id}
            className="widget flex w-full sm:w-1/2 md:w-1/3 p-12"
          >
            <Widget widget={widgetItem} />
          </Box>
        );
      })}
    </Box>
  );
};

export default PerformanceWidgets;
