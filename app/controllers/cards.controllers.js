import decksDB from "../decksDB.js";
import cardsInfo from "../cardsInfo.js";
import { nanoid } from "nanoid";

export const newDeck = (req, res) => {
  const cards = cardsInfo.map((i) => {
    return i.code;
  });

  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  const newDeck = { deckId: nanoid(8), cards, remaining: cards.length };

  decksDB.push(newDeck);

  res.status(200).json({ deckId: newDeck.deckId });
};

export const getCard = (req, res) => {
  const { deckId } = req.params;

  const deck = decksDB.filter((i) => {
    return i.deckId === deckId;
  })[0];
  if (!deck) return res.status(400).json({ error: "Deck não encontrado!" });

  if (deck.cards.length === 0)
    return res.status(200).json({ error: "Fim do baralho" });

  decksDB.forEach((i) => {
    if (i.deckId === deckId) {
      i.cards.shift();
      i.remaining -= 1;
    }
  });
  
  const newCard = deck.cards.shift();
  deck.remaining -= 1;
  const infoNewCard = cardsInfo.filter((i) => i.code === newCard)[0];

  res.status(200).json({
    card: infoNewCard,
    deckId,
    remaining: deck.remaining,
  });
};

export const deleteDeck = (req, res) => {
  const { deckId } = req.params;

  if (decksDB.length === 0) return res.sendStatus(400);

  const index = decksDB.findIndex((i) => i.deckId === deckId);
  if (index === -1) return res.sendStatus(400);

  decksDB.splice(index, 1);

  res.sendStatus(200);
};
