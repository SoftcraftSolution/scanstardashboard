import React from 'react';
import StarRoundedIcon from '@mui/icons-material/StarRounded'; // Import rounded star icon
import defaultAvatar from '../../../assets/defultPic.png'; // Ensure you have a local image for fallback

const Review = ({ avatarUrl, name, timeAgo, rating, reviewText }) => {
  const reviewStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '20px',
    border:'1px solid red'
  };

  const avatarStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '10px',
  };

  const reviewHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const reviewDetailsStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const reviewerNameStyle = {
    fontWeight: 'bold',
  };

  const reviewTimeStyle = {
    color: '#888',
    fontSize: '12px',
  };

  const reviewContentStyle = {
    marginTop: '10px',
  };

  const ratingStyle = {
    display: 'flex',
    color: '#f1c40f', // Gold color for stars
    marginBottom: '5px',
  };

  return (
    <div style={reviewStyle}>
      <img
        src={avatarUrl}
        alt="User Avatar"
        style={avatarStyle}
        onError={(e) => (e.target.src = defaultAvatar)} // Fallback to local image on error
      />
      <div>
        <div style={reviewHeaderStyle}>
          <div style={reviewDetailsStyle}>
            <span style={reviewerNameStyle}>{name}</span>
            <span style={reviewTimeStyle}>{timeAgo}</span>
          </div>
        </div>
        <div style={reviewContentStyle}>
          <div style={ratingStyle}>
            {Array(rating) // Create an array of length 'rating'
              .fill() 
              .map((_, index) => (
                <StarRoundedIcon key={index} />
              ))}
          </div>
          <p>{reviewText}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
