const express = require('express');
const app = express();
require('dotenv').config()
const dbconfig = require("./config/abconfig")
console.log(process.env.MONGO_URL)
const port = process.env.PORT || 3000;
app.listen(port, () => 
    console.log(`node server.js started at port ${port}`)
  );
