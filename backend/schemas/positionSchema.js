const {Schema} = require("mongoose");

const positionSchema = new Schema ({
    product:String,
    name:String,
    qty: Number,
    avg: Number,
    price: Number,
    net:String,
    day:Number,
    isLoss:Boolean,
});

module.exports= {positionSchema};