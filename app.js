const express = require('express');
const { router } = require('./router');

const app = express();

app.use(express.json());

app.use('/', router);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: err.message });
});

// app.use("/", (req, res, next) => {
//   console.log("Hello from middleware!!!");
//   next();
// });

// app.use("/", (req, res, next) => {
//   console.log("Hello from middleware 2");
// });

console.log();

module.exports = { app };
