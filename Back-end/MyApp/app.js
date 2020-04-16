const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt=require('jsonwebtoken');
//const session=require('express-session');
//const MongoDBStore = require('connect-mongo')(session);
const prdRoute = require('./routes/router.product');
const userRoute=require('./routes/router.user');
const uaaMiddleware = require('./Jwt/UaaMiddleware');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '50mb',parameterLimit: 100000,extended : true}));

// app.use(
//   session({
//     secret: 'my secret',
//     resave: false,
//     saveUninitialized: false,
//     store: store
//   })
// )
app.use(uaaMiddleware.authenticate);

app.use(prdRoute);
app.use(userRoute);

// const store=new MONGODB_URL({
//   uri:process.env.MONGODB_URL,
//   collection:'sessions'
// });
const MONGO_URL=`mongodb+srv://seble:<password>@cluster0-ehp1r.mongodb.net/test?retryWrites=true&w=majority`
// const MONGODB_URL=`mongodb+srv://${process.env.MONGO_USER}:${
// process.env.MONGO_PWD}@cluster0-oxo7g.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
app.listen(process.env.PORT || 8081);
}).catch(err=>console.log(err));


// mongoose.connect('mongodb://localhost:27017/shiromeda', {            
//     useNewUrlParser: true, useUnifiedTopology: true }) 
//     .then(() => { 
//         app.listen(8080, ()=>{
//             console.log('server 8081 is start!! ');
//         });
//     }).catch(err => console.error(err));
