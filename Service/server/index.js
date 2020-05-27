const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const expressStaticGzip = require('express-static-gzip');
const newrelic = require('newrelic')


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/', expressStaticGzip(`${__dirname}/../client/dist`));

app.get('/data', (req, res) => {
  const queryStr = 'SELECT * FROM homes';
  console.log('made it to get')
  db.query(queryStr, (err, result) => {
    if (err) {
      res.send(`ERROR, ${err}`);
    } else {
      res.send(result.rows);
    }
  });
});

app.put('/put', (req, res) => {
  const { id } = req.query;
  const { value } = req.body;
  const { column } = req.body;

  db.query(`UPDATE homes SET ${column} = ${value} WHERE houseID=${id}`, (err, result) => {
     if (err) {
       res.status(400);
       res.send();
     } else {
      res.status(204);
      res.send(result);
     }
   });
});

app.post('/post', (req, res) => {
  const { tax } = req.body;
  const { price } = req.body;
  const { rating } = req.body;
  const { reviews } = req.body;
  const { guestLimit } = req.body;
  const { serviceFee } = req.body;
  const { cleaningFee } = req.body;

  db.query(`INSERT INTO homes( price, rating, reviews, guest_limit, cleaning_fee, service_fee, tax )
  VALUES(${price}, ${rating}, ${reviews}, ${guestLimit}, ${cleaningFee}, ${serviceFee}, ${tax})`, (err, results) => {
    if (err) {
      console.log(err)
      res.sendStatus(400)
    } else {
      res.send(200)
      res.end()
    }
  });
})

app.delete('/delete', (req, res) => {
  const { houseID } = req.body;

  db.query(`DELETE FROM homes WHERE houseID=${houseID}` ,(err, result) => {
    if (err) {
      console.log(err)
      res.sendStatus(404)
    } else {
      res.sendStatus(200)
    }
  })
})


app.listen(3002, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port 3002....');
});
