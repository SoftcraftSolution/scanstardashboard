import React from 'react';
import './adminlist.css';
import TopBar from '../Components/Topbar/topbar';

const adminData = [
  {
    name: 'Shantonu Baid',
    mobile: '7666898810',
    email: 'shantonubaid@gmail.com',
    dateOfJoining: '12-08-2014',
  },
  {
    name: 'Abhishek Mishra',
    mobile: '6289068908',
    email: 'abhimishra@protonmail.com',
    dateOfJoining: '31-05-2018',
  },
  {
    name: 'Niraj Prakash',
    mobile: '7580076890',
    email: 'niraj79@gmail.com',
    dateOfJoining: '24-08-2023',
  },
  {
    name: 'Parmeshwar Kadam',
    mobile: '7500890130',
    email: 'parmeshkadam713@gmail.com',
    dateOfJoining: '08-10-2023',
  },
  {
    name: 'Rajyothi Kovind Singh',
    mobile: '8920088810',
    email: 'kovindsrj@protonmail.com',
    dateOfJoining: '27-11-2023',
  },
];

const AdminList = () => {
  return (
    <div className="App">
        <TopBar/>
    <div className="admin-list">
      <table>
        <thead>
          <tr>
            <th>Admin Name</th>
            <th>Mobile Number</th>
            <th>Email ID</th>
            <th>Date of Joining</th>
          </tr>
        </thead>
        <tbody>
          {adminData.map((admin, index) => (
            <tr key={index}>
              <td>{admin.name}</td>
              <td>{admin.mobile}</td>
              <td>{admin.email}</td>
              <td>{admin.dateOfJoining}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default AdminList;
