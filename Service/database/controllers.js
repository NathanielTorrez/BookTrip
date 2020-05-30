const db = require('./index.js');

module.exports = {
  getAllProperties : (req, res) => {
    const id = Math.floor(Math.random() * 100000)
    //req.query.id;
    db.query(`SELECT * FROM homes WHERE id=${id};`, (err, result) => {
      if (err) {
        console.log(err);
        res.send(`ERROR, ${err}`);
      } else {
        res.send(result.rows);
      }
    });
  },
  updateProperty : (req, res) => {
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
  },
  addProperty : (req, res) => {
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
  },

  addReservation : (req, res) => {
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
  },
  deleteProperty :  (req, res) => {
    const { id } = req.query.id;

    db.query(`DELETE FROM homes WHERE id=${id}` ,(err, result) => {
      if (err) {
        console.log(err)
        res.sendStatus(404)
      } else {
        res.sendStatus(200)
      }
    })
  },
  deleteReservation :  (req, res) => {
    const { id } = req.query.id;
    db.query(`DELETE FROM reservations WHERE id=${id}` ,(err, result) => {
      if (err) {
        console.log(err)
        res.sendStatus(404)
      } else {
        res.sendStatus(200)
      }
    })
  }
}