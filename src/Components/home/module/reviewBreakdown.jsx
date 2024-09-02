import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

// Dummy Data
const dummyData = {
  overview: {
    rating: 2.7,
    totalReviews: 12239,
    breakdown: [
      { name: '5 Stars', reviews: 18000 },
      { name: '4 Stars', reviews: 12000 },
      { name: '3 Stars', reviews: 8000 },
      { name: '2 Stars', reviews: 4000 },
      { name: '1 Star', reviews: 12000 },
    ]
  },
  yearly: {
    rating: 4.5,
    totalReviews: 8239,
    breakdown: [
      { name: '5 Stars', reviews: 14000 },
      { name: '4 Stars', reviews: 9000 },
      { name: '3 Stars', reviews: 5000 },
      { name: '2 Stars', reviews: 2000 },
      { name: '1 Star', reviews: 1000 },
    ]
  },
  monthly: {
    rating: 4.3,
    totalReviews: 1239,
    breakdown: [
      { name: '5 Stars', reviews: 1200 },
      { name: '4 Stars', reviews: 800 },
      { name: '3 Stars', reviews: 600 },
      { name: '2 Stars', reviews: 300 },
      { name: '1 Star', reviews: 100 },
    ]
  },
};

// Rounded Star Component
const RoundedStar = ({ isHalf }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={isHalf ? "url(#halfGrad)" : "#FDBB30"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="halfGrad">
          <stop offset="50%" stopColor="#FDBB30" />
          <stop offset="50%" stopColor="#ddd" />
        </linearGradient>
      </defs>
      <path d="M12 2.5c.7 0 1.3.5 1.5 1.1l1.2 3.3c.2.7.8 1.2 1.5 1.3l3.4.4c1.4.2 1.9 1.8 1 2.8l-2.5 2.5c-.5.5-.6 1.2-.5 1.8l.9 3.4c.4 1.4-1.2 2.4-2.4 1.7l-3-1.8c-.6-.4-1.4-.4-2 0l-3 1.8c-1.2.7-2.8-.3-2.4-1.7l.9-3.4c.2-.6 0-1.3-.5-1.8L3.4 11c-.9-.9-.4-2.6 1-2.8l3.4-.4c.7-.1 1.3-.6 1.5-1.3l1.2-3.3c.2-.6.8-1.1 1.5-1.1z" />
    </svg>
  );
};

const ReviewBreakdown = () => {
  const [selectedTab, setSelectedTab] = useState('overview'); // Default to 'overview'
  const data = dummyData[selectedTab]; // Correctly access dummyData based on selectedTab

  return (
    <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', width: '50%' }}>
      {/* Tabs Section */}
      <div style={{margin:"5px 0px", fontSize:"16px",fontWeight:"700"}}>Review Breakdown</div>
      <div style={{ display: 'flex', justifyContent: 'start', padding:"16px 0px"}}>
        {['Overview', 'Yearly', 'Monthly'].map((tab) => (
          <button
            key={tab}
            style={{
              padding: '8px 16px',
              borderRadius: '10px',
              border: selectedTab === tab.toLowerCase() ? '1px solid grey' : 'none',
              backgroundColor: selectedTab === tab.toLowerCase() ? '#f5f5f5' : 'transparent',
              fontWeight: selectedTab===tab.toLowerCase()?'500':'400',
            }}
            onClick={() => setSelectedTab(tab.toLowerCase())}
          >
            {tab}
          </button>
        ))}
      </div>
      <div style={{display:"flex",flexDirection:"row", marginTop:"20px"}}>
      {/* Rating Section */}
      {data && (
        <>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px',display:"flex",flexDirection:"column"}}>
            <div style={{ fontSize: '100px', fontWeight: 'bold', marginRight: '10px' }}>{data.rating}</div>
            <div>
              <div style={{ display: 'flex',}}>
                {[...Array(4)].map((_, i) => <RoundedStar key={i} />)}
                <RoundedStar isHalf />
              </div>
              <div style={{ fontSize: '14px', color: '#4D4D50', textAlign:"center"}}>{data.totalReviews.toLocaleString()} Reviews</div>
            </div>
          </div>

          {/* Bar Chart Section */}
          <div  style={{width:"100%"}}>
          <ResponsiveContainer width="100%" >
            <BarChart data={data.breakdown} layout="vertical" barSize={20} margin={{ top: 20, right: 20, bottom: 20, left: 40 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Bar dataKey="reviews" fill="#0047AB" radius={[0, 10, 10, 0]} />
            </BarChart>
          </ResponsiveContainer>
          </div>
        </>
      )}
      </div>
    </div>
  );
};

export default ReviewBreakdown;
