/* eslint-disable no-console */
const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  database: 'booking',
});

//'postgres:postgres:@localhost:5432/air_bnb'

client.connect((err) => {
  if (err) {
    console.log('ERROR postgres', err);
  } else {
    console.log('Connected successfuly to postgres booking');
  }
});


module.exports = client;
