const express = require('express')

const connectDB = require('../db');
const config = require('./config');
const { configureRouter } = require('./router');

const port = config.PORT;

const app = express();

connectDB();

app.use(express.json());

configureRouter(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

