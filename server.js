const express = require('express');
const db = require('./db');
const app = express();

const Person = require('./models/Person');
 
app.get('/', function (req, res) {
  res.send('Hello World')
})


app.listen(3000 , ()=>{
    console.log("server is listening on port 3000")
})