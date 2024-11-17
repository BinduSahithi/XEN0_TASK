const express = require('express');
const router = express.Router();
const db = require('../database/dbconfig');
const { validateCustomerData } = require('../utils/validateData');

router.post('/customer', (req, res) => {
  const customer = req.body;
  if (!validateCustomerData(customer)) {
    return res.status(400).send({ error: 'Invalid customer data' });
  }

  const query = 'INSERT INTO customers SET ?';
  db.query(query, customer, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'Customer added', customerId: result.insertId });
  });
});

router.post('/order', (req, res) => {
  const order = req.body;

  const query = 'INSERT INTO orders SET ?';
  db.query(query, order, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'Order added', orderId: result.insertId });
  });
});
// Fetch campaign history
router.get('/campaign/history', (req, res) => {
    const query = 'SELECT * FROM campaigns ORDER BY created_at DESC';
  
    db.query(query, (err, results) => {
      if (err) return res.status(500).send(err);
      res.send(results);
    });
  });
  

module.exports = router;
