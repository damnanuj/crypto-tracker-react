import React from 'react'
import Header from '../components/Common/Header/Header'
import TabsComponent from '../components/Dashboard/Tabs'

const Dashboard = () => {
  return (
    <div className='dashboardContainer'>
        <Header/>
        <TabsComponent/>
    </div>
  )
}

export default Dashboard