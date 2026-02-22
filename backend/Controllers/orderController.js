const { HoldingModel } = require("../models/Holidng-model");
const { OrderModel } = require("../models/Order-model");
const { WatchlistModel } = require("../models/WatchlistModel");
const { FundUpdate } = require("./fundController");




module.exports.getOrderData = async (req, res) => {
    let orderdata = await OrderModel.find();
    res.json(orderdata);
}


module.exports.newOrder =  async (req, res) => {    /////* buy button window - watchlist , buyactionwindow , generalcontext ,  */}

    let stock = await WatchlistModel.findOne({ name: req.body.name });
    let stockDay = stock.day;
    let completed = stock.price == req.body.price;

    let newOrder = new OrderModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
        complete: completed,
    });
   await newOrder.save();

    FundUpdate(req.body, completed);

    if (newOrder.mode === "BUY") {
        if (completed) {
            let holdingStock = await HoldingModel.findOne({ name: req.body.name });
            if (holdingStock) {
                let oldqty = holdingStock.qty;
                let newqty = oldqty + newOrder.qty;
                holdingStock.qty = newqty;
                let holdingTotalAvg = holdingStock.avg * oldqty;
                let orderTotalCost = newOrder.price * newOrder.qty;
                holdingStock.avg = (holdingTotalAvg + orderTotalCost) / newqty;
                await holdingStock.save();
            } else {
                let newHolding = await new HoldingModel({
                    name: newOrder.name,
                    qty: newOrder.qty,
                    avg: newOrder.price,
                    price: newOrder.price,
                    net: 0,
                    day: stockDay,
                })
                await newHolding.save();
            }
        }
    }
    if (newOrder.mode === "SELL") {
        if (completed) {
            let holdingStock = await HoldingModel.findOne({ name: req.body.name });
            if (holdingStock && holdingStock.qty >= newOrder.qty) {
                let oldqty = holdingStock.qty;
                let newqty = oldqty - newOrder.qty;
                holdingStock.qty = newqty;
                await holdingStock.save();
            } else {
                console.log(`You dont have enough qty of ${newOrder.name} `)
            }
        }
    }

    res.json(newOrder);
};