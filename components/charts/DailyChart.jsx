import React from "react";
import { Card } from "@material-tailwind/react";
import Chart from "react-apexcharts";


const dailyConfig = {
  type: "bar",
  height: 240,
  series: [
    {
      name: "Users",
      data: [50, 150, 300, 320, 500, 350, 200],
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
        "M",
        "T",
        "W",
        "T",
        "F",
        "S",
        "S",
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
        right: 30,
      },
    },
    fill: {
      opacity: 0.8,
    },
  },
};

function DailyChart() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Card className="px-2 pb-3 bg-color-[#a50046] dark:bg-color-[#5400a7]">
        <Chart {...dailyConfig} />
      </Card>
    </div>
  );
}

export default DailyChart;