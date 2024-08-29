import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './Components/Topbar/topbar';
import Dashboard from './Components/Dashboard';
import AdminList from './adminlist/adminlist';
import './Components/styles.css';
import BusinessList from './Components/Buisnesslist/Buisnesslist';
import LoginPage from './Components/Login/login';
import ForgotPassword from './Forgot/forgot';
import Reviews from './Components/Review/Review';
import ScanReviews from './scanstar/scanstarr';
function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/adminlist" element={<AdminList />} />
          <Route path="/Buisnesslist" element={<BusinessList />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/Review" element={<Reviews />} />
          <Route path="/scanstar" element={<ScanReviews />} />

          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
