import express from 'express';
import router from './routes/index.js';
import morgan from './middlewares/morgan.js';
import cors from 'cors';
import path from 'path';

class ExpressServer {
  constructor(port, app) {
    this.port = port;
    this.app = app;
  }
  setUpMiddlewares() {
    const __dirname = path.resolve();
    this.app.use(express.static(path.join(__dirname, 'public')));
    this.app.use(morgan);
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(router);
    this.app.use((req, res, next) => {
      res.status(404).send('Not found');
    });
    this.app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send('Internal server error');
    });
  }
  listen() {
    this.app.listen(this.port, (err) => {
      if (err) {
        console.error(err);
        reutnr;
      }

      console.log(`🚀 Express Server ready at ${port}`);
    });
  }
}

const port = process.env.EXPRESS_PORT || 3000;
const expressServer = new ExpressServer(port, express());

expressServer.listen();
expressServer.setUpMiddlewares();

export default expressServer;
