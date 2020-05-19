/* eslint-disable no-console */
/* eslint-disable no-undef */
// const Adapter = require('enzyme-adapter-react-16');

// const { Enzyme } = require('enzyme');
const sum = require('../sum');
// import sum from '../sum';
// const sum = (a, b) => a + b;


describe('Sum function', () => {
  test('it should sum the two params', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
