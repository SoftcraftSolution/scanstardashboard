import React from 'react';
import './Coupon.css';
import Topbar from '../Topbar/topbar';
import a1 from './assets/a1.png';
import a2 from './assets/a2.png';
import a3 from './assets/a3.png';
import a4 from './assets/a4.png';
import bin from './assets/bin.png';
const Coupon = () => {
  const coupons = [
    { code: 'AB90283PQ', offer: 'Flat 50% off on your next order at KFC', generatedDate: '12-04-2024', issuedDate: '12-05-2024', expiryDate: '12-05-2024', status: 'Claimed' },
    { code: 'PQ90283VQ', offer: 'Buy 1 get 1 Free on your next order at KFC', generatedDate: '04-03-2024', issuedDate: '04-04-2024', expiryDate: '04-04-2024', status: 'Expired' },
    { code: 'UV9B029LP', offer: 'Flat 50% off upto 200rs on your next order at KFC', generatedDate: '12-04-2024', issuedDate: '-', expiryDate: '-', status: 'Generated' },
    { code: 'PQ90283VQ', offer: 'Flat 50% off on your next order at KFC', generatedDate: '04-03-2024', issuedDate: '-', expiryDate: '-', status: 'Issued' },
    { code: 'UV9B029LP', offer: 'Buy 1 get 1 Free on your next order at KFC', generatedDate: '12-04-2024', issuedDate: '12-05-2024', expiryDate: '12-05-2024', status: 'Claimed' },
    { code: 'AB90283PQ', offer: 'Flat 50% off upto 200rs on your next order at KFC', generatedDate: '12-04-2024', issuedDate: '-', expiryDate: '-', status: 'Expired' },
    { code: 'PQ90283VQ', offer: 'Flat 50% off upto 200rs on your next order at KFC', generatedDate: '04-03-2024', issuedDate: '-', expiryDate: '-', status: 'Generated' },
  ];

  return (
    <div className="App">
          
   
    <div className="dashboard">
        
      <h2>Total Coupons</h2>
      <div className="coupon-summary">
  <div className="summary-box">
    <img src={a1} alt="Total Coupons" />
    <div className="summary-text">
      <p>Total Coupons</p>
      <h3>189</h3>
    </div>
  </div>
  <div className="summary-box">
    <img src={a2} alt="Active Coupons" />
    <div className="summary-text">
      <p>Active Coupons</p>
      <h3>60</h3>
    </div>
  </div>
  <div className="summary-box">
    <img src={a3} alt="Claimed Coupons" />
    <div className="summary-text">
      <p>Claimed Coupons</p>
      <h3>4</h3>
    </div>
  </div>
  <div className="summary-box">
    <img src={a4} alt="Expired Coupons" />
    <div className="summary-text">
      <p>Expired Coupons</p>
      <h3>20</h3>
    </div>
  </div>


      </div>
      <div className="actions">
        <button className="verify-btn">Verify Coupon</button>
        <button className="generate-btn">Generate Coupon</button>
      </div>
      <table className="coupon-table">
        <thead>
          <tr>
            <th>Coupon Code</th>
            <th>Offer</th>
            <th>Generated Date</th>
            <th>Issued Date</th>
            <th>Expiry Date</th>
            <th>Status</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {coupons.map((coupon, index) => (
            <tr key={index}>
              <td>{coupon.code}</td>
              <td>{coupon.offer}</td>
              <td>{coupon.generatedDate}</td>
              <td>{coupon.issuedDate}</td>
              <td>{coupon.expiryDate}</td>
              <td className={`status ${coupon.status.toLowerCase()}`}>{coupon.status}</td>
              <td>
                <button className="delete-btn"><img src={bin} id='rs' ></img></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button>&lt;</button>
        <p>Showing Page 1 of 10</p>
        <button>&gt;</button>
      </div>
    </div> </div>

  );
};

export default Coupon;
