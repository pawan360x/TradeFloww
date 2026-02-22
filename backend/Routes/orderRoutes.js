const { getOrderData, newOrder } = require("../Controllers/orderController");
const router = require("express").Router();


router.get("/data", getOrderData);
router.post("/newOrder",  newOrder);

module.exports = router;