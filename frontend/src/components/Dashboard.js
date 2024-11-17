import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [firstName, setFirstName] = useState('');

  // Retrieve the first name from local storage on component mount
  useEffect(() => {
    const storedName = localStorage.getItem('firstName');
    if (storedName) {
      setFirstName(storedName);
    }
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Welcome {firstName || 'Guest'} to Xeno SDE Task</h1>
      <div className="dashboard-buttons">
        <Link to="/add-customer" className="button">Add Customer</Link>
        <Link to="/add-order" className="button">Add Order</Link>
        <Link to="/audience-segment" className="button">Create Audience Segment</Link>
        <Link to="/create-campaign" className="button">Create Campaign</Link>
        <Link to="/send-message" className="button">Send Messages</Link>
        <Link to="/campaign-history" className="button">View Campaign History</Link>
      </div>
    </div>
  );
}

export default Dashboard;
