const validateCustomerData = (data) => {
    if (!data.name || !data.email || typeof data.total_spending !== 'number') return false;
    return true;
  };
  
  module.exports = { validateCustomerData };
  