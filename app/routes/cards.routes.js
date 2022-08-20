const express = require("express");
const router = express.Router();
const { getCard } = require("../controllers/cards.controllers");

router.route("/").get(getCard);
module.exports = router;
