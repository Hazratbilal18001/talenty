import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import TopStats from '../../components/dashboard/TopStats';
import UserOverview from '../../components/dashboard/UserOverview';




const Dashboard = () => (

    <div className="px-10 pb-10">
        {/* <Navbar /> */}
        <h1 className='font-source py-9'>Dashboard</h1>
        <TopStats />
        <UserOverview />
    </div>

);

export default Dashboard;
