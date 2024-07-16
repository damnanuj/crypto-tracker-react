import React, { useEffect, useState } from "react";
import { fetch100CoinsData } from "../../../../functions/fetch100CoinsData";
import { MenuItem, Select } from "@mui/material";
import "./SelectCoins.scss";
const SelectCoins = () => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
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
  const handleCoinChange = (event, isCrypto2) => {
    if (isCrypto2) {
      setCrypto2(event.target.value);
      console.log("Crypto 2 id",event.target.value);
    } else {
        setCrypto1(event.target.value);
        console.log("Crypto 1 id",event.target.value);
    }
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
          {allCoins.map((coin, i) => (
            <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
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
          {allCoins.map((coin, i) => (
            <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default SelectCoins;
