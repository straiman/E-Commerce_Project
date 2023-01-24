const mysql = require('mysql');
const bcrypt = require('bcrypt');
const saltRounds = 10;

function connectToDB() {
    const db = mysql.createConnection({
        user: 'root',
        host: 'localhost',
        password: '',
        database: 'ecommerce',
    });
    return db;
}

function addUser(db, username, password) {
    bcrypt.hash(password, saltRounds, (encryptErr, hashedPassword) => {
        if (encryptErr) {
            console.log(encryptErr);
        }
        db.query(
            "INSERT INTO users (username, password) VALUES (?, ?)",
            [username, hashedPassword],
            (dbErr, result) => {
                console.log(dbErr);
                // return result;
            }
        );
    });
}

function checkUser(db, username, password) {
    db.query(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username, password],
        (err, result) => {
            if (err) {
                return { error: err };
            }
            if (result.length > 0) {
                return result;
            }
            return { message: 'Wrong username and/or password' };
        }
    );
}

function getProduct(id) {
    ;
}

function getProducts() {
    ;
}

module.exports = {
    connectToDB,
    addUser,
    checkUser,
    getProduct,
    getProducts
}