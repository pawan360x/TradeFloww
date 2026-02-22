const { getNifty } = require("../Controllers/MarketController");
const { getWatchlistData } = require("../Controllers/watchlistController");
const router = require("express").Router(); 

router.get("/watchlist/data",  getWatchlistData); 
router.get("/nifty",  getNifty);

module.exports = router;