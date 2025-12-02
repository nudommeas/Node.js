const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const admin = require('./routes/admin');
const shop = require('./routes/shop');

app.set('view engine', 'ejs');
app.set('views', 'views'); //tell express where to look for the view template file;

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',admin.routes);
app.use(shop);

app.use((req, res, next) => {
    res.status(404).render('404');
    
})

const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`)
})
