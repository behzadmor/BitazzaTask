/**
 * @description Configure everything that has to do with Express application.
 */
const express = require("express");
const serveStatic = require("serve-static");

/** @class Configuring and running an Express Server. */
class Server {
  /**
   * @description Configuring server
   * @param {number} port
   */
  constructor(port, middlewaresRouter, apiRouter) {
    this.port = port;
    this.express = express();
    // ? this.express.disable('x-powered-by');
    this.express.use(middlewaresRouter);
    this.express.use(apiRouter);
    this.express.use(serveStatic("dist")); // * place react dist files after building react project

    // Fake Login for test
    // this.express.use('/login', (req, res) => {
    //   res.send({
    //     token: 'test123'
    //   });
    // });
  }

  /**
   * @description starts a web server on the specified port
   */
  start() {
    this.express.listen(this.port, () =>
      console.log(`The Express Server is running on port number ${this.port}`)
    );
    this.express.get("/ping", (req, res) => res.send("pong")); // just for testing if express server is running
  }
}

module.exports = Server;
