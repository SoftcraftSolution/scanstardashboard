import React, { useEffect, useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa'; // Import the icons
import './TopBar.css';

function TopBar({index}) {
  const [businessName, setBusinessName] = useState('');
  const [activeIndex, setActiveIndex] = useState(index); // State to track the active tab

  useEffect(() => {
    const storedBusinessName = sessionStorage.getItem('businessName');
    if (storedBusinessName) {
      setBusinessName(storedBusinessName);
    }
  }, []);

  // Function to handle navigation click
  const handleNavigationClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="topbar">
      <div className="topbar-right"></div>
      <div className="topbar-left">
        <a
          id="ggg"
          href="/Dashboard"
          className={`topbar-link ${activeIndex === 0 ? 'active' : 'inactive'}`} // Apply active/inactive class
          onClick={() => handleNavigationClick(0)}
        >
          Dashboard
        </a>

        <a
          id="ggg"
          href="/Review"
          className={`topbar-link ${activeIndex === 1 ? 'active' : 'inactive'}`}
          onClick={() => handleNavigationClick(2)}
        >
          Google Reviews
        </a>
        <a
          id="ggg"
          href="/scanstarr"
          className={`topbar-link ${activeIndex === 2 ? 'active' : 'inactive'}`}
          onClick={() => handleNavigationClick(3)}
        >
          ScanStar Reviews
        </a>
      </div>
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
  );
}

export default TopBar;
