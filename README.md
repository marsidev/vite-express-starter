## Definition
This is a [React](https://github.com/facebook/react) fullstack starter project which uses [Vite](https://github.com/vitejs/vite) and [Express](https://github.com/expressjs/express) as the client and server respectively. Also uses [pnpm](https://pnpm.js.org/) as package manager.

## Getting Started
```bash
pnpm install
pnpm start
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can start editing the page by modifying `packages/client/src/App.jsx`.
A sample API route can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `packages/server/src/controllers/hello.js`.

## Packages
The following packages are used in this project:
- Server:
  - [express](https://github.com/expressjs/express)
  - [nodemon](https://github.com/remy/nodemon)
  - [dotenv](https://github.com/motdotla/dotenv)
  - [expressjs/cors](https://github.com/expressjs/cors)
  - [cross-env](https://github.com/kentcdodds/cross-env)
  - [morgan](https://github.com/expressjs/morgan)
 
- Client:
  - [vite](https://github.com/vitejs/vite)
  - [chakra-ui](https://github.com/chakra-ui/chakra-ui)
  - [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch)

## Deploy
This project can be deployed to [Heroku](https://www.heroku.com) or any other platform which support NodeJS apps, such as [Railway](https://railway.app).
On production, the main entry point is the server `index.js` which serves the client build using `express.static()`.

## Demo
[Heroku demo](https://vite-express-starter.herokuapp.com) <br />
[Railway demo](https://vite-express-starter-production.up.railway.app)