import React, { useState } from 'react';
import Home from '../home/home.js';
import ScanStarReviews from '../scanstar/review.js';
import Coupon from '../Coupon/Coupon.js';
import TopBar from '../Topbar/topbar.js';
import "./Dashboard.css" // Your CSS file for styling


const Dashboard = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleTabClick = (index) => {
      setActiveIndex(index);
    };
  
    const renderContent = () => {
      switch (activeIndex) {
        case 0:
          return <Home />;
        case 1:
          return <ScanStarReviews  />;
        case 2:
          return <Coupon />;
        default:
          return null;
      }
    };
  
    return (
      <div className='-dashboard'>
        <TopBar activeIndex={activeIndex} onTabClick={handleTabClick} />
        <div className="content">
          {renderContent()}
        </div>
      </div>
    );
};

export default Dashboard;
