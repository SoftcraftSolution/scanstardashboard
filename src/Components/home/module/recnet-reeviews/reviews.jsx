import React from 'react';
import StarRoundedIcon from '@mui/icons-material/StarRounded'; // Import rounded star icon
import defaultAvatar from '../../../assets/defultPic.png'; // Ensure you have a local image for fallback
import { colors } from '@mui/material';

const Review = ({ avatarUrl, name, timeAgo, rating, reviewText }) => {
  const reviewStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '20px',
    // border:'1px solid red'
  };

  const avatarStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '10px',
  };

 
  const reviewDetailsStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap:'10px',
    padding:"5px 0px"
  };

  const reviewerNameStyle = {
    fontSize:"14px",
    fontWeight: 500,
  };

  const reviewTimeStyle = {
    color: '"#4D4D50"',
    fontSize: '12px',
    padding:'0px',
    // border:'1px solid black'
  };

  const reviewContentStyle = {
    marginTop: '10px',
  };

  const ratingStyle = {
    display: 'flex',
    color: '#f1c40f', // Gold color for stars
    padding: '0px 0px',
  };

  const reviewTextStyle={
    fontSize:"14px",
    color:"#4D4D50",
    display: "-webkit-box", // Set display to -webkit-box to enable line clamping
    WebkitLineClamp: 3, // Limit the number of lines to 3
    WebkitBoxOrient: "vertical", // Set box orientation to vertical
    overflow: "hidden", // Hide the overflow content
    textOverflow: "ellipsis",

  }

  return (
    <div style={reviewStyle}>
      <img
        src={avatarUrl}
        alt="User Avatar"
        style={avatarStyle}
        onError={(e) => (e.target.src = defaultAvatar)} // Fallback to local image on error
      />
      <div style={{padding:"0px 5px"}}>
      <div style={ratingStyle}>
            {Array(rating) // Create an array of length 'rating'
              .fill() 
              .map((_, index) => (
                <StarRoundedIcon key={index} />
              ))}
          </div>
        
      
          <div style={reviewDetailsStyle}>
            <div style={reviewerNameStyle}>{name}</div>
            <div style={reviewTimeStyle}>{timeAgo}</div>
          </div>
       
        <div style={reviewContentStyle}>
          
          <div style={reviewTextStyle}>"{reviewText}"</div>
        </div>
      </div>
    </div>
  );
};

export default Review;
