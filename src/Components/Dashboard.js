import React, { useState } from 'react';
import Home from './home';
import ScanStarReviews from './scanstar/review.js';
import Coupon from './Coupon/Coupon.js';
import TopBar from './Topbar/topbar.js'; // Your CSS file for styling


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
      <div >
        <TopBar activeIndex={activeIndex} onTabClick={handleTabClick} />
        <div className="content">
          {renderContent()}
        </div>
      </div>
    );
};

export default Dashboard;
