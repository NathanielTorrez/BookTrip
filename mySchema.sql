DROP DATABASE IF EXISTS Booking;
CREATE DATABASE Booking;

\c Booking;

CREATE TABLE reservations (
  id SERIAL PRIMARY KEY,
  checkin date,
  checkout data,
  homeid REFERENCES homes(homeid)
)


CREATE TABLE pricing (
  id SERIAL PRIMARY KEY,
  price INT,
  rating REAL,
  reviews INT,
  guest_limit INT,
  cleaning_fee INT,
  service_fee INT,
  tax INT
);


CREATE TABLE homes (
  homeid serial PRIMARY KEY,
  pricing INT REFERENCES pricing(id),
  reservations INT REFERENCES reservations(id)
)


