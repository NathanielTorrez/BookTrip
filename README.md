# Notable Work 
> 1. Optimized Postgres database query execution time by 79% by adjusting configuration to increase max clients, updating schema and simplifying queries 
> 2. Decreased latency under-load by 90% by introducing a Nginx load balancer and horizontally scaling Express  servers. Improving service to handle 2050 
> RPS with  900ms latency under-load
> 3.Conducted multiple load test with NewRelic , Loader.io and Cloud Watch on  AWS EC2 deployed service and identified bottlenecks within the service 

# DB Speed Comparison - PostgreSQL vs MongoDB
>
> ![data metric](https://i.imgur.com/FQt51Sq.png)

# Baseline metrics for service
> Began receiving errors when over 600 rps, time in node also was also quite high
> (This metric is after optimzing PostgreSQL)
>
> ![baseline data](https://i.imgur.com/K1TSa3L.png?1)

# Metrics after optimizations
> Increase in overall performance
> Decrease in response time
> 2050 rps with 900ms response time
>
> ![optimzied data](https://i.imgur.com/eqEF05T.png)
