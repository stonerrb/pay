const express = require("express");
const router = express.Router();

const Offer = require("../models/offers");

router.use(express.json());

router.get("/get-offers", async (req, res) => {
  try {
    const offers = await Offer.find({});
    res.status(200).send(offers);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/add-offer", async (req, res) => {
  try {
    const offer = new Offer(req.body);
    await offer.save();
    res.status(201).send(offer);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
