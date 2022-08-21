import express from "express";
const router = express.Router();
import {
  deleteDeck,
  getCard,
  newDeck,
} from "../controllers/cards.controllers.js";

router.route("/card/:deckId").get(getCard);
router.route("/deck").post(newDeck);
router.route("/deck/:deckId").delete(deleteDeck);

export default router;
