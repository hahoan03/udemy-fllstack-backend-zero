const express = require('express')
const path = require('path');
require('dotenv').config();

//console.log(">> check env:", process.env);

const app = express()
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME;


//config template engine
app.set('views', path.join(__dirname, 'view'))
app.set('view engine', 'ejs')

//config static files
app.use(express.static(path.join(__dirname, 'public')))


//Khai bao route
app.get('/', (req, res) => {
    res.send('Hello World! &nodemon')
})

app.get('/abc', (req, res) => {
    res.send('check abc!')
})

app.get('/hoidanit', (req, res) => {
    // res.send('<h1>hoi dan it with hahoan</h1>')
    res.render('sample.ejs')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
