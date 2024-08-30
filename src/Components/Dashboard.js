import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import './Dashboard.css';
import TopBar from './Topbar/topbar';

// Define COLORS for PieChart
const COLORS = ['#004AAC', '#ECC522'];

const Dashboard = () => {
  // State variables
  const [reviewData, setReviewData] = useState([]);
  const [analyticsData, setAnalyticsData] = useState([]);
  const [businessName, setBusinessName] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [totalReviews, setTotalReviews] = useState(0);
  const [totalReviewGrowthPercentage, setTotalReviewGrowthPercentage] = useState("0.00");
  const [positiveReviewCount, setPositiveReviewCount] = useState(0);
  const [positiveReviewGrowthPercentage, setPositiveReviewGrowthPercentage] = useState("0.00");
  const [negativeReviewCount, setNegativeReviewCount] = useState(0);
  const [negativeReviewGrowthPercentage, setNegativeReviewGrowthPercentage] = useState("0.00");
  const [averageRatingToday, setAverageRatingToday] = useState("0.00");
  const [averageRatingOverall, setAverageRatingOverall] = useState("0.00");
  const [overallTotalCountAllTime, setOverallTotalCountAllTime] = useState("0.00");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedBusinessName = sessionStorage.getItem('businessName');
        const email = sessionStorage.getItem('email');
        setBusinessName(storedBusinessName || '');

        const dateFormatted = selectedDate.toISOString().split('T')[0];

        const response = await axios.get(`https://ambulance-booking-backend.vercel.app/user/get-insight?email=${email}&currentDate=${dateFormatted}`);

        if (response.data) {
          const data = response.data;
          setTotalReviews(data.totalReviews || 0);
          setTotalReviewGrowthPercentage(data.totalReviewGrowthPercentage || "0.00");
          setPositiveReviewCount(data.positiveReviewCount || 0);
          setPositiveReviewGrowthPercentage(data.positiveReviewGrowthPercentage || "0.00");
          setNegativeReviewCount(data.negativeReviewCount || 0);
          setNegativeReviewGrowthPercentage(data.negativeReviewGrowthPercentage || "0.00");
          setAverageRatingToday(data.averageRatingToday || "0.00");
          setAverageRatingOverall(data.averageRatingOverall || "0.00");
          setOverallTotalCountAllTime(data.overallTotalCountAllTime || "0.00");

          setReviewData([
            { name: dateFormatted, Positive: data.positiveReviewCount, Negative: data.negativeReviewCount },
          ]);

          setAnalyticsData([
            { name: 'Positive', value: data.positiveReviewCount },
            { name: 'Negative', value: data.negativeReviewCount },
          ]);

        } else {
          console.warn('Unexpected response structure:', response);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedDate]);
  const handleDateChange = (event) => {
    const date = new Date(event.target.value);
    setSelectedDate(date);
    console.log(date);
  };

  return (
    <div className="app" style={{ maxWidth: "100%", padding: "0px" }}>
      <TopBar index={0} />
      <div className="dashboard">
        <div id="datteePickeer">
          <input type="date" id="birthday" name="birthday" className="date-picker-input" onChange={handleDateChange} />
        </div>
        
        <div className="stats">
          <div className="stat-item">
            <p style={{margin:"0px 0px"}}>Total Reviews</p>
            <div id="titleId">{totalReviews}</div>
            <p style={{margin:"0px 0px"}}  className={`stat-change ${totalReviewGrowthPercentage > 0 ? 'positive' : 'negative'}`}>
              {totalReviewGrowthPercentage}% from yesterday
            </p>
          </div>
          <div className="stat-item">
            <p style={{margin:"0px 0px"}}>Positive Reviews</p>
            <div id="titleId">{positiveReviewCount}</div>
            <p style={{margin:"0px 0px"}} className={`stat-change ${positiveReviewGrowthPercentage > 0 ? 'positive' : 'negative'}`}>
              {positiveReviewGrowthPercentage}% from yesterday
            </p>
          </div>
          <div className="stat-item">
            <p style={{margin:"0px 0px"}}>Negative Reviews</p>
            <div id="titleId">{negativeReviewCount}</div>
            <p style={{margin:"0px 0px"}} className={`stat-change ${negativeReviewGrowthPercentage > 0 ? 'positive' : 'negative'}`}>
              {negativeReviewGrowthPercentage}% from yesterday
            </p>
          </div>
          <div className="stat-item">
            <p style={{margin:"0px 0px"}}>Average Rating Today</p>
            <div id="titleId">{averageRatingToday}</div>
            <p style={{margin:"0px 0px"}}  className="stat-change">Overall rating: {averageRatingOverall}</p>
          </div>
        </div>


        <div className="charts">
          <div className="chart-container">
            <h2>Reviews</h2>
            <BarChart
              width={800}
              height={300}
              data={reviewData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Positive" fill="#004AAC" />
              <Bar dataKey="Negative" fill="#ECC522" />
            </BarChart>
          </div>
          <div className="chart-container">
            <h2>Analytics</h2>
            <PieChart width={400} height={300}>
              <Pie
                data={analyticsData}
                cx={200}
                cy={150}
                innerRadius={45}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {analyticsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
            <p>{`${analyticsData[0]?.value || 0} Positive Reviews out of ${analyticsData.reduce((acc, curr) => acc + (curr.value || 0), 0)} Total Reviews`}</p>
          </div>
        </div>
        <div className="reviews-group">
          <div className="recent-reviews">
            <h2>Recent Reviews</h2>
            <div className="review">
              <p>
                <strong>Aditya Khan:</strong> Great experience! The staff was friendly and knowledgeable, and the service was quick. I would definitely recommend this place to others!
              </p>
              <p className="review-details">2 hours ago - Foox Pvt Ltd</p>
            </div>
            <div className="review">
              <p>
                <strong>Aditya Khan:</strong> Absolutely phenomenal experience from start to finish! The service was impeccable—attentive yet unobtrusive. The ambiance was charming and sophisticated, perfect for a memorable evening out. The food was beyond delicious; each dish was a masterpiece of flavors and presentation. The desserts were a highlight, indulgent and creative. I cannot recommend this place enough—it's a must-visit for anyone who appreciates exceptional dining!
              </p>
              <p className="review-details">2 hours ago - QJD Professionals</p>
            </div>
            <button className="see-all">See All</button>
          </div>
          <div className="review-breakdown">
            <h2>Average Review Breakdown</h2>
            <div className="tabs">
              <button className="tab active">Overview</button>
              <button className="tab">Yearly</button>
              <button className="tab">Monthly</button>
            </div>
            <div className="breakdown">
              <p className="rating">{averageRatingOverall}</p>
              <p className="reviews-count">{overallTotalCountAllTime} Reviews</p>
              <div className="breakdown-chart">
                <div className="breakdown-bar" style={{ width: '80%' }}></div>
                <div className="breakdown-bar" style={{ width: '60%' }}></div>
                <div className="breakdown-bar" style={{ width: '70%' }}></div>
                <div className="breakdown-bar" style={{ width: '90%' }}></div>
                <div className="breakdown-bar" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
