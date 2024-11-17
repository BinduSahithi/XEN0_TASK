import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddCustomer from './components/AddCustomer';
import AddOrder from './components/AddOrder';
import AudienceSegment from './components/AudienceSegment';
import CreateCampaign from './components/CreateCampaign';
import SendMessage from './components/SendMessage';
import CampaignHistory from './components/CampaignHistory';
import CampaignStats from './components/CampaignStats';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          {user && (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/add-customer" element={<AddCustomer />} />
              <Route path="/add-order" element={<AddOrder />} />
              <Route path="/audience-segment" element={<AudienceSegment />} />
              <Route path="/create-campaign" element={<CreateCampaign />} />
              <Route path="/send-message" element={<SendMessage />} />
              <Route path="/campaign-history" element={<CampaignHistory />} />
              <Route path="/campaign-stats/:campaignId" element={<CampaignStats />} />
            </>
          )}
        </Routes>
      </Router>
      <footer className="footer">
        <p>Developed by M Bindu Sahithi (21BCE3740) </p>
      </footer>
    </div>
  );
}

export default App;
