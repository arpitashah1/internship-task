import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="profile-page">
      <div className="profile-card">
        <h2 className="profile-title">Welcome, {user.firstName}!</h2>
        <div className="profile-info">
          <p><strong>Full Name:</strong> {user.firstName} {user.lastName}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>

        <div className="profile-actions">
          <Link to="/products" className="profile-btn view-btn">
            View Products
          </Link>
          <button
            className="profile-btn logout-btn"
            onClick={() => {
              localStorage.removeItem('user');
              window.location.href = '/login';
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
