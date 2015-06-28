var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

// SET HANDLEBARS AS LAYOUT ENGINE
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// PAGES
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

// GET TEST PRODUCT PAGE
app.get('/test-product', function (req, res) {
    res.render('test-product', {layout: 'product'});
});

// END PAGES

app.listen(3000);
app.use(express.static('public'));
console.log('MASSIVE LOL');
var product = {
    name: "Test Product"
};
console.log(product.name);
/*function productName(){
    document.getElementById("productTitle").innerHTML = product.name;
};*/