const { Pool } = require('pg');

const pool = new Pool({
  user: 'yourUser',
  host: 'localhost',
  database: 'facsite',
  password: 'charaf',
  port: 5432,
});

pool.connect((err) => {
  if (err) {
    console.error('Connection error', err.stack);
  } else {
    console.log('Connected to PostgreSQL');
  }
});
