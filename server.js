const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const admin = require('./routes/admin');
const shop = require('./routes/shop');

const errorControllers = require('./controllers/error');

app.set('view engine', 'ejs');
app.set('views', 'views'); //tell express where to look for the view template file;

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',admin);
app.use(shop);

app.use(errorControllers.get404error);

const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`)
})
