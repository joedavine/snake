var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// GET HOME PAGE
app.get('/', function (req, res) {
    res.render('home', {layout: 'main'});
});
// GET ADMIN PAGE
app.get('/admin', function (req, res) {
    res.render('admin', {layout: 'adminpanel'});
});

// GET LOGIN PAGE
app.get('/login', function (req, res) {
    res.render('login', {layout: 'main'});
});

app.listen(3000);

app.use(express.static('public'));


