import React from 'react';
import Sidebar from './../components/dashboard/Sidebar';
import Navbar from './../components/dashboard/Navbar';
import TopStats from './../components/dashboard/TopStats';
import UserOverview from './../components/dashboard/UserOverview';
import ActivityChart from './../components/dashboard/ActivityChart';
import CountryUsage from './../components/dashboard/CountryUsage';
import LatestJobs from './../components/dashboard/LatestJobs';



const Dashboard = () => (

    <div className="px-10">
        {/* <Navbar /> */}
        <h1 className='font-source py-9'>Dashboard</h1>
        <TopStats />
        <UserOverview />
        {/* <ActivityChart />
            <CountryUsage />
            <LatestJobs /> */}
    </div>

);

export default Dashboard;
