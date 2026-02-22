const { getFundData } = require("../Controllers/fundController");
const { getHoldingData } = require("../Controllers/holdingController");
const { getPositionData } = require("../Controllers/positionController");
const router = require("express").Router();

router.get("/holdings/data",  getHoldingData);
router.get("/positions/data",  getPositionData);
router.get("/funds/data",   getFundData);

module.exports = router;