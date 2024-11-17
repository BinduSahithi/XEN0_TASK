import React, { useState } from 'react';
import api from '../utils/api';

function CreateCampaign() {
  const [campaign, setCampaign] = useState({
    name: '',
    message: '',
    audienceIds: '',
  });

  const handleSubmit = async () => {
    try {
      const response = await api.createCampaign({
        ...campaign,
        audienceIds: campaign.audienceIds.split(',').map((id) => parseInt(id.trim(), 10)),
      });
      alert(`Campaign created successfully! ID: ${response.data.campaignId}`);
    } catch (error) {
      alert('Error creating campaign');
    }
  };

  return (
    <div className="floating-container">
      <h2>Create Campaign</h2>
      <div className="input-group">
        <label>Campaign Name</label>
        <input
          type="text"
          placeholder="Enter Campaign Name"
          value={campaign.name}
          onChange={(e) => setCampaign({ ...campaign, name: e.target.value })}
        />
      </div>
      <div className="input-group">
        <label>Message</label>
        <textarea
          placeholder="Enter Campaign Message"
          value={campaign.message}
          onChange={(e) => setCampaign({ ...campaign, message: e.target.value })}
        ></textarea>
      </div>
      <div className="input-group">
        <label>Audience IDs (comma-separated)</label>
        <input
          type="text"
          placeholder="e.g., 1, 2, 3"
          value={campaign.audienceIds}
          onChange={(e) => setCampaign({ ...campaign, audienceIds: e.target.value })}
        />
      </div>
      <button onClick={handleSubmit}>Create Campaign</button>
    </div>
  );
}

export default CreateCampaign;
