const express = require("express");
const cors = require("cors");
const cardsRouter = require("./app/routes/cards.routes");

const app = express();

app.use(cardsRouter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(8080, () => {
  console.log("Servidor iniciado na porta 8080");
});

module.exports = app;
