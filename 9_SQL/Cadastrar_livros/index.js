const express = require("express");
const exphbs = require("express-handlebars");
const pool = require('./db/conn')

const app = express();

app.engine("handlebars", exphbs.engine());

app.set("view engine", "handlebars");

app.use(express.static("public"));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {  // voltar URL  view home
  res.render("home");
});

app.get("/books", (req, res) => {   //exibir os livros na view books URL

  const sql = "SELECT * FROM books";

  pool.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    const books = data;

    console.log(books);

    res.render("books", { books });
  });
});

app.get("/books/edit/:id", (req, res) => {   // editar os livros pelo ID
  const id = req.params.id;

  const sql = `SELECT * FROM books WHERE ?? = ?`;
  const data = ['id', id]

  pool.query(sql, data, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }

    const book = data[0];

    res.render("editbook", { book });
  });
});

app.post("/books/insertbook", (req, res) => { // inserir os livros pegando do body deste URL
  
  const title = req.body.title;
  const pageqty = req.body.pageqty;

  const sql = `INSERT INTO books (title, pageqty) VALUES (?, ?)`;
  const data = [title, pageqty];

  pool.query(sql, data, (err) => {
    if (err) {
      console.log(err);
      return;
    }

    res.redirect("/books");
  });
});

app.get("/books/:id", (req, res) => {    // encontrar os livros pelo ID
  const id = req.params.id;

  const sql = `SELECT * FROM books WHERE id = ?`;
  const data = [id];

  pool.query(sql, data, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    const book = data[0];

    res.render("book", { book });
  });
});

app.post('/books/updatebook', (req, res) => { // atualizar livro e voltar para /books

    const id = req.body.id
    const title = req.body.title
    const pageqty = req.body.pageqty

    const sql = `UPDATE books SET title = ?, pageqty = ? WHERE id = ?`
    const data = [title, pageqty, id]
    pool.query(sql, data, (err) => {
        if(err) {
            console.log(err)
            return
        }

        res.redirect('/books')
    })

})

app.post('/books/remove/:id', (req, res) => {

    const id = req.params.id;
    const sql = `DELETE FROM books WHERE id = ?`
    const data = [id];

    pool.query(sql, data, (err) => {
        if(err){
            console.log(err)
            return
        }

        res.redirect('/books')
    })

})

app.listen(3000);