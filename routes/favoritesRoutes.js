const express = require('express');
const { promisePool, getFavorites } = require('../db/connection');
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, description, branch_type, delivery_status, taluk, circle, district, division, region, state, country } = req.body;

  console.log('req', name)
  console.log('req', req.body.Name)

  try {
    const [result] = await promisePool.query(
      'INSERT INTO favorites (name, description, branch_type, delivery_status, circle, district, region, state) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [name, description, branch_type, delivery_status, circle, district, region, state]
    );
    res.json({ message: 'Added to favorites' });
  } catch (error) {
    console.error('Error adding favorite:', error.message);
    res.status(500).json({ error: 'Failed to save favorite', details: error.message });
  }
});

module.exports = router;
