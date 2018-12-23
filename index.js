const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

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
app.use('/b1xve8u1N5CLPs7A0yTkK5W4/api/instruments', instruments);
app.use('/b1xve8u1N5CLPs7A0yTkK5W4/api/styles', styles);

//SET CLIENT
app.use(express.static(__dirname + '/client'));
app.get('/', (req,res) => {
    res.render('', (err, data) => {
        if(err){
            res.status(404).write('File not found !');
        }else{
            res.send(data);
        }
    });
})

//LAUNCH APP
let port = process.env.PORT;
if(port == null || port == "")
    port = 4000;
app.listen(port);