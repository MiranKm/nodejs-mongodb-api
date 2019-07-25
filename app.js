const bodyParser = require('body-parser');
const express = require('express');
const keys = require('./config/keys');
const expressLayout= require("express-ejs-layouts")
const mongoose = require('mongoose');
const app = express()

app.use(expressLayout);
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true , useNewUrlParser: true}));


app.listen(8080,process.env.OPENSHIFT_NODEJS_IP || process.env.IP || '127.0.0.1', () => console.log('Express server is runnig at port no : 8080'));

app.use('/', require('./routes/index'))
app.use('/user', require('./routes/users'))


mongoose.connect(keys.MongoURL,{ useNewUrlParser: true },(error,db )=>{
    if (error) throw error;
    console.log("connected");

    db.close();
})


app.get('/hi',(request, response)=>{
    response.send(`<p>hiiii</p>`)
});


