import decksDB from "../decksDB.js";
import cardsInfo from "../cardsInfo.js";
import { nanoid } from "nanoid";

export const getCard = (req, res) => {
  const { deckId } = req.params;

  const deck = decksDB.filter((i) => {
    return i.deckId === deckId;
  })[0];
  if (!deck) return res.json({ data: { error: "Deck não encontrado!" } });

  if (deck.cards.length === 0)
    return res.json({ data: { error: "Fim do baralho" } });

  const newCard = deck.cards.shift();
  deck.remaining -= 1;
  const infoNewCard = cardsInfo.filter((i) => i.code === newCard)[0];

  res.json({
    data: { card: infoNewCard, deckId, remaining: deck.remaining },
  });
};

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

  res.json({
    data: { deckId: newDeck.deckId },
  });
};
