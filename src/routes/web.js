const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World! &nodemon')
})

router.get('/abc', (req, res) => {
    res.send('check abc!')
})

router.get('/hoidanit', (req, res) => {
    // res.send('<h1>hoi dan it with hahoan</h1>')
    res.render('sample.ejs')
})

module.exports = router;
