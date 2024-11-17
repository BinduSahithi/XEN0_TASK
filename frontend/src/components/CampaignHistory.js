import React, { useEffect, useState } from 'react';
import api from '../utils/api';

function CampaignHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await api.fetchCampaignHistory();
        setHistory(response.data);
      } catch (error) {
        alert('Error fetching campaign history');
        console.error(error.response ? error.response.data : error.message);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="floating-container">
      <h2>Campaign History</h2>
      <ul className="campaign-list">
        {history.map((campaign) => (
          <li key={campaign.id} className="campaign-item">
            <strong>{campaign.name}</strong>
            <p>{campaign.message}</p>
            <span>Created at: {new Date(campaign.created_at).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CampaignHistory;
