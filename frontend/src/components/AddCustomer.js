import React, { useState } from 'react';
import api from '../utils/api';

function AddCustomer() {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    total_spending: '',
    visits: '',
    last_visit_date: '',
  });

  const handleSubmit = async () => {
    try {
      const formattedCustomer = {
        ...customer,
        total_spending: parseFloat(customer.total_spending),
        visits: parseInt(customer.visits, 10),
      };
      const response = await api.addCustomer(formattedCustomer);
      alert(`Customer added successfully! ID: ${response.data.customerId}`);
    } catch (error) {
      alert('Error adding customer');
    }
  };

  return (
    <div className="floating-container">
      <h2>Add Customer</h2>
      <div className="input-group">
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter name"
          onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
        />
      </div>
      <div className="input-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email"
          onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
        />
      </div>
      <div className="input-group">
        <label>Total Spending</label>
        <input
          type="number"
          placeholder="Enter total spending"
          onChange={(e) => setCustomer({ ...customer, total_spending: e.target.value })}
        />
      </div>
      <div className="input-group">
        <label>Visits</label>
        <input
          type="number"
          placeholder="Enter number of visits"
          onChange={(e) => setCustomer({ ...customer, visits: e.target.value })}
        />
      </div>
      <div className="input-group">
        <label>Last Visit Date</label>
        <input
          type="date"
          onChange={(e) => setCustomer({ ...customer, last_visit_date: e.target.value })}
        />
      </div>
      <button onClick={handleSubmit}>Add Customer</button>
    </div>
  );
}

export default AddCustomer;
