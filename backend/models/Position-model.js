const mongoose = require("mongoose");

const positionSchema = new mongoose.Schema ({
    product:String,
    name:String,
    qty: Number,
    avg: Number,
    price: Number,
    net:String,
    day:Number,
    isLoss:Boolean,
});

const PositionModel = mongoose.model("Position", positionSchema );

module.exports = {PositionModel};