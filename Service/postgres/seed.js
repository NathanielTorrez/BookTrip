//install faker for data generation
const faker = require('faker');
const fs = require('fs');

// create a for loop and generate a text file using fs.appendfile using data
const seedPricing = (queryAmount) => {
  const startTime = Date.now();
  for (let i = 0; i < queryAmount; i += 1) {
    let price = faker.random.number({
      'min': 50,
      'max': 999
    });
    //console.log('price per night   ',price);
    let rating = faker.random.number({
      'min': 1,
      'max': 5
    });
    //console.log('total rating  ', rating);
    let reviews = faker.random.number({
      'min': 0,
      'max': 1000
    });
    //console.log('total reviews   ',reviews);
    let guest_limit = faker.random.number({
      'min': 2,
      'max': 20
    });
    //console.log('guest limit   ',guest_limit);
    let cleaning_fee = faker.random.number({
      'min': 20,
      'max': 100
    })
    //console.log('cleaning fee   ', cleaning_fee)
    let service_fee = faker.random.number({
      'min': 50,
      'max': 150
    });
    //console.log('service fee  ', service_fee);
    let tax = Math.ceil(parseFloat(((price * .0825) + '').substring(0, 5)));
    //console.log('tax   ', tax)
    let data = `${price}, ${rating}, ${reviews}, ${guest_limit}, ${cleaning_fee}, ${service_fee}, ${tax} \n `;

    fs.appendFile('pricing.txt', data, 'utf8', (err) => {
      if (err) {
        console.log(err)
      }
    })
  }
  const stopTime = Date.now();
  console.log(`start time: ${startTime}  End time: ${stopTime}`)
  console.log(`total time : ${(stopTime - startTime) / 1000}s`)
}
seedPricing(1000)

// demlimit using a ,

//use copy to upload into postgres

// generate a pg_dump file