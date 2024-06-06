import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import { fetch100CoinsData } from "../functions/fetch100CoinsData";

import SearchBar from "../components/Dashboard/Searchbar/SearchBar";

import BasicPagination from "../components/Dashboard/Pagination/Pagination";
import Loader from "../components/Common/Loader/Loader";

import WrongRoute from "./WrongRoute";
import BackToTop from "../components/Common/BackToTop/BackToTop";

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
      setFilteredCoins(coins.slice((page - 1) * 20, (page - 1) * 20 + 20));
    }
  }, [search,page,coins]);

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handlePageChange = (e, value) => {
    setPage(value);
    console.log("valueee", value);
    setFilteredCoins(coins.slice((value - 1) * 20, (value - 1) * 20 + 20));
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

  // if (loading) {
  //   return (
  //    <Loader/>
  //   );
  // }

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
        {/* Error: {error.message} */}
        <WrongRoute errCode={error.message}/>
      </div>
    );
  }

  return (
    <div className="dashboardContainer">
      <Header />
      <BackToTop/>
      <SearchBar search={search} onSearchChange={onSearchChange} />
      {
        loading ? <Loader/> : <TabsComponent coins={filteredCoins} />
      }
      {!loading ? (
            <BasicPagination
              page={page}
              handlePageChange={handlePageChange}
            />
          ) : null}
    </div>
  );
};

export default Dashboard;
