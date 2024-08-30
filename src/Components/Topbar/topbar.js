import React, { useEffect, useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa'; // Import the icons
import './TopBar.css';

const TopBar = ({ activeIndex, onTabClick }) => {
  return (
    <div className="topbar">
      <div className="topbar-right"></div>
      <div className="topbar-left">
        <a
          href="#"
          className={`topbar-link ${activeIndex === 0 ? 'active' : 'inactive'}`}
          onClick={() => onTabClick(0)}
        >
          Dashboard
        </a>
        <a
          href="#"
          className={`topbar-link ${activeIndex === 1 ? 'active' : 'inactive'}`}
          onClick={() => onTabClick(1)}
        >
          Reviews
        </a>
        <a
          href="#"
          className={`topbar-link ${activeIndex === 2 ? 'active' : 'inactive'}`}
          onClick={() => onTabClick(2)}
        >
        Coupons
        </a>
      </div>
      <div className="topbar-right">
      <div className="topbar-right">
        <a
          id="ggg"
          className="topbar-link"
          href="/"
        >
          <FaSignOutAlt className="logout-icon" />
        </a>
      </div>
      </div>
    </div>
  );
};

export default TopBar;
