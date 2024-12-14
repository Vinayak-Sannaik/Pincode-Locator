const express = require('express');
const { getFavorites } = require('../db/connection');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const favorites = await getFavorites();
        res.json(favorites);
    } catch (error) {
        res.status(500).json({ 
            message: 'Error retrieving favorites', 
            error: error.message 
        });
    }
});

module.exports = router;