import axios from "axios";

export const getCoinData = ( id ) => {
  const myData = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then(function (response) {
     return response.data
    })
    .catch(function (error) {
      console.error(error);
    });
    return myData
};
