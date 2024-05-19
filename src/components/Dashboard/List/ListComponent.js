import React from "react";
import "./list.scss";
import { Tooltip } from "@mui/material";

const ListComponent = ({ coin }) => {
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

  return (
    <tr className={`list-card ${cardStyle}`}>
      <Tooltip title="coin logo & name">
        <td>
          <div className="name-logo">
            <img src={coin.image} className="coinImg" alt="logo" />
            <div className="symbol-name">
              <h3 className="name">{coin.name}</h3>
              <p className="symbol">{coin.symbol}</p>
            </div>
          </div>
        </td>
      </Tooltip>

      <Tooltip title="percentage change">
        <td>
          <div className="percentContainer">
            <p className={percentageStyle}>
              {coin.price_change_percentage_24h}%
            </p>
            {/* TODO:icon */}
            {price >= 0 ? (
              <span className="material-icons priceUp">trending_up</span>
            ) : (
              <span className="material-icons priceDown">trending_down</span>
            )}
          </div>
        </td>
      </Tooltip>

      <Tooltip title={`cuurent price: $${coin.current_price}`}>
        <td>
          <h2 className={priceStyle}>${coin.current_price}</h2>
        </td>
      </Tooltip>
      <Tooltip title="Total volume">
        <td>
          <h5 className="vol">${coin.total_volume}</h5>
        </td>
      </Tooltip>
      <Tooltip title="Market Cap">
        <td>
          <h5 className="cap">${coin.market_cap}</h5>
        </td>
      </Tooltip>
    </tr>
  );
};

export default ListComponent;
