const express = require('express');
const app = module.exports = express();
const layouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(layouts);
app.use(routes);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port 3000 ${process.env.PORT || 3000}`);
});