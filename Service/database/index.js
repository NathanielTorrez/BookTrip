/* eslint-disable no-console */
const { Client } = require('pg');

const client = new Client({
  host: 'reservation_db',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  database: 'air_bnb',
});
// 'postgres:postgres:@localhost:5432/air_bnb'

client.connect((err) => {
  if (err) {
    console.log('ERROR postgres', err);
  } else {
    console.log('Connected successfuly to postgres air_bnb');
  }
});


module.exports = client;
