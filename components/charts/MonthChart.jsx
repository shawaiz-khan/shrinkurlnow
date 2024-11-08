import React from "react";
import { Card } from "@material-tailwind/react";
import Chart from "react-apexcharts";

const monthConfig = {
  type: "bar",
  height: 240,
  series: [
    {
      name: "Users",
      data: [5500, 6400, 4000, 4600, 10000, 8500, 6000, 6300, 9000],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: "primary",
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 3,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "gray",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
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
    },
    yaxis: {
      labels: {
        style: {
          colors: "gray",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
  },
};

function MonthChart() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Card className="px-2 pb-3 bg-color-[#a50046] dark:bg-color-[#5400a7]">
        <Chart {...monthConfig} />
      </Card>
    </div>
  );
}

export default MonthChart;
