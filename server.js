var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;
mongoose.connect(db)
    .then(() => { console.log(`SUCCESS : Connected to djams database.`) })
    .catch(err => { console.log(`FAILURE : Something wrong happened, can't connect to djams database. Error : ${err}`) });

const port = process.env.PORT || 4000;
app.listen(port, () => { console.log(`App is running on port ${port}`) });