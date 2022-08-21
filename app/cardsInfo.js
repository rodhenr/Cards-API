const cards = [
  {
    code: "AC",
    image: "http://localhost:8080/images/ace_of_clubs.png",
    value: 1,
  },
  {
    code: "AD",
    image: "http://localhost:8080/images/ace_of_diamonds.png",
    value: 1,
  },
  {
    code: "AH",
    image: "http://localhost:8080/images/ace_of_hearts.png",
    value: 1,
  },
  {
    code: "AS",
    image: "http://localhost:8080/images/ace_of_spades.png",
    value: 1,
  },

  {
    code: "2C",
    image: "http://localhost:8080/images/2_of_clubs.png",
    value: 2,
  },
  {
    code: "2D",
    image: "http://localhost:8080/images/2_of_diamonds.png",
    value: 2,
  },
  {
    code: "2H",
    image: "http://localhost:8080/images/2_of_hearts.png",
    value: 2,
  },
  {
    code: "2S",
    image: "http://localhost:8080/images/2_of_spades.png",
    value: 2,
  },

  {
    code: "3C",
    image: "http://localhost:8080/images/3_of_clubs.png",
    value: 3,
  },
  {
    code: "3D",
    image: "http://localhost:8080/images/3_of_diamonds.png",
    value: 3,
  },
  {
    code: "3H",
    image: "http://localhost:8080/images/3_of_hearts.png",
    value: 3,
  },
  {
    code: "3S",
    image: "http://localhost:8080/images/3_of_spades.png",
    value: 3,
  },

  {
    code: "4C",
    image: "http://localhost:8080/images/4_of_clubs.png",
    value: 4,
  },
  {
    code: "4D",
    image: "http://localhost:8080/images/4_of_diamonds.png",
    value: 4,
  },
  {
    code: "4H",
    image: "http://localhost:8080/images/4_of_hearts.png",
    value: 4,
  },
  {
    code: "4S",
    image: "http://localhost:8080/images/4_of_spades.png",
    value: 4,
  },

  {
    code: "5C",
    image: "http://localhost:8080/images/5_of_clubs.png",
    value: 5,
  },
  {
    code: "5D",
    image: "http://localhost:8080/images/5_of_diamonds.png",
    value: 5,
  },
  {
    code: "5H",
    image: "http://localhost:8080/images/5_of_hearts.png",
    value: 5,
  },
  {
    code: "5S",
    image: "http://localhost:8080/images/5_of_spades.png",
    value: 5,
  },

  {
    code: "6C",
    image: "http://localhost:8080/images/6_of_clubs.png",
    value: 6,
  },
  {
    code: "6D",
    image: "http://localhost:8080/images/6_of_diamonds.png",
    value: 6,
  },
  {
    code: "6H",
    image: "http://localhost:8080/images/6_of_hearts.png",
    value: 6,
  },
  {
    code: "6S",
    image: "http://localhost:8080/images/6_of_spades.png",
    value: 6,
  },

  {
    code: "7C",
    image: "http://localhost:8080/images/7_of_clubs.png",
    value: 7,
  },
  {
    code: "7D",
    image: "http://localhost:8080/images/7_of_diamonds.png",
    value: 7,
  },
  {
    code: "7H",
    image: "http://localhost:8080/images/7_of_hearts.png",
    value: 7,
  },
  {
    code: "7S",
    image: "http://localhost:8080/images/7_of_spades.png",
    value: 7,
  },

  {
    code: "8C",
    image: "http://localhost:8080/images/8_of_clubs.png",
    value: 8,
  },
  {
    code: "8D",
    image: "http://localhost:8080/images/8_of_diamonds.png",
    value: 8,
  },
  {
    code: "8H",
    image: "http://localhost:8080/images/8_of_hearts.png",
    value: 8,
  },
  {
    code: "8S",
    image: "http://localhost:8080/images/8_of_spades.png",
    value: 8,
  },

  {
    code: "9C",
    image: "http://localhost:8080/images/9_of_clubs.png",
    value: 9,
  },
  {
    code: "9D",
    image: "http://localhost:8080/images/9_of_diamonds.png",
    value: 9,
  },
  {
    code: "9H",
    image: "http://localhost:8080/images/9_of_hearts.png",
    value: 9,
  },
  {
    code: "9S",
    image: "http://localhost:8080/images/9_of_spades.png",
    value: 9,
  },

  {
    code: "10C",
    image: "http://localhost:8080/images/10_of_clubs.png",
    value: 10,
  },
  {
    code: "10D",
    image: "http://localhost:8080/images/10_of_diamonds.png",
    value: 10,
  },
  {
    code: "10H",
    image: "http://localhost:8080/images/10_of_hearts.png",
    value: 10,
  },
  {
    code: "10S",
    image: "http://localhost:8080/images/10_of_spades.png",
    value: 10,
  },

  {
    code: "JC",
    image: "http://localhost:8080/images/jack_of_clubs.png",
    value: 11,
  },
  {
    code: "JD",
    image: "http://localhost:8080/images/jack_of_diamonds.png",
    value: 11,
  },
  {
    code: "JH",
    image: "http://localhost:8080/images/jack_of_hearts.png",
    value: 11,
  },
  {
    code: "JS",
    image: "http://localhost:8080/images/jack_of_spades.png",
    value: 11,
  },

  {
    code: "QC",
    image: "http://localhost:8080/images/queen_of_clubs.png",
    value: 12,
  },
  {
    code: "QD",
    image: "http://localhost:8080/images/queen_of_diamonds.png",
    value: 12,
  },
  {
    code: "QH",
    image: "http://localhost:8080/images/queen_of_hearts.png",
    value: 12,
  },
  {
    code: "QS",
    image: "http://localhost:8080/images/queen_of_spades.png",
    value: 12,
  },

  {
    code: "KC",
    image: "http://localhost:8080/images/king_of_clubs.png",
    value: 13,
  },
  {
    code: "KD",
    image: "http://localhost:8080/images/king_of_diamonds.png",
    value: 13,
  },
  {
    code: "KH",
    image: "http://localhost:8080/images/king_of_hearts.png",
    value: 13,
  },
  {
    code: "KS",
    image: "http://localhost:8080/images/king_of_spades.png",
    value: 13,
  },
];

export default cards;
