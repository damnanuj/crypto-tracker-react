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
import SelectDays from "../components/Coin/selectDays/SelectDays";
import { settingChartData } from "../functions/settingChartData";
import TogglePriceType from "../components/Coin/priceType/TogglePriceType";


const CoinPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(7);
  const [chartData, setChartData] = useState({});
  const [priceType, setPriceType] = useState('prices');

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id, days, priceType]);
  

  async function getData() {
    const data = await getCoinData(id);
    if (data) {
      CoinObject(setCoinData, data);
  
      const prices1 = await getCoinPrices(id, days, priceType);
      const prices2 = await getCoinPrices(id, days, priceType); // Modify if needed
  
      // Validate the prices here
      if (prices1 && Array.isArray(prices1) && prices1.length > 0) {
        settingChartData({ setChartData, prices1, prices2 });
        setLoading(false);
      } else {
        console.log("Invalid prices1 data:", prices1);
        setLoading(false);
      }
    }
  }

  const handleDaysChange = async (event) => {
    setLoading(true)
    setDays(event.target.value);
    const prices = await getCoinPrices(id, event.target.value ,priceType);
    if (prices.length > 0) {
      settingChartData({setChartData, prices})
      setLoading(false);
    }
 
  };

  // toggle price type function
  const handlePriceTypeChange = async (event, newType) => {
    setLoading(true)
    setPriceType(newType);
    const prices = await getCoinPrices(id, days, newType);
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
            <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
            <LineChart chartData={chartData} priceType={priceType} />
          </div>
          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </div>
  );
};

export default CoinPage;
