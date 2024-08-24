import axios from "axios";

export const getCoinPrices = async (id, days, priceType) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    );
    console.log("Prices ==>>", response.data);
    return response.data[priceType];
  } catch (error) {
    console.log("error==>>", error);
  }
};