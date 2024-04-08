const express = require('express');
require('./db/mongoose')
const cors = require('cors');

const offerRouter = require('./routes/offers');
const promotionRouter = require('./routes/promotions');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use(offerRouter);
app.use(promotionRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;