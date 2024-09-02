import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Buisnesslist.css';
import TopBar from '../Topbar/topbar';

const BusinessList = () => {
  const [businessData, setBusinessData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://ambulance-booking-backend.vercel.app/user/company-list')
      .then(response => {
        setBusinessData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBusinessData = businessData.filter(business => {
    const businessName = business.businessName || ''; // Default to empty string if undefined
    const phone = business.phone || ''; // Default to empty string if undefined
    return businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
           phone.includes(searchTerm);
  });

  return (
    <div className="App">
      <TopBar />
      <div className="business-list">
        <div className="filter-search">
          <button>Filter & Sort</button>
          <input
            type="text"
            placeholder="Search by Business Name, Phone no..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th className='bth'>Business Name</th>
              <th className='bth'>Average Rating</th>
              <th className='bth'>First Name</th>
              <th className='bth'>Last Name</th>
              <th className='bth'>Phone No</th>
              <th className='bth'>Email ID</th>
              <th className='bth'>Placeid</th>
            </tr>
          </thead>
          <tbody>
            {filteredBusinessData.map((business, index) => (
              <tr key={index}>
                <td>{business.businessName}</td>
                <td>{business.averageRating}</td>
                <td>{business.firstName}</td>
                <td>{business.lastName}</td>
                <td>{business.contactNumber}</td>
                <td>{business.email}</td>
                <td>
                  <a href={business.reviewLink} target="_blank" rel="noopener noreferrer">
                    {business.placeId}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BusinessList;
