const express = require("express");
const router = require("./routers");
const basicErrorHendler = require('./middlewares/errors/basic');
const tokenErrorHendler = require('./middlewares/errors/token')
const cors = require('cors');

const app = express();

// app.use(cors());
app.use(cors({
  origin: "*"
}));
// app.use(cors({
//   origin: 'https://game-store-mern.vercel.app/',  // Replace with your frontend's URL
//   methods: 'GET,POST,PUT,DELETE', // You can customize the methods allowed
//   credentials: true  // If you're using cookies or auth tokens that need credentials
// }));

app.use(express.json());
app.use(router);
app.use(basicErrorHendler);
app.use(tokenErrorHendler);

app.get('/', (_req, res) => {
  res.json("Hello")
})

module.exports = app;
