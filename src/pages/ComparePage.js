import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/Header";
import SelectCoins from "../components/Common/compare/SelectCoins/SelectCoins";
import SelectDays from "../components/Coin/selectDays/SelectDays";
import { getCoinData } from "../functions/getCoinData";
import { settingChartData } from "../functions/settingChartData";
import { CoinObject } from "../functions/convertObject";
import { getCoinPrices } from "../functions/getCoinPrices";
import Loader from "../components/Common/Loader/Loader";

const ComparePage = () => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");

  function handleDaysChange(event) {
    setDays(event.target.value);
  }

  useEffect(() => {
    getData();
  }, []);
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
      if (prices1.length > 0 && prices2.length > 0) {
        // settingChartData({setChartData, prices})
        console.log("PRice fetched", prices1, prices2);
        setLoading(false);
      }
    }
  }

  const handleCoinChange = async (event, isCrypto2) => {
    setLoading(true);
    if (isCrypto2) {
      setCrypto2(event.target.value);
      const data = await getCoinData(event.target.value);
      CoinObject(setCrypto2Data, data);
    } else {
      setCrypto1(event.target.value);
      const data = await getCoinData(event.target.value);
      CoinObject(setCrypto1Data, data);
    }
    const prices1 = await getCoinPrices(crypto1, days, "prices");
    const prices2 = await getCoinPrices(crypto2, days, "prices");
    
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
        </>
      )}
    </div>
  );
};

export default ComparePage;
