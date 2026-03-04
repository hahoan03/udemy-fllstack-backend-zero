const { json } = require('express');
const connection = require('../config/database')
const { getAllUsers } = require('../services/CRUDService')

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results })
}

const getABC = (req, res) => {
    res.send('check abc!')
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    //hoặc viết let {email, name, city} = req.body thay cho 3 dòng trên
    console.log(">>> email: ", email, " name= ", name, ' city= ', city);

    let [results, fields] = await connection.query(
        `INSERT INTO   
            Users(email, name, city)
            VALUES(?, ?, ?)`,
        [email, name, city]
    );

    //console.log(">>>> check results: ", results)
    res.send("create user succeed")

}


const getCreatePage = (req, res) => {
    res.render('create.ejs');
}


module.exports = {
    getHomepage, getABC, getHoiDanIT, postCreateUser,
    getCreatePage
}