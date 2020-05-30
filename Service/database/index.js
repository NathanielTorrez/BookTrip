/* eslint-disable no-console */
const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  database: 'booking',
  max: 20,
  connectionTimeoutMillis: 0,
  idleTimeoutMillis: 0
});

//'postgres:postgres:@localhost:5432/air_bnb'

pool.connect((err, client, done) => {
  if (err) {
    console.log('ERROR postgres', err);
  } else {
    console.log('Pool successfuly connected to postgres booking');
  }
});


module.exports = pool;
