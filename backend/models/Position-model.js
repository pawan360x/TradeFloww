const {positionSchema} = require("../schemas/positionSchema");
const {model} = require("mongoose");

const PositionModel = new model("Position", positionSchema );

module.exports = {PositionModel};