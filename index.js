const port = process.env.PORT || 3100;

const express = require('express');

// custom modules/functions defined in other files can be declared here;
const {connectToDB, addUser, checkUser,
    getProduct, getProducts} = require('./utils/database');

const app = express();

// for any routes that need to parse JSON into objects:
app.use(express.json());

const db = connectToDB();

// HOME
app.get('/', (req, res) => {
    res.send('<p>Hello</p>');
});

// LOGIN
app.get('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    res.send(checkUser(db, username, password));
});

// REGISTER
app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    res.send(addUser(db, username, password));
});

// PRODUCT GALLERY
app.get('/products', (req, res) => {
    ;
});

// PRODUCT DETAILS
app.get('/products/:id', (req, res) => {
    const id = req.params.id;
});

// CATEGORY
app.get('/category/:category', (req, res) => {
    const category = req.params.category;
});

// SEARCH
app.get('/search', (req, res) => {
    const terms = req.query.search;
});

// CART
app.get('/cart', (req, res) => {
    ;
});

// WISHLIST
app.get('/wishlist', (req, res) => {
    ;
});

// ACCOUNT
app.get('/account', (req, res) => {
    ;
});

// ORDERS
app.get('/orders', (req, res) => {
    ;
});

// ORDER DETAILS
app.get('/orders/:id', (req, res) => {
    const id = req.params.id;
});

// CONTACT US
app.get('/contact-us', (req, res) => {
    ;
});

// Add other routes/methods here.

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});