const {holdingSchema} = require("../schemas/holdingSchema");
const {model} = require("mongoose");

const HoldingModel = new model("Holding", holdingSchema );

module.exports = {HoldingModel};