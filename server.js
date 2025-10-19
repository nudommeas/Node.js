const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const admin = require('./routes/admin');
const shop = require('./routes/shop');

app.set('view engine', 'pug');
app.set('views', 'views'); //tell express where to look for the view template file;

app.use(bodyParser.urlencoded({extended: false}));

app.use(admin.routes);
app.use(shop);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    next();
})

app.listen(3000);
