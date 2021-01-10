import express from 'express';

export default ExpressServer {
  constructor() {
    const app = express();
    let port = process.env.port || 3000;

    const server = app.listen(port, () => {
      console.log(`server on ${port}`);
    });
  };
};
