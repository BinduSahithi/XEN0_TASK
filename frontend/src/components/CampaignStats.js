import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../utils/api';

function CampaignStats() {
  const { campaignId } = useParams();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.fetchCampaignStats(campaignId);
        setStats(response.data);
      } catch (error) {
        alert('Error fetching campaign stats');
        console.error(error.response ? error.response.data : error.message);
      }
    };

    fetchStats();
  }, [campaignId]);

  if (!stats) {
    return <div className="floating-container">Loading campaign stats...</div>;
  }

  return (
    <div className="floating-container">
      <h2>Campaign Stats</h2>
      <div className="stats">
        <p><strong>Campaign ID:</strong> {stats.campaignId}</p>
        <p><strong>Audience Size:</strong> {stats.audienceSize}</p>
        <p><strong>Messages Sent:</strong> {stats.messagesSent}</p>
        <p><strong>Messages Failed:</strong> {stats.messagesFailed}</p>
      </div>
    </div>
  );
}

export default CampaignStats;
