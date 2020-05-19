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
app.get('/data', (req, res) => {
  const queryStr = 'SELECT * FROM homes';

  db.query(queryStr, (err, result) => {
    if (err) {
      res.send(`ERROR, ${err}`);
    } else {
      res.send(result.rows);
    }
  });
});


app.listen(3002, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port 3002....');
});
