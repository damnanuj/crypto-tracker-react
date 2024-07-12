import axios from "axios";

export const getCoinData = ({ id }) => {
  if (id) {
    const options = {
      method: "GET",
      url: `https://api.coingecko.com/api/v3/coins/${id}`,
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-9e97Z7c8kD5jNAKgBBDPBMXB",
      },
    };

    const coinData = axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
      return coinData;
    }
};
