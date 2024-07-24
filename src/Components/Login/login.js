import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';
import logo from '../Login/scanstar.png';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://ambulance-booking-backend.vercel.app/user/login-scan-star', {
        email,
        password
      });
      console.log('Login successful:', response.data);
      const { businessName } = response.data;

      // Store the business name and email in sessionStorage
      sessionStorage.setItem('businessName', businessName);
      sessionStorage.setItem('email', email);

      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <img className='logokkk' src={logo} alt="Logo" />
        </div>
        <h2>Hello!</h2>
        <p>Log in to continue.</p>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email address</label>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Log In</button>
          <div className="options">
            <label>
              <input type="checkbox" /> Keep me signed in
            </label>
            <a href="/forgot" className="forgot-password">Forgot password?</a>
          </div>
        </form>
      </div>   
    </div>
  );
};

export default LoginPage;
