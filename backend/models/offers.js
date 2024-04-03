const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    offer: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    likes_count: {
        type: Number,
        default: 0
    },
    details: {
        type: [String],
        required: true
    },
    icon_uri: {
        type: String,
        required: false
    },
    image_uri: {
        type: String,
        required: false
    }
});

const OfferModel = mongoose.model('Offer', offerSchema);

module.exports = OfferModel;
