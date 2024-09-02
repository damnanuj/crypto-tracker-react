import React, { useContext } from "react";
import "./list.scss";
import { Tooltip } from "@mui/material";
import { formatNumber } from "../../../functions/numberFormatter";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeContext } from "../../../context/ThemeContext";

const ListComponent = ({ coin }) => {

  const {theme} = useContext(ThemeContext)


  const cardStyle = `${
    coin.price_change_percentage_24h >= 0 ? "green" : "red"
  }`;
  const percentageStyle = `percentageChange listPercentageChange ${
    coin.price_change_percentage_24h >= 0 ? "green" : "red"
  }`;
  const priceStyle = `currentPrice listPrice ${
    coin.price_change_percentage_24h >= 0 ? "green" : "red"
  }`;
  const price = `${coin.price_change_percentage_24h}`;
  const favorite = `${coin.price_change_percentage_24h >= 0 ? "green" : "red"}`;

  return (
    <Link to={`/coin/${coin.id}`} className={`${theme==="light"? 'light':""}`}>
      <motion.tr
        className={`list-card ${cardStyle} ${theme==="light"? 'light':""} `}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6}}
      >
        {/* Logo and name */}
        <Tooltip title="coin logo & name">
          <td>
            <div className="name-logo list-name-logo">
              <img src={coin.image} className="coinImg listImg" alt="logo" />
              <div className="symbol-name">
                <h3 className={`name listName ${theme==="light"? 'light':""}`}>{coin.name}</h3>
                <p className="symbol listSymbol">{coin.symbol}</p>
              </div>
            </div>
          </td>
        </Tooltip>
        {/* percentage change */}
        <Tooltip title="percentage change">
          <td>
            <div className="percentContainer">
              <p className={percentageStyle}>
                {coin.price_change_percentage_24h}%
              </p>
              {/* TODO:icon */}
              {price >= 0 ? (
                <span className="material-icons priceUp row-icon">
                  trending_up
                </span>
              ) : (
                <span className="material-icons priceDown row-icon">
                  trending_down
                </span>
              )}
            </div>
          </td>
        </Tooltip>

        <Tooltip title={`cuurent price: $${coin.current_price}`}>
          <td>
            <h2 className={priceStyle}>${formatNumber(coin.current_price)}</h2>
          </td>
        </Tooltip>
        <Tooltip title="Total volume">
          <td className="row-total-vol">
            <h5 className={`vol ${theme==="light"? 'light':""}` }>${formatNumber(coin.total_volume)}</h5>
          </td>
        </Tooltip>
        <Tooltip title="Market Cap">
          <td className="row-market-cap">
            <h5 className={`cap ${theme==="light"? 'light':""}` }>${formatNumber(coin.market_cap)}</h5>
          </td>
        </Tooltip>
        <Tooltip title="Add to watchlist">
          <td>
            <span className={`material-icons listFavorite ${favorite} ${theme==="light"? 'light':""}`}>
              favorite
            </span>
          </td>
        </Tooltip>
      </motion.tr>
    </Link>
  );
};

export default ListComponent;
