import express from "express";
const router = express.Router();
import {getCard, newDeck} from "../controllers/cards.controllers.js";

router.route("/card/:deckId").get(getCard);
router.route("/deck").post(newDeck);

export default router;
