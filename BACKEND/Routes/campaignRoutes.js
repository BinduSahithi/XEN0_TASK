const express = require('express');
const router = express.Router();
const db = require('../database/dbconfig');

router.post('/audience', (req, res) => {
  const { conditions } = req.body;

  let query = 'SELECT * FROM customers WHERE ';
  query += Object.entries(conditions)
    .map(([field, condition]) => `${field} ${condition}`)
    .join(' AND ');

  db.query(query, (err, results) => {
    if (err) return res.status(500).send(err);

    const audienceSize = results.length;
    res.send({ audience: results, size: audienceSize });
  });
});

router.post('/campaign', (req, res) => {
    const { name, message, audienceIds } = req.body;
  
    // Validate audience IDs
    const validateQuery = 'SELECT id FROM customers WHERE id IN (?)';
    db.query(validateQuery, [audienceIds], (err, results) => {
      if (err) return res.status(500).send(err);
  
      const existingIds = results.map((row) => row.id);
      const invalidIds = audienceIds.filter((id) => !existingIds.includes(id));
  
      if (invalidIds.length > 0) {
        return res.status(400).send({
          error: `The following customer IDs do not exist: ${invalidIds.join(', ')}`
        });
      }
  
      // Proceed with campaign creation
      const campaignQuery = 'INSERT INTO campaigns (name, message) VALUES (?, ?)';
      db.query(campaignQuery, [name, message], (err, result) => {
        if (err) return res.status(500).send(err);
  
        const campaignId = result.insertId;
        const commLogQuery = 'INSERT INTO communications_log (campaign_id, customer_id) VALUES ?';
        const values = audienceIds.map((id) => [campaignId, id]);
  
        db.query(commLogQuery, [values], (err) => {
          if (err) return res.status(500).send(err);
          res.send({ message: 'Campaign created', campaignId });
        });
      });
    });
  });
  
router.post('/send-message', (req, res) => {
  const { campaignId } = req.body;

  const query = 'SELECT * FROM communications_log WHERE campaign_id = ?';
  db.query(query, [campaignId], (err, results) => {
    if (err) return res.status(500).send(err);

    results.forEach((log) => {
      const status = Math.random() < 0.9 ? 'SENT' : 'FAILED';

      const updateQuery = 'UPDATE communications_log SET status = ? WHERE id = ?';
      db.query(updateQuery, [status, log.id], (err) => {
        if (err) console.error(err);
      });
    });

    res.send({ message: 'Messages processed' });
  });
});

module.exports = router;
