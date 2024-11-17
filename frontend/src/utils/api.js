import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = {
  addCustomer: (data) => axios.post(`${API_BASE_URL}/customer`, data),
  addOrder: (data) => axios.post(`${API_BASE_URL}/order`, data),
  createAudience: (data) => axios.post(`${API_BASE_URL}/audience`, data),
  createCampaign: (data) => axios.post(`${API_BASE_URL}/campaign`, data),
  sendMessage: (data) => axios.post(`${API_BASE_URL}/send-message`, data),
  fetchCampaignHistory: () => axios.get(`${API_BASE_URL}/campaign/history`),
  fetchCampaignStats: (campaignId) => axios.get(`${API_BASE_URL}/campaign/stats/${campaignId}`),
};

export default api;
