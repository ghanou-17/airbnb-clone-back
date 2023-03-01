const bodyParser = require('body-parser');
const express = require ('express');
const mongoose = require('mongoose')
require('dotenv').config()
console.log(process.env.MONGODB_USER)
const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`;
// "mongodb+srv://admin:admin@cluster0.ivmkads.mongodb.net/?retryWrites=true&w=majority"
const user = require('./models/user.model');
const bcrypt = require('bcrypt');
const Port = 4000 ;

const app = express();
const apiRouter = require('./routes');; 

const cors = require('cors');
const postcssConfig = require('../ynovgh/postcss.config');
app.use(cors());
const errorHandler = require('./Middleware/errorHandler');
app.use(bodyParser.json());

mongoose.set('strictQuery', false);
mongoose.connect(uri)
.then(() =>{
    console.log('sucessfully connected')
})
.catch(err=>console.log(err))

app.use('/api/v1/',apiRouter);
app.use(errorHandler);

app.listen(process.env .PORT, function (){
    console.log('server launch');
});


