DROP DATABASE IF EXISTS booking;

CREATE DATABASE booking;

\c booking;

CREATE TABLE homes (
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

ALTER TABLE reservations
ADD COLUMN  homeid INT REFERENCES homes(id);

ALTER TABLE homes DISABLE TRIGGER ALL;

ALTER TABLE reservations DISABLE TRIGGER ALL;
