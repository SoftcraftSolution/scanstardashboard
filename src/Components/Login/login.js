import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';
import logo from '../Login/scanstar.png';
import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // State to track loading
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when API call starts

    try {
      const response = await axios.post('https://ambulance-booking-backend.vercel.app/user/login-scan-star', {
        email,
        password,
      });
      console.log('Login successful:', response.data);
      const { businessName } = response.data;

      // Store the business name and email in sessionStorage
      sessionStorage.setItem('businessName', businessName);
      sessionStorage.setItem('email', email);

      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
      setError('Login failed. Please check your credentials.');
    } finally {
      setLoading(false); // Set loading to false after the API call completes
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <img className='logokkk' src={logo} alt="Logo" />
        </div>
        <div id="secound-title">
          <div style={{ paddingBottom: "5px", fontWeight:"500" }}>Hello!</div>
          <div>Log in to continue.</div>
        </div>
        <div id="myform">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
           
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p style={{padding:"0px", color:"red", marginBottom:"0px", marginTop:"8px"}}>{error}</p>}
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Log In'}
          </button>
          <div className="options">
            <label>
              <input type="checkbox" style={{padding:"0px", width:"auto"}}/> Keep me signed in
            </label>
            <a href="/forgot" className="forgot-password">Forgot password?</a>
          </div>
        </form>
       </div>
      </div>
    </div>
  );
};

export default LoginPage;
