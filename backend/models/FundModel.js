const fundSchema = require("../schemas/fundSchema");
const {model} = require("mongoose");

const FundModel = new model("Fund", fundSchema );

module.exports = {FundModel};