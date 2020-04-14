const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const jwt=require('jsonwebtoken');

const prdRoute = require('./routes/router.product');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(prdRoute);

mongoose.connect('mongodb://localhost:27017/shiromeda', { 
    useNewUrlParser: true, useUnifiedTopology: true }) 
    .then(() => { 
        app.listen(8081, ()=>{
            console.log('server 8081 is start!! ');
        });
    }).catch(err => console.error(err));



