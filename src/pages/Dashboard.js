import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import { fetchCoinsData } from "../functions/Api";


const Dashboard = () => {
  // const [coins, setCoins] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
   
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const marketData = await fetchCoinsData();
  //       // console.log(marketData);
  //       setCoins(marketData);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (loading) {
  //   return <div style={{display:"flex", justifyContent: "center", alignItems:"center", height:"100vh", width: "100vw"}}>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }


  

  return (
    <div className="dashboardContainer">
      <Header />
      {/* <TabsComponent coins={coins} /> */}
      <TabsComponent />
    </div>
  );
};

export default Dashboard;
