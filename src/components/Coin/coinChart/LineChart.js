import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; //Dont get rid of this
import "./style.scss"
import { formatNumber } from "../../../functions/numberFormatter";


function LineChart({ chartData,priceType, multiAxis }) {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      y: {
        // type: "linear",
        // display: true,
        // position: "left",
        ticks: {
          callback: function (value) {
            if (priceType === "total_volumes") {
              return formatNumber(value);
            } else if (priceType === "market_caps") {
              return "$" + formatNumber(value);
            } else {
              return "$" + value.toLocaleString();
            }
          },
        },
      },
      // y2: multiAxis && {
      //   type: "linear",
      //   display: true,
      //   position: "right",
      //   ticks: {
      //     callback: function (value) {
      //       if (priceType === "total_volumes") {
      //         return formatNumber(value);
      //       } else if (priceType === "market_caps") {
      //         return "$" + formatNumber(value);
      //       } else {
      //         return "$" + value.toLocaleString();
      //       }
      //     },
      //   },
      // },
    },
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;