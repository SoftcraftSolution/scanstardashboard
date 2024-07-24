import React from 'react';

function ReviewBreakdown() {
  return (
    <div className="breakdown-container">
      <h2>Review Breakdown</h2>
      <div className="breakdown-item">
        <p>4.7</p>
        <p>12,239 Reviews</p>
      </div>
      <div className="breakdown-chart">
        {/* Dummy content for breakdown chart */}
        <div className="breakdown-bar" style={{ width: '80%' }}></div>
        <div className="breakdown-bar" style={{ width: '60%' }}></div>
        <div className="breakdown-bar" style={{ width: '70%' }}></div>
      </div>
    </div>
  );
}

export default ReviewBreakdown;
