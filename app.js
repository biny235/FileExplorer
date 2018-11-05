const express = require('express');
const app = express();

const bodyparser = require('body-parser')


const PORT = process.env.PORT || 3000;

app.use('/', require('./server'))



app.listen(PORT, ()=>{console.log(`listening on ${PORT}`)})