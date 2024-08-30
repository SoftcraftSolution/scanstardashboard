import React, { useState } from 'react';
import axios from 'axios';
import './forgot.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://dashboard-backend-chi-two.vercel.app/user/forgot-password', {
                email
            });
            setMessage(response.data.message);
        } catch (error) {
            console.error('Error requesting password reset:', error);
            setError('Failed to request password reset. Please try again.');
        }
    };

    return (
        <div className="forgot-password-container">
            <div className="forgot-password-form">
                <div className='forget-header-sub'>
                <div className='forget-header'>Forgot Password ?</div>
                <div className='forget-sub'>Enter your email to reset your password.</div>
                </div>
                {message && <p className="success-message">{message}</p>}
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit} className='forget-form'>
                    <div className="form-group">
                        <input
                        className='forget-input'
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className='forget-button'>Continue</button>
                    </div>
                </form>
                <a href="/login" className="back-link">Back</a>
            </div>
        </div>
    );
};

export default ForgotPassword;