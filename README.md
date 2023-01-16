
# Github Repositories Listing - Backend

An single page application (SPA) that takes a GitHub username as input and displays the public Github repositories belonging to the user.

## Demo 🚀

[![Live URL](https://img.shields.io/badge/%F0%9F%8C%90%20Live%20Demo-Click%20Here-blueviolet?style=for-the-badge)](https://github-repo-listing-backend.herokuapp.com/)



## Features

- Each endpoint has to **internally call Github’s APIs** to fetch the data required for the frontend application to work.
- All the endpoints are **GET APIs**.
- All inputs to the APIs are either **query parameters** or URL parameters
- Used **Mocha** and **Chai** for unit testing.
- For each of the endpoints, at least 2 **unit tests** are covered
    - 1 test to cover the success case - 200 HTTP status code
    - 1 test to cover the failure case - any 4xx HTTP status code
- Backend services running on **Heroku**


## Routes / API Reference

#### 1. Get User Data

```Fetch user data like(name, avatar, location, bio, Twitter  ,etc.) from Github API```

```http
  GET /api/user
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. github username to fetch data |

returns status code : `200` => if username is correct

returns status code : `404` => if username is incorrect

#### 2. Get User Repositories

```Fetch user repositories from Github API```
```http
  GET /api/repos
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username` | `string` | **required** github username to fetch data  |
| `per_page`      | `number` | use for pagination |
| `page`      | `number` | use for pagination |

returns status code : `200` => if username is correct and respository data is fetched

returns status code : `404` => if username is incorrect


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`IP`


## Tech Stack

**Client:** Angular 10+ , Bootstrap

**Server:** Node.js, Express.js , Mocha ,Chai ,REST APIs

**Tools:** Postman , Netlify , Heroku , Github , VSCode


## Installation

- Make sure you have Node.js installed on your machine. You can download them from the official website.

## Run Locally



Clone the project

```bash
  git clone https://github.com/KshitijDarekar/github-repo-listing-backend.git
```

Go to the project directory

```bash
  cd github-repo-listing-backend
```

Install dependencies

```bash
  npm install
```

Start a local development server

```bash
  npm run dev
```
Open a web browser and navigate to http://localhost:3000/. The Angular application should now be running locally


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Related Frontend Repository

This is the backend repository of the project.

Here is the link to the backend repository

👉 [Frontend Repository](https://github.com/KshitijDarekar/github-repo-listing-frontend)


## Acknowledgements

 - [REST API](https://docs.github.com/en/rest?apiVersion=2022-11-28)
 
