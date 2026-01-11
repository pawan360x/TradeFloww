const {Schema} = require("mongoose");

const WatchlistSchema = new Schema ({
    name:String,
    price: Number,
    day:String,
});

module.exports= {WatchlistSchema};