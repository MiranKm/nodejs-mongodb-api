const bodyParser = require('body-parser');
const express = require('express');
const mongodbClient = require('mongodb').MongoClient ;
const url = require('./url');


const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true , useNewUrlParser: true}));


app.listen(8080,process.env.OPENSHIFT_NODEJS_IP || process.env.IP || '127.0.0.1', () => console.log('Express server is runnig at port no : 8080'));


mongodbClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
  });


app.get('/hi',(request, response)=>{
    response.send(`<p>hiiii</p>`)
});
