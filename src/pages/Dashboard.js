import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import { fetch50CoinsData } from "../functions/fetch50CoinsData";
import { CircularProgress } from "@mui/material";
import SearchBar from "../components/Dashboard/Searchbar/SearchBar";

import BasicPagination from "../components/Dashboard/Pagination/Pagination";

const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };
  var filteredCoins = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const marketData = await fetch50CoinsData();
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
      <BasicPagination/>
    </div>
  );
};

export default Dashboard;
