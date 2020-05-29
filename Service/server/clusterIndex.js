const os = require("os");
const cluster = require("cluster");

if (cluster.isMaster) {
  const n_cpus = os.cpus().length;
  console.log(`forking ${n_cpus} CPU'S`)
  for (let i =0 ; i < n_cpus; i++) {
    cluster.fork()
  }

} else {
  const newrelic = require('newrelic')

const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const expressStaticGzip = require('express-static-gzip');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/', expressStaticGzip(`${__dirname}/../client/dist`));

app.get('/properties', (req, res) => {
  // const id = req.query.id;
  //static id used for testing purposes
  const id = Math.floor(Math.random() * 1000)
  const queryStr = `SELECT * FROM homes WHERE id=${id};`;
  db.query(queryStr, (err, result) => {
    if (err) {
      console.log(err)
      res.send(`ERROR, ${err}`);
    } else {
      res.send(result.rows);
    }
  });
});

app.put('/properties', (req, res) => {
  const { id } = req.query.id;
  const { value } = req.body;
  const { column } = req.body;

  db.query(`UPDATE homes SET ${column} = ${value} WHERE id=${id}`, (err, result) => {
     if (err) {
       res.status(400);
       res.send();
     } else {
      res.status(204);
      res.send(result);
     }
   });
});

app.post('/properties', (req, res) => {
  console.log(req.body)
  const { tax } = req.body;
  console.log(tax)
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

app.post('/properties/reservations', (req, res) => {
  console.log(req.body)
  const { checkin } = req.body;
  const { checkout } = req.body;


  db.query(`INSERT INTO reservations(checkin, checkout)
  VALUES(${checkin}, ${checkout})`, (err, results) => {
    if (err) {
      console.log(err)
      res.sendStatus(400)
    } else {
      res.send(200)
      res.end()
    }
  });
})

app.delete('/properties', (req, res) => {
  const { id } = req.query.id;

  db.query(`DELETE FROM homes WHERE id=${id}` ,(err, result) => {
    if (err) {
      console.log(err)
      res.sendStatus(404)
    } else {
      res.sendStatus(200)
    }
  })
})

app.delete('/properties/reservations', (req, res) => {
  const { id } = req.query.id;

  db.query(`DELETE FROM reservations WHERE id=${id}` ,(err, result) => {
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
}


