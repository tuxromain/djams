const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const ejs = require('ejs');

const instruments = require('./routes/api/instruments');
const styles = require('./routes/api/styles');

const app = express();

//USES
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist/public/'));

//SETS
app.set('view engine', 'ejs');

//CONNECT TO DB
const db = require('./config/keys').mongoURI;
mongoose.connect(db)
    .then(() => { console.log(`SUCCESS : Connected to djams database.`) })
    .catch(err => { console.log(`FAILURE : Something wrong happened, can't connect to djams database. Error : ${err}`) });

//API ROUTES
app.use('/b1xve8u1N5CLPs7A0yTkK5W4/api/instruments', instruments);
app.use('/b1xve8u1N5CLPs7A0yTkK5W4/api/styles', styles);

//ROUTES
app.get('/', (req,res) => {
    res.render('dist/index', (err, data) => {
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