const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const promisePool = pool.promise();

const getFavorites = async () => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM favorites");
    return rows;
  } catch (error) {
    throw new Error("Failed to fetch favorites: " + error.message);
  }
};

module.exports = {
  promisePool,
  getFavorites,
};
