import React, { useState } from 'react';
import api from '../utils/api';

function AudienceSegment() {
  const [conditions, setConditions] = useState({ total_spending: '', visits: '' });

  const handleSubmit = async () => {
    try {
      const response = await api.createAudience({ conditions });
      alert(`Audience created successfully! Size: ${response.data.size}`);
    } catch (error) {
      alert('Error creating audience');
    }
  };

  return (
    <div className="floating-container">
      <h2>Create Audience Segment</h2>
      <div className="input-group">
        <label>Spending Condition</label>
        <input
          type="text"
          placeholder="e.g., > 10000"
          onChange={(e) => setConditions({ ...conditions, total_spending: e.target.value })}
        />
      </div>
      <div className="input-group">
        <label>Visits Condition</label>
        <input
          type="text"
          placeholder="e.g., <= 3"
          onChange={(e) => setConditions({ ...conditions, visits: e.target.value })}
        />
      </div>
      <button onClick={handleSubmit}>Create Segment</button>
    </div>
  );
}

export default AudienceSegment;
