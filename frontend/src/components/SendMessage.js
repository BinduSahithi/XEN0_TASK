import React, { useState } from 'react';
import api from '../utils/api';

function SendMessage() {
  const [campaignId, setCampaignId] = useState('');
  const [message, setMessage] = useState('');
  const [showMessageBox, setShowMessageBox] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await api.sendMessage({ campaignId: parseInt(campaignId, 10) });
      setMessage(response.data.message);
      setShowMessageBox(true);
      setTimeout(() => setShowMessageBox(false), 3000);
    } catch (error) {
      setMessage('Error sending messages');
      setShowMessageBox(true);
      setTimeout(() => setShowMessageBox(false), 3000);
    }
  };

  return (
    <div className="floating-container">
      <h2>Send Messages</h2>
      <div className="input-group">
        <label>Campaign ID</label>
        <input
          type="number"
          placeholder="Enter Campaign ID"
          value={campaignId}
          onChange={(e) => setCampaignId(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Send Messages</button>
      {showMessageBox && <div className="message-box">{message}</div>}
    </div>
  );
}

export default SendMessage;
