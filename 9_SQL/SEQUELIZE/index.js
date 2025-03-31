const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const conn = require('./db/conn')

const User = require('./models/User')
const Address = require('./models/Address')

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.get("/users/create", (req, res) => {
  res.render("adduser");
});

app.post("/users/update", async (req, res) => {
  const id = req.body.id; // update atualiza o id do corpo do form
  const name = req.body.name;
  const occupation = req.body.occupation;
  let newsletter = req.body.newsletter;

  if (newsletter === "on") {
    newsletter = true;
  } else {
    newsletter = false;
  }

  const userData = {
    name,
    occupation,
    newsletter,
  };

  await User.update(userData, { where: { id: id } });

  res.redirect("/");
});

app.post("/users/create", async (req, res) => {
  const name = req.body.name;
  const occupation = req.body.occupation;
  let newsletter = req.body.newsletter;

  // Se o campo 'newsletter' não for enviado, defina como false
  newsletter = newsletter === "on";

  try {
    await User.create({ name, occupation, newsletter });
    res.redirect("/");
  } catch (err) {
    console.error("Erro ao criar usuário:", err);
    res.status(500).send("Erro ao criar usuário.");
  }
});

app.post("/users/delete/:id", async (req, res) => {
  const id = req.params.id;

  await User.destroy({ raw: true, where: { id: id } });

  res.redirect("/");
});

app.get("/users/edit/:id", async (req, res) => {
  const id = req.params.id; // É usado para acessar os parâmetros enviados na URL da requisição em GET ou Delete

  const user = await User.findOne({ include: Address, where: { id: id } });

  res.render("useredit", { user: user.get({ plain: true }) }); // pega a tabela
});

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;

  const user = await User.findOne({ raw: true, where: { id: id } });

  res.render("userview", { user });
});

app.get("/", async (req, res) => {
  const users = await User.findAll({ raw: true });

  console.log(users);

  res.render("home", { users: users });
});

app.post('/address/create', async (req, res) => {

  const UserId = req.body.UserId;
  const street = req.body.street;
  const number = req.body.number;
  const city = req.body.city;

  const address = {
    UserId,
    street,
    number,
    city,
  }
  

  await Address.create(address)

  res.redirect(`/users/edit/${UserId}`);


})

conn.sync().then(() => { app.listen(3000) }).catch((err) => console.log(err));
