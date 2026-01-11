const { FundModel } = require("../models/FundModel");


module.exports.FundUpdate = async (orderData, completed) => {

    let fundData = await FundModel.findOne({})
    let orderCost = orderData.price * orderData.qty;
    let avlFundCash = fundData.availableCash;
    let avlFundMargin = fundData.availableMargin;
    let avlUsedMargin = fundData.usedMargin;
    

    if (completed && orderData.mode == "BUY") {

        fundData.availableCash = avlFundCash - orderCost;
        fundData.availableMargin = avlFundMargin - orderCost

        await fundData.save();
    }
    if (completed === false && orderData.mode == "BUY") {
          fundData.availableMargin = avlFundMargin - orderCost;
          fundData.usedMargin = avlUsedMargin+orderCost;
          await fundData.save();
    }

    if (completed && orderData.mode == "SELL") {

        fundData.availableCash = avlFundCash + orderCost;
        fundData.availableMargin = avlFundMargin + orderCost;

        await fundData.save();
    }
   


    console.log({ orderData });
    console.log(completed);
}