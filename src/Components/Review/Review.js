import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Review.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TopBar from '../Topbar/topbar';

library.add(fasStar, farStar);

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [businessName, setBusinessName] = useState(sessionStorage.getItem('businessName') || '');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`https://ambulance-booking-backend.vercel.app/user/get-goolge-review?businessName=${businessName}`);
        console.log(response.data);
        console.log("response.data"); // Log the response data
        if (response.data.qrCodeId) {
            console.log("in if statement");
            const businessReviews = response.data.reviews.map(review => {
                console.log(review);
                return {
                  author_name: review.author_name,
                  author_url: review.author_url,
                  profile_photo_url: review.profile_photo_url,
                  rating: review.rating,
                  relative_time_description: review.relative_time_description,
                  text: review.text,
                  time: review.time,
                  translated: review.translated,
                  businessName: response.data.businessName
                };
              });
              setReviews(businessReviews);
        } else {
          console.error('Expected valid response with reviews, but received:', response.data);
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [businessName]);

  const handleFilterByDate = () => {
    // Implement your filtering logic here if needed
    console.log('Filtering by date');
  };

  const handleSortByDate = () => {
    // Implement your sorting logic here if needed
    console.log('Sorting by date');
  };

  // Get current date in "DD-MM-YYYY" format
  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  // Convert Unix timestamp to readable time
  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000); 
    return date.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // Convert Unix timestamp to readable date and time
  const formatDateTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return {
      date: date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }),
      time: date.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
  };

  return (
    <div className='app'>
      <TopBar />
      <div className="reviews-container">
        <div className="reviews-header">
          <h2>Reviews for {businessName}</h2>
          <div className="review-buttons">
            <button className="filter-button" onClick={handleFilterByDate}>
              <FontAwesomeIcon icon="calendar-alt" /> Filter by Date
            </button>
            <button className="sort-button" onClick={handleSortByDate}>
              <FontAwesomeIcon icon="sort" /> Sort
            </button>
            <div className="current-date">
              <FontAwesomeIcon icon="calendar-alt" /> {currentDate}
            </div>
          </div>
        </div>
        <table className="reviews-table">
          <thead>
            <tr>
              <th>Business Name</th>
              <th>Image</th>
              <th>Full Name</th>
              <th>Rating</th>
              <th>Comment</th>
              <th>Time</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(reviews) && reviews.length > 0 ? (
              reviews.map((review, index) => {
                const { date, time } = formatDateTime(review.time);
                return (
                  <tr key={index}>
                    <td>{review.businessName}</td> 
                    <td>
                      {review.profile_photo_url ? (
                        <img src={review.profile_photo_url} alt={review.author_name} className="review-image" />
                      ) : (
                        <span>No image</span>
                      )}
                    </td>
                    <td>{review.author_name}</td>
                    <td>
                      {[...Array(review.rating)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={['fas', 'star']} className="golden-star" />
                      ))}
                      {[...Array(5 - review.rating)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={['far', 'star']} className="golden-star"/>
                      ))}
                    </td>
                    <td>{review.text || 'No comment'}</td>
                    <td>{time}</td>
                    <td>{date}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="7">No reviews available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reviews;
