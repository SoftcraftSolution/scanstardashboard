import React from 'react';
import Review from './reviews'; // Import the Review component

const RecentReviews = () => {
  const reviews = [
    {
      avatarUrl: 'https://via.placeholder.com/50', // Placeholder for user avatar
      name: 'Admeya Khan',
      timeAgo: '2 hours ago',
      rating: 4,
      reviewText:
        'Great experience! The staff was friendly and knowledgeable, and the service was quick. I would definitely recommend this place to others.Great experience! The staff was friendly and knowledgeable, and the service was quick. I would definitely recommend this place to others.',
    },
    {
      avatarUrl: 'https://via.placeholder.com/50', // Placeholder for user avatar
      name: 'Admeya Khan',
      timeAgo: '2 hours ago',
      rating: 5,
      reviewText:
        'Absolutely phenomenal experience from start to finish! The service was impeccable—attentive yet unobtrusive. The ambiance was charming and sophisticated, perfect for a memorable evening out. The food was beyond delicious; each dish was a masterpiece of flavors and presentation. The desserts were a highlight, indulgent and creative. I cannot recommend this place enough—it’s a must-visit for anyone who appreciates exceptional dining!',
    },
  ];

  const containerStyle = {
    width:'100%',
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    margin: '0 auto',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const buttonStyle = {
    backgroundColor: '#004AAC',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2 style={{margin:"0px"}}>Recent Reviews</h2>
        <button style={buttonStyle}>See all</button>
      </div>
      {reviews.map((review, index) => (
        <Review key={index} {...review} />
      ))}
    </div>
  );
};

export default RecentReviews;
