import React, { useState } from 'react';
import api from '../utils/api';

function AddOrder() {
  const [order, setOrder] = useState({
    customer_id: '',
    order_amount: '',
    order_date: '',
  });

  const handleSubmit = async () => {
    try {
      const response = await api.addOrder({
        ...order,
        order_amount: parseFloat(order.order_amount), // Ensure amount is sent as a number
      });
      alert(`Order added successfully! ID: ${response.data.orderId}`);
    } catch (error) {
      alert('Error adding order');
    }
  };

  return (
    <div className="floating-container">
      <h2>Add Order</h2>
      <div className="input-group">
        <label>Customer ID</label>
        <input
          type="text"
          placeholder="Enter Customer ID"
          onChange={(e) => setOrder({ ...order, customer_id: e.target.value })}
        />
      </div>
      <div className="input-group">
        <label>Order Amount</label>
        <input
          type="number"
          placeholder="Enter Order Amount"
          onChange={(e) => setOrder({ ...order, order_amount: e.target.value })}
        />
      </div>
      <div className="input-group">
        <label>Order Date</label>
        <input
          type="date"
          onChange={(e) => setOrder({ ...order, order_date: e.target.value })}
        />
      </div>
      <button onClick={handleSubmit}>Add Order</button>
    </div>
  );
}

export default AddOrder;
