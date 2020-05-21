## Server API

### Get property info
  * GET `/properties/:id`

**Path Parameters:**
  * `id` property id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
        "houseid": 3,
        "price": 30,
        "rating": 3.3,
        "reviews": 3,
        "guest_limit": 5,
        "cleaning_fee": 3,
        "service_fee": 3,
        "tax": 3,
        "reservations": [
          {
            "check_in": 2020-05-19,
            "check_out": 2020-05-24
          },
          {
            "check_in": 2020-05-25,
            "check_out": 2020-05-27
          }
        ]
    }
```

### Add property
  * POST `/properties`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
        "price": "int",
        "rating": "int",
        "reviews": "int",
        "guest_limit": "int",
        "cleaning_fee": "int",
        "service_fee": "int",
        "tax": "int"
    }
```
### Add reservation
  * POST `/properties/:id`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
        "check_in":2020-04-02,
        "check_out": 2020-04-03,
        "homeID":12345
    }
```

### Update property info
  * PATCH `/properties/:id`

**Path Parameters:**
  * `id` property id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
       "price": "int",
       "rating": "int",
       "reviews": "int",
       "guest_limit": "int",
       "cleaning_fee": "int",
       "service_fee": "int",
       "tax": "int"
    }
```
### Update reservation info
  * PATCH `/properties/:id`

**Path Parameters:**
  * `id` reservation id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
       "check_in": "date",
       "check_out": "date"
    }
```

### Delete property
  * DELETE `/properties/:id`

**Path Parameters:**
  * `id` property id

**Success Status Code:** `204`

### Delete reservation
  * DELETE `/properties/:id`

**Path Parameters:**
  * `id` reservation id

**Success Status Code:** `204`