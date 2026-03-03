const { json } = require('express');
const connection = require('../config/database')


const getHomepage = (req, res) => {

    return res.render('home.ejs')
}

const getABC = (req, res) => {
    res.send('check abc!')
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getABC, getHoiDanIT
}