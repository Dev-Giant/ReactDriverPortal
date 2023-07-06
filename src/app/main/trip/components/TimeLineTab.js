import Widget1 from "./Widget1";

const chartWidget = {
  id: "widget1",
  series: {
    2019: [
      {
        name: "Sales",
        data: [1.9, 3, 3.4, 2.2, 2.9, 3.9, 2.5, 3.8, 4.1, 3.8, 3.2, 2.9],
        fill: "start",
      },
    ],
    2020: [
      {
        name: "Sales",
        data: [2.2, 2.9, 3.9, 2.5, 3.8, 3.2, 2.9, 1.9, 3, 3.4, 4.1, 3.8],
        fill: "start",
      },
    ],
    2021: [
      {
        name: "Sales",
        data: [3.9, 2.5, 3.8, 4.1, 1.9, 3, 3.8, 3.2, 2.9, 3.4, 2.2, 2.9],
        fill: "start",
      },
    ],
  },
  options: {
    chart: {
      type: "area",
      height: "100%",
      background: "transparent",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    theme: {
      mode: "dark",
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      tooltip: {
        enabled: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
    },
    markers: {
      size: 3,
      strokeWidth: 1.5,
      strokeOpacity: 1,
      strokeDashArray: 0,
      fillOpacity: 1,
      shape: "circle",
      radius: 2,
      hover: {
        size: 5,
      },
    },
    fill: {
      type: "solid",
      opacity: 0.7,
      gradient: {
        shadeIntensity: 0.4,
        opacityFrom: 1,
        opacityTo: 0.5,
        stops: [30, 100, 100],
      },
    },
    grid: {
      show: true,
      strokeDashArray: 3,
      position: "back",
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      width: 1.5,
      dashArray: 0,
    },
  },
};

const TimeLineTab = () => {
  return (
    <>
      <Widget1 data={chartWidget} />
    </>
  );
};

export default TimeLineTab;
