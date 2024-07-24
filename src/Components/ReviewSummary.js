import React from 'react';

function ReviewSummary() {
  return (
    <div className="summary-container">
      <h2>Review Summary</h2>
      <div className="summary-item">
        <p>Today's Reviews</p>
        <p>140</p>
      </div>
      <div className="summary-item">
        <p>Positive Reviews</p>
        <p>120</p>
      </div>
      <div className="summary-item">
        <p>Negative Reviews</p>
        <p>20</p>
      </div>
      <div className="summary-item">
        <p>Average Rating</p>
        <p>3.6</p>
      </div>
    </div>
  );
}

export default ReviewSummary;
