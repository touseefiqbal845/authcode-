import React from 'react';

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div className="dashboard">
      <h2>Welcome to Your Dashboard</h2>
      <p>This is a responsive dashboard. Customize it as needed!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
