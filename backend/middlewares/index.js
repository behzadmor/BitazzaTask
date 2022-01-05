// * general middlewares that run on all requests

const { Router } = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const middlewareRouter = Router();
middlewareRouter
  .use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json());

module.exports = middlewareRouter;
