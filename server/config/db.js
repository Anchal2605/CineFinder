import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const getDbConfig = () => ({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  port: Number(process.env.DB_PORT) || 3306,
});

let pool;

export const initDatabase = async () => {
  const dbConfig = getDbConfig();
  try {
    // Connect without database to ensure database exists
    const connection = await mysql.createConnection(dbConfig);
    const dbName = process.env.DB_NAME || 'cinefinder_db';
    
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\`;`);
    await connection.end();

    // Create pool with target database
    pool = mysql.createPool({
      ...dbConfig,
      database: dbName,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    console.log(`Connected to MySQL database: ${dbName}`);

    // Initialize tables
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS watch_history (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        movie_id INT NOT NULL,
        title VARCHAR(255) NOT NULL,
        poster_path VARCHAR(500),
        rating VARCHAR(50),
        year VARCHAR(50),
        watched_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      );
    `);

    console.log('Database tables initialized successfully.');
    return true;
  } catch (error) {
    console.error('MySQL Database Initialization Error:', error.message);
    pool = null;
    throw error;
  }
};

export const query = async (sql, params) => {
  if (!pool) {
    try {
      await initDatabase();
    } catch (err) {
      throw new Error(`MySQL Connection Error: ${err.message}. Please check DB_PASSWORD in server/.env`);
    }
  }
  const [results] = await pool.query(sql, params);
  return results;
};
