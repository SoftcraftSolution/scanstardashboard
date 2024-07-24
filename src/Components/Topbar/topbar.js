import React, { useEffect, useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';  // Import the icons
import './TopBar.css';

function TopBar() {
  const [businessName, setBusinessName] = useState('');

  useEffect(() => {
    const storedBusinessName = sessionStorage.getItem('businessName');
    if (storedBusinessName) {
      setBusinessName(storedBusinessName);
    }
  }, []);

  return (
    <div className="topbar">
      <div className="topbar-left">
        <a id='ggg' href="/Dashboard" className="topbar-link">Dashboard</a>
        
        { !businessName && <a href="/Buisnesslist" className="topbar-link">Company List</a> }
        <a id='ggg' href="/Review" className="topbar-link">Google Reviews</a>
        <a id='ggg' href="/scanstarr" className="topbar-link">ScanStar Reviews</a>
      </div>
      <div className="topbar-right">
        <a id='ggg'  className="topbar-link"  href="/"><FaSignOutAlt className="logout-icon" /></a>   {/* Logout icon */}
        
      </div>
    </div>
  );
}

export default TopBar;
