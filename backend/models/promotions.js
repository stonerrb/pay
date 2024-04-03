const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({
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
    details: {
        type: [String],
        required: true
    },
    terms_conditions: {
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
    },
    expiration:{
        type: Date,
        required: true
    }
});

const PromotionModel = mongoose.model('Promotion', promotionSchema);

module.exports = PromotionModel;