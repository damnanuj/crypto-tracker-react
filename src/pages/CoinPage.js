import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Common/Header/Header";
import Loader from "../components/Common/Loader/Loader";
import { CoinObject } from "../functions/convertObject";
import ListComponent from "../components/Dashboard/List/ListComponent";
import CoinInfo from "../components/Coin/coinInfo/CoinInfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../components/Coin/coinChart/LineChart";
import { badgeClasses } from "@mui/material";
import { convertDate } from "../functions/convertDate";
import SelectDays from "../components/Coin/selectDays/SelectDays";
import { settingChartData } from "../functions/settingChartData";

const CoinPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(7);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  async function getData() {
    const data = await getCoinData(id);
    if (data) {
      CoinObject(setCoinData, data);
      const prices = await getCoinPrices(id, days);
      if (prices.length > 0) {
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
        setLoading(false);
      }
    }
  }

  const handleDaysChange = async (event) => {
    setLoading(true)
    setDays(event.target.value);
    const prices = await getCoinPrices(id, event.target.value);
    if (prices.length > 0) {
      settingChartData({setChartData, prices})
      setLoading(false);
    }
 
  };

  return (
    <div>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="grayWrapper">
            <ListComponent coin={coinData} />
          </div>
          <div className="grayWrapper lineChart">
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <LineChart chartData={chartData} />
          </div>
          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </div>
  );
};

export default CoinPage;
