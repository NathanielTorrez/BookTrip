DROP DATABASE IF EXISTS ooking;

CREATE DATABASE booking;

\c booking;

CREATE TABLE reservations (
  id SERIAL PRIMARY KEY,
  checkin date,
  checkout date,
  homeid INT REFERENCES homes(homeid)
);


CREATE TABLE pricing (
  id SERIAL PRIMARY KEY,
  price SMALLINT,
  rating REAL,
  reviews SMALLINT,
  guest_limit SMALLINT,
  cleaning_fee SMALLINT,
  service_fee SMALLINT,
  tax SMALLINT
);


CREATE TABLE homes (
  homeid serial PRIMARY KEY,
  pricing INT REFERENCES pricing(id),
  reservations INT REFERENCES reservations(id)
);


