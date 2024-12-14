const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/search', async (req, res) => {
  const { searchBy, query } = req.body;
  try {
    let url;
    if (searchBy === 'pincode') {
      url = `http://www.postalpincode.in/api/pincode/${query}`;
    } else if (searchBy === 'name') {
      url = `http://www.postalpincode.in/api/postoffice/${query}`;
    } else {
      return res.status(400).json({ error: 'Invalid search type' });
    }
    const response = await axios.get(url);

    if (response.data.Status !== 'Success') {
      return res.status(404).json({ error: 'No results found' });
    }
    res.json(response.data.PostOffice);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

module.exports = router;
