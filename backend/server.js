/**
 * @description Responsible for  starting the API Server.
*/
require('dotenv').config({ path: './config/config.env' });

const Server = require('./expressAppCreator'); //* Create an API Server
const middlewares = require('./middlewares'); //* middleware initialization
const apiRouter = require('./routes'); //* api servies routes

const { PORT } = process.env;

const HttpServer = new Server(Number(PORT), middlewares, apiRouter);
HttpServer.start();
