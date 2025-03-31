const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static('public'));

const products = [
    {
        id: '0',
        title: 'livro',
        price: 12.9
    },
    {
        id: '1',
        title: 'fone',
        price: 200.99
    },
    {
        id: '2',
        title: 'mouse',
        price: 850.0
    }
]

app.get('/', (req, res) => {
    
    res.render('home', { products }) // leva para home os produtos dessa rota "/"
});


app.get('/product/:id', (req, res) => {
    const product = products[req.params.id];


    res.render('product', { product })
})
app.listen(3000);