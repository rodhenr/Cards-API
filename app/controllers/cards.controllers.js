const getCard = (req, res) => {
  const { deckId } = req.body;

  const newDeck = "";
  const newCard = "";

  res.json({ newDeck, newCard });
};

module.exports = { getCard };

// uma API que possui SVGs das cartas de baralho
// retorna uma carta por vez
// retorna um baralho todo um por vez
// tem de ser capaz de começar uma nova geração ou continuar uma anterior
