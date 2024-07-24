import React from 'react';

function ReviewsChart() {
  return (
    <div className="chart-container">
      <h2>Reviews</h2>
      <div className="chart">
        {/* Dummy content for bar chart */}
        <div className="bar" style={{ height: '50%' }}></div>
        <div className="bar" style={{ height: '70%' }}></div>
        <div className="bar" style={{ height: '60%' }}></div>
        <div className="bar" style={{ height: '80%' }}></div>
        <div className="bar" style={{ height: '90%' }}></div>
      </div>
    </div>
  );
}

export default ReviewsChart;
