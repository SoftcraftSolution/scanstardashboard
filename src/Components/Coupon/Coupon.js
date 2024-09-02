import React, { useState } from 'react';
import './Coupon.css';
import Topbar from '../Topbar/topbar';
import a1 from './assets/a1.png';
import a2 from './assets/a2.png';
import a3 from './assets/a3.png';
import a4 from './assets/a4.png';
import bin from './assets/bin.png';

const Coupon = () => {
  const [isGeneratePopupOpen, setIsGeneratePopupOpen] = useState(false);

  const coupons = [
    { code: 'AB90283PQ', offer: 'Flat 50% off on your next order at KFC', generatedDate: '12-04-2024', issuedDate: '12-05-2024', expiryDate: '12-05-2024', status: 'Claimed' },
    { code: 'PQ90283VQ', offer: 'Buy 1 get 1 Free on your next order at KFC', generatedDate: '04-03-2024', issuedDate: '04-04-2024', expiryDate: '04-04-2024', status: 'Expired' },
    { code: 'UV9B029LP', offer: 'Flat 50% off upto 200rs on your next order at KFC', generatedDate: '12-04-2024', issuedDate: '-', expiryDate: '-', status: 'Generated' },
    { code: 'PQ90283VQ', offer: 'Flat 50% off on your next order at KFC', generatedDate: '04-03-2024', issuedDate: '-', expiryDate: '-', status: 'Issued' },
    { code: 'UV9B029LP', offer: 'Buy 1 get 1 Free on your next order at KFC', generatedDate: '12-04-2024', issuedDate: '12-05-2024', expiryDate: '12-05-2024', status: 'Claimed' },
    { code: 'AB90283PQ', offer: 'Flat 50% off upto 200rs on your next order at KFC', generatedDate: '12-04-2024', issuedDate: '-', expiryDate: '-', status: 'Expired' },
    { code: 'PQ90283VQ', offer: 'Flat 50% off upto 200rs on your next order at KFC', generatedDate: '04-03-2024', issuedDate: '-', expiryDate: '-', status: 'Generated' },
  ];

  const handleGenerateClick = () => {
    setIsGeneratePopupOpen(true);
  };

  const handleCloseGeneratePopup = () => {
    setIsGeneratePopupOpen(false);
  };

  return (
    <div className="App">
      <div className="coupon-dashboard">
        <h2 style={{ margin: "16px 0px" }}>Total Coupons</h2>
        <div className="coupon-summary">
          <div className="summary-box">
            <img src={a1} alt="Total Coupons" className='coupone-img' />
            <div className="summary-text">
              <div className='coupone-card-title'>Total Coupons</div>
              <h3>189</h3>
            </div>
          </div>
          <div className="summary-box">
            <img src={a2} alt="Active Coupons" className='coupone-img' />
            <div className="summary-text">
              <div className='coupone-card-title'>Active Coupons</div>
              <h3>60</h3>
            </div>
          </div>
          <div className="summary-box">
            <img src={a3} alt="Claimed Coupons" className='coupone-img' />
            <div className="summary-text">
              <div className='coupone-card-title'>Claimed Coupons</div>
              <h3>4</h3>
            </div>
          </div>
          <div className="summary-box">
            <img src={a4} alt="Expired Coupons" className='coupone-img' />
            <div className="summary-text">
              <div className='coupone-card-title'>Expired Coupons</div>
              <h3>20</h3>
            </div>
          </div>
          <div className="actions">
            <button className="verify-btn">Verify Coupon</button>
            <button className="generate-btn" onClick={handleGenerateClick}>Generate Coupon</button>
          </div>
        </div>

        {/* Coupons Table */}
        <div style={{ width: '100%', marginTop: '20px' }}>
          {/* Header */}
          <div style={{ display: 'flex', backgroundColor: '#E2E8F0', color: '#000', padding: '10px 0', fontWeight: 'bold' }}>
            <div style={{ flex: 1, padding: '0 10px' }}>Coupon Code</div>
            <div style={{ flex: 1, padding: '0 10px' }}>Offer</div>
            <div style={{ flex: 1, padding: '0 10px' }}>Generated Date</div>
            <div style={{ flex: 1, padding: '0 10px' }}>Issued Date</div>
            <div style={{ flex: 1, padding: '0 10px' }}>Expiry Date</div>
            <div style={{ flex: 1, padding: '0 10px' }}>Status</div>
            <div style={{ flex: 1, padding: '0 10px' }}>Delete</div>
          </div>

          {/* Body */}
          <div>
            {coupons.map((coupon, index) => (
              <div key={index} style={{ display: 'flex', padding: '10px 0', borderBottom: '1px solid #333' }}>
                <div style={{ flex: 1, padding: '0 10px' }}>{coupon.code}</div>
                <div style={{ flex: 1, padding: '0 10px' }}>{coupon.offer}</div>
                <div style={{ flex: 1, padding: '0 10px' }}>{coupon.generatedDate}</div>
                <div style={{ flex: 1, padding: '0 10px' }}>{coupon.issuedDate}</div>
                <div style={{ flex: 1, padding: '0 10px' }}>{coupon.expiryDate}</div>
                <div style={{ flex: 1, padding: '0 10px', color: coupon.status === 'Expired' ? 'red' : coupon.status === 'Claimed' ? 'green' : 'black' }}>{coupon.status}</div>
                <div style={{ flex: 1, padding: '0 10px', cursor: 'pointer', color: '#ff4d4d' }}>
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    <img src={bin} alt="Delete" style={{ width: '20px', height: '20px' }} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 0' }}>
            <button style={{ backgroundColor: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer', margin: '0 10px' }}>
              &lt;
            </button>
            <p style={{ margin: '0 10px' }}>Showing Page 1 of 10</p>
            <button style={{ backgroundColor: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer', margin: '0 10px' }}>
              &gt;
            </button>
          </div>
        </div>

        {isGeneratePopupOpen && (
          <div className="popup-overlay" style={{ border: "1px solid red" }}>
            <div className="popup">
              <h3>Generate Coupon</h3>
              <form>
                <div className="form-row">
                  <label>
                    Coupon Code:
                    <input type="text" name="code" />
                  </label>
                  <label>
                    Validity:
                    <input type="date" name="validity" />
                  </label>
                </div>
                <div className="form-row">
                  <label>
                    Terms & Conditions:
                    <input type="text" name="terms1" />
                  </label>
                  <label>
                    Quantity:
                    <select name="quantity">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </label>
                </div>
                <div className="popup-actions">
                  <button type="button" onClick={handleCloseGeneratePopup}>Cancel</button>
                  <button type="submit">Generate Coupon</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Coupon;
