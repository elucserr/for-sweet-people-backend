# Project Name

## Instructions how to start

create `.env` file like the example `.env.sample`

start with `npm run start-dev`

**http://localhost:5000**

## Description

API destined for diabetic people with the intention of creating a daily record of glucose levels, administration of medications, daily activity and monitoring of diet.

## Motivation

Personal motivation, since I have diabetes and I know how difficult it is to keep good track of the different data. I would be very excited to use my own application.


## Backlog

Diet record: Able to connect own API an external API of food

Medication record: Able to connect own API an external API of medication


## ROUTES:

### Auth

| Method | Path      | description    | Body                            |
| :----: | --------- | -------------- | ------------------------------- |
|  GET   | `/whoami` | who am i       |                                 |
|  POST  | `/signup` | signup a user  | `{ username, password, email }` |
|  POST  | `/login`  | login a user   | `{ username, password }`        |
|  POST  | `/logout` | logout session |                                 |

### Endpoints

| Method | Path            | description      | Body                                                                         |
| :----: | --------------- | ---------------- | ---------------------------------------------------------------------------- |
|  GET   | `/404`          | error route      |                                                                              |
|  GET   | `/users/:id`    | get my profile   |                                                                              |
|  PUT   | `/users/:id`    | edit profile     | `{ username, password, email, dateofBirth, typeOfDiabetes, weight, height }` |
| DELETE | `/users/:id`    | delete a record  |                                                                              |
|  GET   | `/blood`        | list all records |                                                                              |
|  POST  | `/blood`        | create a record  | `{ date, time, level }`                                                      |
|  GET   | `/blood/:id`    | get a record     |                                                                              |
|  PUT   | `/blood/:id`    | update a record  | `{ date, time, level }`                                                      |
| DELETE | `/blood/:id`    | delete a record  |                                                                              |
|  GET   | `/activity`     | list all records |                                                                              |
|  POST  | `/activity`     | create a record  | `{ type, km, time }`                                                         |
|  GET   | `/activity/:id` | get a record     |                                                                              |
|  PUT   | `/activity/:id` | update a record  | `{ type, km, time }`                                                         |
| DELETE | `/activity/:id` | delete a record  |                                                                              |
|  GET   | `/medicine`     | list all records |                                                                              |
|  POST  | `/medicine`     | create a record  | `{ date, time, medicine }`                                                   |
|  GET   | `/medicine/:id` | get a record     |                                                                              |
|  PUT   | `/medicine/:id` | update a record  | `{ date, time, medicine }`                                                   |
| DELETE | `/medicine/:id` | delete a record  |                                                                              |
|  GET   | `/diet`         | list all records |                                                                              |
|  POST  | `/diet`         | create a record  | `{ date, timeOfDay, aliment }`                                               |
|  GET   | `/diet/:id`     | get a record     |                                                                              |
|  PUT   | `/diet/:id`     | update a record  | `{ date, timeOfDay, aliment }`                                               |
| DELETE | `/diet/:id`     | delete a record  |                                                                              |


## Models

User model

```javascript
{
	username: String
	password: String
	email: String
	dateOfBirth: Date
	typeOfDiabetes: enum [one, two, lada]
	weight: Number
	height: Number
}
```

Blood model

```javascript
{
	owner: ObjectId<User>
	date: Date
	time: String
	level: Number

}
```

Aliment model

```javascript
{
	owner: ObjectId<User>
	date: Date
	timeOfDay: enum [breakfast, brunch, lunch, snack, dinner]
	aliment: String


}
```

Activity model

```javascript
{
	owner: ObjectId<User>
	type: String
	km: Number
	time: String

}
```

Medicine model

```javascript
{
	owner: ObjectId<User>
	date: Date
	time: String
	medicine: String

}
```

## Links

### Trello

[Link to Trello](https://trello.com/b/WxBh6cxW)

### Git

The url to your repository and to your deployed project

[Repository Link](https://github.com/elucserr/for-sweet-people-backend)

[Linked to Frontend](https://github.com/elucserr/for-sweet-people-frontend)

### Deploy

[Deploy Link](https://api-forsweetpeople.herokuapp.com/)

### Slides

[Slides Link](https://slides.com/elenalucas/deck/fullscreen)
