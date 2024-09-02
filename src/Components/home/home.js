import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import './home.css';
import ReviewsBarChart from './module/graph';
import AnalyticsDonutChart from './module/circularAnalysys';
import RecentReviews from './module/recnet-reeviews/recentReviews';
import ReviewBreakdown from './module/reviewBreakdown';



// Define COLORS for PieChart
const COLORS = ['#004AAC', '#ECC522'];
const StatItem = ({ title, value, growthPercentage ,backColor,index}) => {
  return (
    <div className="stat-item">
      <div className='home-top-row'>
      <div className='home-insight-first'>
       <p style={{ margin: "0px 0px" }}>{title}</p>
       <div id="titleId">{value}</div>
      </div>
      <div className='home-insight-icon' style={{backgroundColor:backColor}}><div className={`home-img ${index==0?"img-0":index==1?"img-1":index==2?"img-2":"img-3"}`}  /></div>
      </div>
      <p
        style={{ margin: "0px 0px" }}
        className={`stat-change ${growthPercentage > 0 ? 'positive' : 'negative'}`}
      >
        {growthPercentage}% from yesterday
      </p>
    </div>
  );
};

const Home = () => {
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

  const getStringDate = (date) => {
    // Ensure date is a Date object
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object");
    }
  
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
    const day = date.getDate().toString().padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  };
 
 
  return (
    <div className="app" style={{ maxWidth: "100%", padding: "0px" }}>
      
      <div className="dashboard">
        <div id="datteePickeer">
          <input type="date" id="birthday" name="birthday" className="date-picker-input" value={getStringDate(selectedDate)} onChange={handleDateChange} />
        </div>
        
        <div className="stats">
          <StatItem index={0} backColor={'#004AAC'} title={"Total Reviews"} value={totalReviews} growthPercentage={totalReviewGrowthPercentage}/>
          <StatItem index={1}   backColor={'#004AAC'} title={"Positive Reviews"} value={positiveReviewCount} growthPercentage={positiveReviewGrowthPercentage}/>
          <StatItem index={2}   backColor={'#ECC522'} title={"Negative Reviews"} value={negativeReviewCount} growthPercentage={negativeReviewGrowthPercentage}/>
          <StatItem index={3}  backColor={'#004AAC'} title={"Average Rating Today"} value={averageRatingToday} growthPercentage={averageRatingOverall}/>
        </div>
        <div className='home-charts'>
        <ReviewsBarChart/>
        <AnalyticsDonutChart/>
        </div>
        <div className="home-reviews-group">
          <RecentReviews/>
          <ReviewBreakdown/>
        </div>
      </div>
    </div>
  );
};

export default Home;
