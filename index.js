import express from "express";
import cors from "cors";
import cardsRouter from "./app/routes/cards.routes.js";


const app = express();

app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("static"));
app.use("/images", express.static("images"));

app.use(cardsRouter);

app.listen(8080, () => {
  console.log("Servidor iniciado na porta 8080");
});

export default app;
