import http from 'k6/http';
import { sleep } from 'k6';

export default function() {
  const data = JSON.stringify({
    price:100,
    tax:50,
    cleaning_fee:100,
    service_fee:100,
    guest_limit:10,
    rating:4,
    reviews:100
  })

  http.post('http://localhost:3002/properties',data);
  sleep(3);
}