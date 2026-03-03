require('dotenv').config();
const express = require('express');
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');


const app = express()
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME;


//config template engine
configViewEngine(app);


//Khai bao route
app.use('/test', webRoutes);

//test connection


// A simple SELECT query
connection.query(
    'select * from Users u',
    function (err, results, fields) {
        console.log('>>>results=', results); // results contains rows returned by server
    }
);


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
