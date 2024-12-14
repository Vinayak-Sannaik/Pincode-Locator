const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/search', async (req, res) => {
  const { searchBy, query } = req.body;

  try {
    const url = `http://www.postalpincode.in/api/pincode/${query}`;
    const response = await axios.get(url);
    if (response.data.Status !== 'Success') {
      return res.status(404).json({ error: 'No results found' });
    }
    res.json(response.data.PostOffice);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

module.exports = router;
