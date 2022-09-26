const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoute = require('./api/Routes/user')
const uploadRoute = require('./api/Routes/upload');
const xlstojson = require('./api/Routes/xlstojson');




mongoose.connect('mongodb+srv://root:root@cluster0.9zfghm1.mongodb.net/?retryWrites=true&w=majority');

mongoose.connection.on('error',err=>{
    console.log('Not connected with database')
})

mongoose.connection.on('connected',connected=>{
    console.log('Connection to Trading technology Database done')
})
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());
app.use('/user',userRoute)
app.use('/upload',uploadRoute);
app.use('/filejson',xlstojson)


app.use((req,res,next)=>
{
    var port = "3000";
    res.status(200).json({
        msg:"App is running on${port}"
    })
})

module.exports = app;