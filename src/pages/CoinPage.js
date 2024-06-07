import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../components/Common/Header/Header";
import Loader from "../components/Common/Loader/Loader";

const CoinPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
    })
    .catch(function (error) {
      console.error(error);
      setLoading(false);
    });

  return (
    <div>
      <Header />
      {loading ? <Loader /> : <p> coin id: {id}</p>}
    </div>
  );
};

export default CoinPage;
