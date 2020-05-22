DROP DATABASE IF EXISTS booking;

CREATE DATABASE booking;

\c booking;

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

CREATE TABLE reservations (
  id SERIAL PRIMARY KEY,
  checkin date,
  checkout date
);

CREATE TABLE homes (
  homeid serial PRIMARY KEY
);

ALTER TABLE reservations
ADD COLUMN  homeid INT REFERENCES homes(homeid);

ALTER TABLE homes
ADD COLUMN reservations INT REFERENCES reservations(id),
ADD COLUMN pricing INT REFERENCES pricing(id);


