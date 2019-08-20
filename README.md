# README

## Local Dev Instructions

Instructions assume `yarn` is available on local machine. Please either install globally or substitute `npx yarn`.

  * Install dependencies with `yarn install`
  * Run frontend with `yarn dev` or `npm run dev`
  * Run backend with  `yarn backend` or `npm run backend`

## Important Environment Variables

For ease of use/deployment locally and remotely, important attributes (MongoDB connection string, frontend and backend port numbers, etc) are read from environment variables. Change these ones to change app behavior:

  * `MONGO_URL` - Connection string for mongo server (default 'mongodb://localhost:27017')
  * `DATABASE` - Name of database in mongo server (default 'development')
  * `BACKEND_PORT` - Port selected for use by the backend server
  * `REACT_APP_BACKEND_URL` - URL used, in the frontend, to refer to the backend server

## Deployment Instructions

  * Add Heroku app as git remote
  * Set appropriate env variables in Heroku app
  * `git push heroku master`

That should be it, hopefully.

## TODOs
  * Lock down match and reaction schema, write actual types and validation for it on server and client.
  * Genuine auth, with sound, revokable tokens enforced server-side. 