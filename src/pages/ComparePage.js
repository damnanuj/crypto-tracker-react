import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/Header";
import SelectCoins from "../components/Common/compare/SelectCoins/SelectCoins";
import SelectDays from "../components/Coin/selectDays/SelectDays";
import { getCoinData } from "../functions/getCoinData";
import { settingChartData } from "../functions/settingChartData";
import { CoinObject } from "../functions/convertObject";
import { getCoinPrices } from "../functions/getCoinPrices";
import Loader from "../components/Common/Loader/Loader";
import ListComponent from "../components/Dashboard/List/ListComponent";
import CoinInfo from "../components/Coin/coinInfo/CoinInfo";
import LineChart from "../components/Coin/coinChart/LineChart";
import TogglePriceType from "../components/Coin/priceType/TogglePriceType";

const ComparePage = () => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState([]);

  async function handleDaysChange(event) {
    setLoading(true);
    setDays(event.target.value);
    const prices1 = await getCoinPrices(crypto1, event.target.value, priceType);
    const prices2 = await getCoinPrices(crypto2, event.target.value, priceType);
    if (prices1 && prices2 && prices1.length > 0 && prices2.length > 0) {
      settingChartData({ setChartData, prices1, prices2 });
      setLoading(false);
    } else {
      setLoading(false);
    }
  }

  // toggle price type function
  const handlePriceTypeChange = async (event, newType) => {
    setLoading(true);
    setPriceType(newType)
    const prices1 = await getCoinPrices(crypto1, days, newType);
    const prices2 = await getCoinPrices(crypto2, days, newType);
    if (prices1 && prices2 && prices1.length > 0 && prices2.length > 0) {
      settingChartData({ setChartData, prices1, prices2 });
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [crypto1, crypto2, days, priceType]);

  async function getData() {
    setLoading(true);

    const data1 = await getCoinData(crypto1);
    const data2 = await getCoinData(crypto2);

    if (data1) {
      CoinObject(setCrypto1Data, data1);
    }
    if (data2) {
      CoinObject(setCrypto2Data, data2);
    }

    if (data1 && data2) {
      const prices1 = await getCoinPrices(crypto1, days, priceType);
      const prices2 = await getCoinPrices(crypto2, days, priceType);

      if (prices1 && prices2 && prices1.length > 0 && prices2.length > 0) {
        settingChartData({ setChartData, prices1, prices2 });
        console.log("Prices fetched", prices1, prices2);
        setLoading(false);
      } else {
        console.log("Prices not fetched");
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }

  const handleCoinChange = async (event, isCrypto2) => {
    setLoading(true);
    if (isCrypto2) {
      setCrypto2(event.target.value);
    } else {
      setCrypto1(event.target.value);
    }
  };

  

  return (
    <div>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <div className="select_crypto_days">
            <SelectCoins
              crypto1={crypto1}
              crypto2={crypto2}
              handleCoinChange={handleCoinChange}
            />
            <SelectDays
              days={days}
              handleDaysChange={handleDaysChange}
              noPTag={true}
            />
          </div>
          <div className="grayWrapper">
            <ListComponent coin={crypto1Data} />
          </div>
          <div className="grayWrapper">
            <ListComponent coin={crypto2Data} />
          </div>
          <div className="grayWrapper lineChart">
          <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
            <LineChart
              chartData={chartData}
              priceType={priceType}
              multiAxis={true}
            />
          </div>
          <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
          <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
        </>
      )}
    </div>
  );
};

export default ComparePage;
