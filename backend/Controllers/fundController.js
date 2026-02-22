const { FundModel } = require("../models/FundModel");




module.exports.getFundData= async (req, res) => {
    let defaultData = new FundModel({
        availableCash: 50000,
        availableMargin: 50000,
        usedMargin: 0,
        openingBalance: 50000,
    })
    // await defaultData.save();
    let fundData = await FundModel.find();
    res.json(fundData);
}; 

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