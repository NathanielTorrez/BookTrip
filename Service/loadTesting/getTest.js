import http from 'k6/http';
import { sleep } from 'k6';

// export default function() {
//   http.get('http://localhost:3002/properties');
//   sleep(1);
// }

export let options = {
  stages: [
    { duration: '2m', target: 300 }, // below normal load
    { duration: '2m', target: 500 },
    { duration: '2m', target: 700 }, // normal load
    { duration: '2m', target: 900 }, // normal load
    { duration: '2m', target: 1100 }, // beyond the breaking point
    { duration: '2m', target: 800 }, // around the breaking point
    { duration: '2m', target: 400 },
    { duration: '2m', target: 0 }, // scale down. Recovery stage.
  ],
};

export default function() {

  let responses = http.batch([
    [
      'GET',
      `http://localhost:3002/properties`,
      null,
      { tags: { name: 'all' } },
    ],
    [
      'GET',
      `http://localhost:3002/properties`,
      null,
      { tags: { name: 'all' } },
    ],
    [
      'GET',
      `http://localhost:3002/properties`,
      null,
      { tags: { name: 'all' } },
    ],
    [
      'GET',
      `http://localhost:3002/properties`,
      null,
      { tags: { name: 'all' } },
    ],
  ]);

  sleep(1);
}