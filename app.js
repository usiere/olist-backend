const express = require('express');
const mongoose = require('mongoose');
const orderRoutes =  require( './api/order-routes');
const sellerRoutes =  require( './api/seller-routes');


const app = express();


// DB Config
const db = require('./config/keys').MongoURI;



//Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true  })
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

// bodyparser
const bodyParser = require('body-parser');
 app.use(bodyParser.json({limit: '25mb'}));
app.use(bodyParser.urlencoded({limit: '25mb'}));

 // Configuring cors
 const cors = require("cors");
app.use(cors());
//Bodyparser
app.use(express.urlencoded( {extended: false}));

// linking to the routes file

app.use('', orderRoutes, sellerRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

