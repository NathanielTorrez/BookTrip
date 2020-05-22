const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/booking', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!")
});

  var homes = new mongoose.Schema({
    price: Number,
    rating: Number,
    reviews: Number,
    guest_limit: Number,
    cleaning_fee: Number,
    service_fee: Number,
    tax: Number,
    reservations: [{type: mongoose.Schema.Types.ObjectId, ref: 'reservations'}]
    });

var reservations = new mongoose.Schema({
  checkin: Date,
  checkout: Date
})
