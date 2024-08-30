import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './scanstarr.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TopBar from '../Components/Topbar/topbar';

library.add(fasStar, farStar);

const ScanReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [businessName, setBusinessName] = useState(sessionStorage.getItem('businessName') || '');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`https://ambulance-booking-backend.vercel.app/user/get-local-review?businessName=${businessName}`);
        console.log(response.data);
        if (response.data.qrCodeId) {
          const businessReviews = response.data.reviews.map(review => {
            return {
              name: review.name,
              image: review.image,
              rating: review.rating,
              comment: review.comment,
              createdAt: review.createdAt,
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

  // Convert ISO date string to readable date and time
  const formatDateTime = (isoString) => {
    const date = new Date(isoString);
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
      <TopBar index={1}/>
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
                const { date, time } = formatDateTime(review.createdAt);
                return (
                  <tr key={index}>
                    <td>{review.businessName}</td>
                    <td>
                      {review.image ? (
                        <img src={review.image} alt={review.name} className="review-image" />
                      ) : (
                        <span>No image</span>
                      )}
                    </td>
                    <td>{review.name}</td>
                    <td>
                      {[...Array(review.rating)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={['fas', 'star']} className="golden-star" />
                      ))}
                      {[...Array(5 - review.rating)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={['far', 'star']} className="golden-star"/>
                      ))}
                    </td>
                    <td>{review.comment || 'No comment'}</td>
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

export default ScanReviews;
