const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const admin = require('./routes/admin');
const shop = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(admin);
app.use(shop);

app.use((req, res, next) => {
    res.status(404).send('Page not found');
})

const server = http.createServer(app);
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
