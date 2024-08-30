import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './Components/Dashboard';
import AdminList from './adminlist/adminlist';
import './Components/styles.css';
import BusinessList from './Components/Buisnesslist/Buisnesslist';
import LoginPage from './Components/Login/login';
import ForgotPassword from './Components/Forgot/forgot.js';
import ScanReviews from './Components/scanstar/review.js';
import Coupon from './Components/Coupon/Coupon';
import Home from './Components/home/home.js';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/adminlist" element={<AdminList />} />
          <Route path="/buisnesslist" element={<BusinessList />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/" element={<LoginPage />} />
          {/* <Route path="/Review" element={<Reviews />} /> */}
          
         <Route path="/scanstarr" element={<ScanReviews />} />
          <Route path="/coupon" element={<Coupon/>} />
          {/* /////// */}
          <Route path="/home" element={<Home/>} />
          

          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
