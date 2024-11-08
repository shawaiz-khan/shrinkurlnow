import React from "react";
import { Card } from "@material-tailwind/react";
import Chart from "react-apexcharts";

const weeklyConfig = {
  type: "bar",
  height: 240,
  series: [
    {
      name: "Users",
      data: [50, 40, 60, 80, 120, 350, 200, 230, 200],
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
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
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

function WeekChart() {
  return (
    <Card className="px-2 pb-3 bg-color-[#a50046] dark:bg-color-[#5400a7]">
      <Chart {...weeklyConfig} />
    </Card>
  );
}

export default WeekChart;