import React from "react";
import "./grid.scss";
import { Tooltip } from "@mui/material";
import { formatNumber } from "../../../functions/numberFormatter";

const GridComponent = ({ coin }) => {
  const cardStyle = `${
    coin.price_change_percentage_24h >= 0 ? "green" : "red"
  }`;
  const percentageStyle = `percentageChange ${
    coin.price_change_percentage_24h >= 0 ? "green" : "red"
  }`;
  const priceStyle = `currentPrice ${
    coin.price_change_percentage_24h >= 0 ? "green" : "red"
  }`;
  const price = `${coin.price_change_percentage_24h}`;
  const favorite = `${coin.price_change_percentage_24h >= 0 ? "green" : "red"}`;

  return (
    <div className={`grid-card ${cardStyle}`}>
      <div className="name-logo">
        <img src={coin.image} className="coinImg" alt={coin.name} />
        <div className="symbol-name">
          <h3 className="name">{coin.name}</h3>
          <p className="symbol">{coin.symbol}</p>
        </div>
        <Tooltip title="Add to watchlist">
        <span className={`material-icons favorite ${favorite}`}>favorite</span>
        </Tooltip>
      </div>
      <div className="percentContainer">
        <p className={percentageStyle}>{coin.price_change_percentage_24h}%</p>
        {/* TODO:icon */}
        {price >= 0 ? (
          <span className="material-icons priceUp">trending_up</span>
        ) : (
          <span className="material-icons priceDown">trending_down</span>
        )}
      </div>
      <h2 className={priceStyle}>${coin.current_price}</h2>
      <div className="totalVolume">
        <h5>
          Total Volume: <span>${formatNumber(coin.total_volume)}</span>{" "}
        </h5>
        <h5>
          Market Cap: <span>${formatNumber(coin.market_cap)}</span>
        </h5>
      </div>
    </div>
  );
};

export default GridComponent;
