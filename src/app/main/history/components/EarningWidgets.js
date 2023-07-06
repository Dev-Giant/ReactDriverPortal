import { Box } from "@mui/material";
import Widget1 from "./Widget1";

const widgets = [
  {
    id: "widget1",
    title: "Gross",
    data: {
      name: "$",
      count: 24100,
      extra: {
        name: "Last Week",
        count: 7500,
      },
    },
  },
  {
    id: "widget2",
    title: "Avg $/M",
    data: {
      name: "$",
      count: 3.78,
      extra: {
        name: "Last Week",
        count: 3.56,
      },
    },
  },
  {
    id: "widget3",
    title: "Loaded $/M",
    data: {
      name: "$",
      count: 4.02,
      extra: {
        name: "Last Week",
        count: 3.72,
      },
    },
  },
];

const EarningWidgets = () => {
  return (
    <Box className="flex flex-wrap w-full">
      {widgets.map((widgetItem) => {
        return (
          <Box
            key={widgetItem.id}
            className="widget flex w-full sm:w-1/2 md:w-1/3 p-12"
          >
            <Widget1 widget={widgetItem} />
          </Box>
        );
      })}
    </Box>
  );
};

export default EarningWidgets;
