const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt=require('jsonwebtoken');

const prdRoute = require('./routes/router.product');
const userRoute=require('./routes/router.user');
const uaaMiddleware = require('./Jwt/UaaMiddleware');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '50mb',parameterLimit: 100000,extended : true}));

app.use(uaaMiddleware.authenticate);

app.use(prdRoute);
app.use(userRoute);

mongoose.connect('mongodb://localhost:27017/shiromeda', {            
    useNewUrlParser: true, useUnifiedTopology: true }) 
    .then(() => { 
        app.listen(8081, ()=>{
            console.log('server 8081 is start!! ');
        });
    }).catch(err => console.error(err));
