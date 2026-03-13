const { json } = require('express');
const connection = require('../config/database')
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../services/CRUDService')

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
    res.send("create user succeed !")

}


const getCreatePage = (req, res) => {
    res.render('create.ejs');
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let [results, fields] = await connection.query('select * from Users where id = ?', [userId]);

    let user = results && results.length > 0 ? results[0] : {};
    res.render('edit.ejs', { userEdit: user });
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let userId = req.body.userId;

    //hoặc viết let {email, name, city} = req.body thay cho 3 dòng trên
    //console.log(">>> email: ", email, " name= ", name, ' city= ', city);
    await updateUserById(email, city, name, userId);

    //console.log(">>>> check results: ", results)
    //res.send("update user succeed !");
    res.redirect('/');

}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let [results, fields] = await connection.query('select * from Users where id = ?', [userId]);

    let user = results && results.length > 0 ? results[0] : {};
    //res.send("delete user succeed !");
    res.render("delete.ejs", { userEdit: user });
}

const postHandleRemoveUser = async (req, res) => {
    const id = req.body.userId;
    await deleteUserById(id);
    res.redirect('/');
}


module.exports = {
    getHomepage, getABC, getHoiDanIT, postCreateUser,
    getCreatePage, getUpdatePage, postUpdateUser,
    postDeleteUser, postHandleRemoveUser
}