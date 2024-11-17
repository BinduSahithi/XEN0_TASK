const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const customerRoutes = require('./Routes/customerRoutes');
const campaignRoutes = require('./Routes/campaignRoutes');

const app = express();


app.use(cors());

app.use(bodyParser.json());

app.use('/api', customerRoutes);
app.use('/api', campaignRoutes);

const PORT =  5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
