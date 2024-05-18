import axios from 'axios';

export const fetchCoinsData = async () => {
  const options = {
    method: "GET",
    url: "https://api.coingecko.com/api/v3/coins/markets",
    params: {
      vs_currency: "usd",
      order: "id_asc",
      per_page: "50",
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
