const express = require('express');
const app = express();
const mongoose = require('mongoose'); 
require('dotenv/config');
const bodyParser = require('body-parser'); 
//const cors = require('cors'); 


//middleware
app.use(bodyParser.json());
//app.use(cors());


//import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute)
//ROUTES

app.get('/',(req,res)=> {
    res.send('We are on home')
}); 

// how do we start listening to the server?

// connect to db
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true }, ()=>{
    console.log('Connected to DB!');
}); 


app.listen(3000); 