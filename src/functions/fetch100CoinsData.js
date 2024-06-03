import axios from 'axios';

// "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
export const fetch100CoinsData = async () => {
  const options = {
    method: "GET",
    url: "https://api.coingecko.com/api/v3/coins/markets",
    params: {
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page: "100",
      page: "1",
    },
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": "CG-9e97Z7c8kD5jNAKgBBDPBMXB",
    },
  };

  const response = await axios.request(options);
  return response.data;
};
