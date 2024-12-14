const mysql = require("mysql2");

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Vinayak@#32000',
  database: 'postal_locator',
  waitForConnections: true,
  connectionLimit: 10,  
  queueLimit: 0,
});

// Use the promise-based pool
const promisePool = pool.promise();

const getFavorites = async () => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM favorites');
    return rows;
  } catch (error) {
    throw new Error('Failed to fetch favorites: ' + error.message);
  }
};

module.exports = {
  promisePool,
  getFavorites
};
