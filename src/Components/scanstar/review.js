import React from 'react';
import './review.css';

// Sample data for reviews
const reviews = [
    {
        image: 'user1.jpg',
        name: 'Admeya Khan',
        rating: 5,
        comment: 'Great experience! The staff was friendly and knowledgeable, and the service was quick. I would definitely recommend this place to others.',
        time: '04:27 pm',
        date: '01-04-2024',
    },
    {
        image: 'google-icon.png',
        name: 'Rahul Jaiswar',
        rating: 4,
        comment: 'Absolutely phenomenal experience from start to finish! The service was impeccable—attentive yet unobtrusive. The ambiance was charming.',
        time: '11:56 pm',
        date: '05-02-2023',
    },
    {
        image: 'user2.jpg',
        name: 'Shantanu Shinde',
        rating: 5,
        comment: 'Great experience! The staff was friendly and knowledgeable, and the service was quick. I would definitely recommend this place to others.',
        time: '00:45 am',
        date: '12-04-2023',
    },
    {
        image: 'user3.jpg',
        name: 'Gaurav Raju',
        rating: 4,
        comment: 'Absolutely phenomenal experience from start to finish! The service was impeccable—attentive yet unobtrusive. The ambiance was charming.',
        time: '02:34 am',
        date: '24-05-2024',
    },
    {
        image: 'user4.jpg',
        name: 'Admeya Qureshi',
        rating: 5,
        comment: 'Really Amazing, Had a great time.',
        time: '06:21 am',
        date: '27-06-2024',
    },
    {
        image: 'user5.jpg',
        name: 'Rahul Yadav',
        rating: 5,
        comment: 'Amazing people enjoyed my time there would love to visit again.',
        time: '07:33 am',
        date: '05-07-2024',
    },
    {
        image: 'user6.jpg',
        name: 'Shantanu Wadekar',
        rating: 4,
        comment: '-',
        time: '10:55 am',
        date: '20-08-2024',
    },
    {
        image: 'google-icon.png',
        name: 'Gaurav Morajkar',
        rating: 1,
        comment: 'Absolutely phenomenal experience from start to finish! The service was impeccable—attentive yet unobtrusive. The ambiance was charming.',
        time: '01:23 pm',
        date: '09-09-2024',
    },
];

const Reviews = () => {
    return (
        <div className="reviews-page">
            <header>
                <img src="logo.png" alt="Logo" className="logo" />
  
                <div className="user-profile">
                    <img src="user-profile.png" alt="User" />
                </div>
            </header>
            <div className="reviews-container">
                <div className="filter-sort">
                    <input type="date" className="date-picker" />
                    <button className="filter-sort-button">Filter & Sort</button>
                </div>
                <div className="reviews-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th className='thname'>Full Name</th>
                            <th>Rating</th>
                            <th className='thcomment'>Comment</th>
                            <th className='thtime'>Time</th>
                            <th className='thdate'>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map((review, index) => (
                            <tr key={index}>
                                <td><img src={review.image} alt={review.name} className="user-image" /></td>
                                <td>{review.name}</td>
                                <td>
                                    <div className="stars">
                                        {'★'.repeat(review.rating)}
                                        {'☆'.repeat(5 - review.rating)}
                                    </div>
                                </td>
                                <td>
                                    <div className="comment">
                                        {review.comment.length > 100 ? (
                                            <>
                                                {review.comment.substring(0, 100)}...
                                                <span className="more"> more</span>
                                            </>
                                        ) : (
                                            review.comment
                                        )}
                                    </div>
                                </td>
                                <td>{review.time}</td>
                                <td>{review.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
