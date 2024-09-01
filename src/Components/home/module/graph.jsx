import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'May 21', Positive: 200, Negative: 100 },
  { name: 'May 22', Positive: 150, Negative: 50 },
  { name: 'May 23', Positive: 250, Negative: 75 },
  { name: 'May 24', Positive: 150, Negative: 25 },
  { name: 'May 25', Positive: 180, Negative: 90 },
  { name: 'May 26', Positive: 120, Negative: 200 },
  { name: 'May 27', Positive: 170, Negative: 120 }
];

const ReviewsBarChart = () => {
  return (
    <div style={{  width: '100%', height: 400, padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
      <div style={{fontSize:"20px", fontWeight:"600"}}>Reviews</div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20, right: 20, left: 20, bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Positive" fill="#0047AB" />
          <Bar dataKey="Negative" fill="#FDBB30" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReviewsBarChart;
