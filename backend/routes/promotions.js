const express = require("express");
const router = express.Router();

const Promotion = require("../models/promotions");

router.use(express.json());

router.get("/get-promotion", async (req, res) => {
  try {
    const promotions = await Promotion.find({});
    res.status(200).send(promotions);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/get-promotion/:id", async (req, res) => {
  try {
    const promotion = await Promotion.findById(req.params.id);
    res.status(200).send(promotion);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/add-promotion", (req, res) => {
  try {
    let currentDate = new Date();
    let expirationDate = new Date(
      currentDate.getTime() + 7 * 24 * 60 * 60 * 1000
    ); //one week
    let expiration = expirationDate.toISOString().slice(0, 10); //DD-MM-YYYY

    const promotion = new Promotion(req.body);
    promotion.expiration = expiration;
    promotion.save();
    res.send(promotion);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
