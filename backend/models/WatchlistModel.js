const mongoose = require("mongoose");

const WatchlistSchema = new mongoose.Schema ({
    name:String,
    price: Number,
    day:String,
});


const WatchlistModel =  mongoose.model("Watchlist", WatchlistSchema );

module.exports = {WatchlistModel};