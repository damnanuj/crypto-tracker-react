import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../components/Common/Header/Header";
import Loader from "../components/Common/Loader/Loader";
import { CoinObject } from "../functions/convertObject";
import ListComponent from "../components/Dashboard/List/ListComponent";
import CoinInfo from "../components/Coin/coinInfo/CoinInfo";

const CoinPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [coinData, setCoinData] = useState();

  useEffect(() => {
    if (id) {
      const options = {
        method: "GET",
        url: `https://api.coingecko.com/api/v3/coins/${id}`,
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": "CG-9e97Z7c8kD5jNAKgBBDPBMXB",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          CoinObject(setCoinData, response.data);
          setLoading(false);
        })
        .catch(function (error) {
          console.error(error);
          setLoading(false);
        });
    }
  }, [id]);

  return (
    <div>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
        <div className="grayWrapper">
          {" "}
          <ListComponent coin={coinData} />{" "}
        </div>
        <CoinInfo heading={coinData.name} desc={coinData.desc}/>
        </>
      )}
    </div>
  );
};

export default CoinPage;
