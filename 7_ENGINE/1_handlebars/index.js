const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
})

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static('public'))

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: 'Aprender js',
            category: 'javascript',
            body: 'teste',
            comments: 4
        },
        {
            title: 'Aprender PHP',
            category: 'php',
            body: 'teste',
            comments: 5
        },
        {
            title: 'Aprender node',
            category: 'node js',
            body: 'teste',
            comments: 2
        }
    ]

    res.render('blog', { posts });
})


app.get('/dashboard', (req, res) => {


    const items = ['item a', 'item b', 'item c'];


    res.render("dashboard", { items }) // enviar pro front
})

app.get('/post', (req, res) => {
    const post = { 
        title: 'Aprender Node.js',
        categoria: 'Javascript',
        body: 'Este artigo vai te ajudar a aprender Node.js',
        comments: 4
    }

    res.render('blogpost', { post })
})

app.get('/', (req, res) => {

    const user = {
        name: "Thiago",
        age: "20",
        surname: "Sampaio"
    }

    const auth = false;

    const approved = true;


    res.render("home", { user: user, auth, approved });
});

app.listen(3000, () =>{
    console.log("Rodando na porta 3000");
});