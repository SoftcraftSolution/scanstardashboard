import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Positive', value: 3450 },
  { name: 'Negative', value: 1550 },
];

const COLORS = ['#0047AB', '#FDBB30'];

const AnalyticsDonutChart = () => {
  const totalReviews = data.reduce((acc, cur) => acc + cur.value, 0);
  const positiveReviews = data.find((d) => d.name === 'Positive').value;

  return (
    <div style={{ width: '50%', height: '400px', padding: '20px', backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', textAlign: 'center' }}>
       <div style={{display:"flex",justifyContent:"start",fontSize:"20px", fontWeight:"600",alignContent:"start"}}>Analytics</div>
      
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            fill="#8884d8"
            
            dataKey="value"
            
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="top" height={36}/>
        </PieChart>
      </ResponsiveContainer>
      <div style={{display:"flex", justifyContent:"space-around",flexDirection:"column"}}>
        <div style={{ color: '#0047AB', fontSize:"20px", fontWeight:"600"}}>{positiveReviews} Positive</div>
        <div style={{fontSize:"16px",color:"grey"}}>Reviews out of {totalReviews} Total Reviews</div>
      </div>
    </div>
  );
};

export default AnalyticsDonutChart;
