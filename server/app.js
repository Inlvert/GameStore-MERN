const express = require("express");
const router = require("./routers");
const basicErrorHendler = require('./middlewares/errors/basic');
const tokenErrorHendler = require('./middlewares/errors/token')

const app = express();

app.use(express.json());
app.use(router);
app.use(basicErrorHendler);
app.use(tokenErrorHendler);

module.exports = app;
