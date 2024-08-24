import React, { useEffect, useState } from "react";
import { fetch100CoinsData } from "../../../../functions/fetch100CoinsData";
import { MenuItem, Select } from "@mui/material";
import "./SelectCoins.scss";
const SelectCoins = ({ crypto1, crypto2, handleCoinChange }) => {
  const [allCoins, setAllCoins] = useState([]);
  const styles = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };

  useEffect(() => {
    getCoins();
  }, []);
  async function getCoins() {
    const my100Coins = await fetch100CoinsData();
    setAllCoins(my100Coins);
  }

  return (
    <div className="selectCoins-flex">
      <div className="crypto-1">
        <p>Crypto 1</p>
        <Select
          sx={styles}
          value={crypto1}
          label="Crypto 1"
          onChange={(event) => handleCoinChange(event, false)}
        >
          {allCoins.filter((item) => item.id !== crypto2).map((coin, i) => (
              <MenuItem key={i} value={coin.id}>
                {coin.name}
              </MenuItem>
            ))}
        </Select>
      </div>
      <div className="crypto-2">
        <p>Crypto 2</p>
        <Select
          sx={styles}
          value={crypto2}
          label="Crypto 2"
          onChange={(event) => handleCoinChange(event, true)}
        >
          {allCoins.filter((item) => item.id !== crypto1).map((coin, i) => (
            <MenuItem key={i} value={coin.id}>
              {coin.name}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default SelectCoins;
