const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
    console.log('Connected to the database');

});


app.get('/user', (req, res) => {
    res.send("Welcome to Nameless");
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

