import express from "express";
import cors from "cors";
import cardsRouter from "./app/routes/cards.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("static"));

app.use(cardsRouter);

app.listen(8080, () => {
  console.log("Servidor iniciado na porta 8080");
});

export default app;
