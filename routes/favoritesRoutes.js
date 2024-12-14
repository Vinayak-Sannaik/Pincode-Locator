const express = require('express');
const { promisePool} = require('../db/connection');
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, description, branch_type, delivery_status, taluk, circle, district, division, region, state, country } = req.body;

  console.log('req', name)
  console.log('req', req.body)

  try {
    const [result] = await promisePool.query(
      'INSERT INTO favorites (name, description, branch_type, delivery_status, circle, district, region, state) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [req.body.Name, req.body.Description, req.body.BranchType, req.body.DeliveryStatus, req.body.Circle, req.body.District, req.body.Region, req.body.State]
    );
    res.json({ message: 'Added to favorites' });
  } catch (error) {
    console.error('Error adding favorite:', error.message);
    res.status(500).json({ error: 'Failed to save favorite', details: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM favorites');
    res.json(rows);  
  } catch (error) {
    console.error('Error fetching favorites:', error);
    res.status(500).json({ error: 'Failed to load favorites', details: error.message });
  }
});

// DELETE route to remove a favorite by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;  // Get the id from the URL parameters

  try {
    // Query to delete the favorite from the database
    const [result] = await promisePool.query('DELETE FROM favorites WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Favorite not found' });
    }

    // Send a success response if the favorite is removed
    res.json({ message: 'Favorite removed' });
  } catch (error) {
    console.error('Error removing favorite:', error);
    res.status(500).json({ error: 'Failed to remove favorite', details: error.message });
  }
});

module.exports = router;
