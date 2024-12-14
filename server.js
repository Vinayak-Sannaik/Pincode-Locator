// index.js
const express = require('express');
const bodyParser = require('body-parser');
const searchRoutes = require('./routes/searchRoutes');  
const favoritesRoutes = require('./routes/favoritesRoutes');  

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));  

// Use the routes
app.use('/api', searchRoutes);  
app.use('/api', favoritesRoutes);  


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/search.html');
});

app.get('/favorites', (req, res) => {
  res.sendFile(__dirname + '/views/favorites.html');
});


const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
