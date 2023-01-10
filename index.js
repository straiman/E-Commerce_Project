const port = process.env.PORT || 3100;

const express = require('express');

// custom modules/functions defined in other files can be declared here;

const app = express();

app.get('/', (req, res) => {
    res.send('<p>Hello</p>');
});

// Add other routes/methods here.

// remember to put app.use(express.json());
// before any routes that need to parse JSON into objects

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});