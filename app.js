const bodyParser = require('body-parser');
const express = require('express');


const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(8080,process.env.OPENSHIFT_NODEJS_IP || process.env.IP || '127.0.0.1', () => console.log('Express server is runnig at port no : 8080'));

app.get('/hi',(request, response)=>{
    response.send(`<p>hiiii</p>`)
});
