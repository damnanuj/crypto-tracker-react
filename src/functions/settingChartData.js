import { convertDate } from "./convertDate";

export const settingChartData =({setChartData, prices})=>{
    setChartData({
        labels: prices.map((price) => convertDate(price[0])),
        datasets: [
          {
            data: prices.map((price) => price[1]),
            borderColor: "#007bff",
            borderWidth: 2,
            fill: true,
            tension: 0.25,
            backgroundColor: "rgba(58, 128, 233,0.1)",

            pointRadius: 0,
          },
        ],
      });
}