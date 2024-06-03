import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import { fetch100CoinsData } from "../functions/fetch100CoinsData";
import { CircularProgress } from "@mui/material";
import SearchBar from "../components/Dashboard/Searchbar/SearchBar";

import BasicPagination from "../components/Dashboard/Pagination/Pagination";

const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [filteredCoins, setFilteredCoins] = useState([]);
  useEffect(() => {
    if (search) {
      setFilteredCoins(
        coins.filter(
          (coin) =>
            coin.name.toLowerCase().includes(search.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setFilteredCoins(coins.slice((page - 1) * 10, (page - 1) * 10 + 10));
    }
  }, [search,page,coins]);

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handlePageChange = (e, value) => {
    setPage(value);
    console.log("valueee", value);
    setFilteredCoins(coins.slice((value - 1) * 10, (value - 1) * 10 + 10));
    console.log("filteredCoins", filteredCoins);
    
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const marketData = await fetch100CoinsData();
        console.log(marketData);
        setCoins(marketData);
        setTimeout(() => setLoading(false), 50);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="dashboardContainer">
      <Header />
      <SearchBar search={search} onSearchChange={onSearchChange} />
      <TabsComponent coins={filteredCoins} />
      {!search && (
            <BasicPagination
              page={page}
              handlePageChange={handlePageChange}
            />
          )}
    </div>
  );
};

export default Dashboard;
