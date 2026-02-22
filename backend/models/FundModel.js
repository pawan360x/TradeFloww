const mongoose = require("mongoose");

const fundSchema = new mongoose.Schema({
    availableCash: { type: Number, default: 0 },
    availableMargin: { type: Number, default: 0 },
    usedMargin: { type: Number, default: 0 },
    openingBalance: { type: Number, default: 0 }, // optional
});

const FundModel = mongoose.model("Fund", fundSchema);

module.exports = { FundModel };