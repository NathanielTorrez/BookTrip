const faker = require('faker');
const fs = require('graceful-fs');
const seedHomes = (queryAmount) => {
  let percent = 0;
  for (let i = 0; i < queryAmount; i += 1) {
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
    let homeid = i;
    let data = `${price}, ${rating}, ${reviews}, ${guest_limit}, ${cleaning_fee}, ${service_fee}, ${tax} \n `;
    fs.appendFile('homes.txt', data, 'utf8', (err) => {
      if (err) {
        console.log(err)
      }
    })
    if (Math.floor(i / 100000) > percent) {
      percent = Math.floor(i / 100000);
      console.log(percent);
    }
  }
}
let count = 0;
const seedReservations = (num) => {
  for (var i = 0; i < num; i += 1) {
    const checkin = faker.date.between('2020-01-01','2020-04-01');
    const checkout = faker.date.between(checkin,'2020-04-01');
    const homeid = faker.random.number({
      'min': 1,
      'max': 10000000
    });
    const data = `${checkin.toISOString()}, ${checkout.toISOString()}, ${homeid} \n `;
    if (count > 1667) {
      fs.appendFile('reservations.txt', data, 'utf8', (err) => {
        if (err) {
          console.log(err);
        }
      });
    } else {
      fs.appendFile('reservations2.txt', data, 'utf8', (err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  }
}
const seedHomesHelper = () => {
  if (count < 417) {
    if (count === 416) {
      seedHomes(16000);
      setTimeout(seedHomesHelper,22000);
    } else {
  seedHomes(24000);
  setTimeout(seedHomesHelper,22000);
    }
  count++;
  console.log('loading homes ', Math.floor(count / 4.17), ' percent')
  } else {
    seedReservationsHelper()
    return
  }
}
const seedReservationsHelper = () => {
  if (count < 1667) {
  seedReservations(22000);
  setTimeout(seedReservationsHelper,22000);
  count++;
  console.log('loading reservations', Math.floor((count - 417) / 25), ' percent');
  } else {
    setTimeout(seedReservationsHelper2,22000);
    return
  }
const seedReservationsHelper2 = () => {
  if (count < 2917) {
  seedReservations(20000);
  setTimeout(seedReservationsHelper2,22000);
  count++;
  console.log('loading reservations', Math.floor((count - 417) / 25), ' percent');
  } else {
    return
  }
}
seedHomesHelper()
