const  { reservationModel, homeModel } = require('./schema.js')
const faker = require('faker');

let count = 0;

const seedHomes = (num) => {
  const collectionArray = [];

  for (var i = 0; i < 50000; i++) {
    let price = faker.random.number({
      'min': 50,
      'max': 999
    });
    let rating = faker.random.number({
      'min': 1,
      'max': 5
    });
    let reviews = faker.random.number({
      'min': 0,
      'max': 1000
    });
    let guest_limit = faker.random.number({
      'min': 2,
      'max': 20
    });
    let cleaning_fee = faker.random.number({
      'min': 20,
      'max': 100
    })
    let service_fee = faker.random.number({
      'min': 50,
      'max': 150
    });
    let tax = Math.ceil(parseFloat(((price * .0825) + '').substring(0, 5)));

    collectionArray.push({
      price:price,
      rating:rating,
      reviews:reviews,
      guest_limit:guest_limit,
      cleaning_fee:cleaning_fee,
      service_fee:service_fee,
      tax:tax
    })
  }

  homeModel.collection.insert(collectionArray, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('saved')
    }
  })

  if (count < 2199) {
    count++
    console.log(count)
    setTimeout(seedHomes, 1000);
  } else {
    count++
    return
 }
}

const seedReservations = () => {

    const collectionArray = [];
    for (var i = 0; i < 50000; i++) {
      const fakeCheckin = faker.date.between('2020-01-01', '2020-04-01');
      const fakeCheckout = faker.date.between(fakeCheckin, '2020-04-01');
      collectionArray.push({
        checkin: fakeCheckin,
        checkout: fakeCheckout
      });
    }

    reservationModel.collection.insert(collectionArray, (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('saved')
      }
    })

    if (count < 1999) {
      count++
      console.log(count)
      setTimeout(seedReservations, 900);
    } else {
      seedHomes()
      count++
      return
  }
}

seedReservations();