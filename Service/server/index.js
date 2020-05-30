const newrelic = require('newrelic');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const {getAllProperties, updateProperty, addProperty, addReservation, deleteProperty, deleteReservation} = require('../database/controllers.js')
const expressStaticGzip = require('express-static-gzip');

// ---------------- Middle Ware ------------------
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use('/', expressStaticGzip(`${__dirname}/../client/dist`));

// ---------------------Route Handling------------------
app.get('/properties', getAllProperties);
app.put('/properties', updateProperty);
app.post('/properties', addProperty);
app.post('/properties/reservations', addReservation);
app.delete('/properties',deleteProperty);
app.delete('/properties/reservations',deleteReservation);

app.listen(3002, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port 3002....');
});
