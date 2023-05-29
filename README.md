## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

```c
# users table
[
  {
    "id": 1,
    "email": "jack@gmail.com",
    "name": "jack",
  },
  {
    "id": 2,
    "email": "isabel@gmail.com",
    "name": "isabel",
  },
  {
    "id": 3,
    "email": "hank@gmail.com",
    "name": "hank",
  }
]

# venues table
[
  {
    "id": 3,
    "userId": 1,
    "venueName": "The Chicago Theater",
    "username": "the-chicago-theater",
    "description": "A theater in Chicago.",
    "published": false,
    "seats": 1500,
  }
]

# artists table
[
  {
    "id": 4,
    "userId": 2,
    "artistName": "Tallest Man on Earth",
    "username": "tallest-man-on-earth",
    "description": "A man on earth who is tall.",
    "published": false,
  },
  {
    "id": 5,
    "userId": 3,
    "artistName": "A Tribe Called Quest",
    "username": "a-tribe-called-quest",
    "description": "We are a tribe by the name of quest.",
    "published": false,
  }
]

# timeslots table
[
  {
    "id": 6,
    "venueId": 3,
    "start": "2023-05-29T14:41:16.692Z",
    "end": "2023-05-29T16:41:16.692Z",
  },
  {
    "id": 7,
    "venueId": 3,
    "start": "2023-06-29T18:41:16.692Z",
    "end": "2023-06-29T19:51:16.692Z",
  },
  {
    "id": 8,
    "venueId": 3,
    "start": "2023-05-30T13:00:00.000Z",
    "end": "2023-05-30T15:00:00.000Z",
  }
]

# bookings table

```

```
          Artist creates row: REQUESTED
                      |
        ---------------------------------
        |                               |
venue declines: DECLINED      venue confirms: CONFIRMED
                                        |
                            ----------------------------
                            |                          |
                  venue cancels: REJECTED     artist cancels: CANCELED 
```