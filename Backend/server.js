require("dotenv").config()
const express = require('express');
const app = express();
const port = 3001;

app.get('/ping', (req,res) => {
  res.send('Pong!');
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
