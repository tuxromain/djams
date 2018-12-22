const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const instruments = require('./routes/api/instruments');
const styles = require('./routes/api/styles');

const app = express();

//USE CORS
app.use(cors());

//USE PARSER FOR JSON
app.use(bodyParser.json());


//CONNECT TO DB
const db = require('./config/keys').mongoURI;
mongoose.connect(db)
    .then(() => { console.log(`SUCCESS : Connected to djams database.`) })
    .catch(err => { console.log(`FAILURE : Something wrong happened, can't connect to djams database. Error : ${err}`) });

//USE ROUTES
app.use('/api/instruments', instruments);
app.use('/api/styles', styles);

//LAUNCH APP
const port = process.env.PORT || 4000;
app.listen(port, () => { console.log(`App is running on port ${port}`) });