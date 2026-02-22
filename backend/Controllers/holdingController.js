const axios = require("axios");
const { HoldingModel } = require("../models/Holidng-model");


module.exports.getHoldingData = async (req, res) => {
    // let tempHoldinds = [
    //     {
    //         name: "BHARTIARTL",
    //         qty: 2,
    //         avg: 538.05,
    //         price: 541.15,
    //         net: "+0.58%",
    //         day: "+2.99%",
    //     },
    //     {
    //         name: "HDFCBANK",
    //         qty: 2,
    //         avg: 1383.4,
    //         price: 1522.35,
    //         net: "+10.04%",
    //         day: "+0.11%",
    //     },
    //     {
    //         name: "HINDUNILVR",
    //         qty: 1,
    //         avg: 2335.85,
    //         price: 2417.4,
    //         net: "+3.49%",
    //         day: "+0.21%",
    //     },
    //     {
    //         name: "INFY",
    //         qty: 1,
    //         avg: 1350.5,
    //         price: 1555.45,
    //         net: "+15.18%",
    //         day: "-1.60%",
    //         isLoss: true,
    //     },
    //     {
    //         name: "ITC",
    //         qty: 5,
    //         avg: 202.0,
    //         price: 207.9,
    //         net: "+2.92%",
    //         day: "+0.80%",
    //     },
    //     {
    //         name: "KPITTECH",
    //         qty: 5,
    //         avg: 250.3,
    //         price: 266.45,
    //         net: "+6.45%",
    //         day: "+3.54%",
    //     },
    //     {
    //         name: "M&M",
    //         qty: 2,
    //         avg: 809.9,
    //         price: 779.8,
    //         net: "-3.72%",
    //         day: "-0.01%",
    //         isLoss: true,
    //     },
    //     {
    //         name: "RELIANCE",
    //         qty: 1,
    //         avg: 2193.7,
    //         price: 2112.4,
    //         net: "-3.71%",
    //         day: "+1.44%",
    //     },
    //     {
    //         name: "SBIN",
    //         qty: 4,
    //         avg: 324.35,
    //         price: 430.2,
    //         net: "+32.63%",
    //         day: "-0.34%",
    //         isLoss: true,
    //     },
    //     {
    //         name: "TATAPOWER",
    //         qty: 5,
    //         avg: 104.2,
    //         price: 124.15,
    //         net: "+19.15%",
    //         day: "-0.24%",
    //         isLoss: true,
    //     },
    //     {
    //         name: "TCS",
    //         qty: 1,
    //         avg: 3041.7,
    //         price: 3194.8,
    //         net: "+5.03%",
    //         day: "-0.25%",
    //         isLoss: true,
    //     },
    //     {
    //         name: "WIPRO",
    //         qty: 4,
    //         avg: 489.3,
    //         price: 577.75,
    //         net: "+18.08%",
    //         day: "+0.32%",

    //     },];

    //  await HoldingModel.insertMany(tempHoldinds);
    // await HoldingModel.deleteMany({});

    //// updating data by api 

    let modeldata = await HoldingModel.find();

    //// modeldata.map(async (obj) => {
    let api = ["5SP6V3YS00RSIG",
        "R6BMFDXU6YOII5K6",
        "A6ZF07KA5IO6BN9S",
        "5SP6V3YS00RSI2V8",
        "6CPO2BRIU23VIMI1",];
    modeldata.map(async (obj) => {
        // for (const obj of modeldata) {
        try {

            const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${obj.name}.BSE&outputsize=compact&apikey=6CPO2BRIU23VIMI1`);
            let data = response.data["Time Series (Daily)"];

            if (!data) {
                return;
                // continue;
            }

            let lastDate = Object.keys(data)[0];
            let newamount = Number(data[lastDate]["1. open"]); console.log(obj.name, "------".newamount);
            obj.price = newamount;

            let net = ((newamount / obj.avg) * 100) - 100;
            obj.net = (net).toFixed(2);

            let closeAmount = Number(data[lastDate]["4. close"]);
            let day = ((closeAmount - newamount) / newamount) * 100;
            obj.day = (day).toFixed(2);

            await obj.save();

        } catch (err) {
            console.log(err, " ========================");
        }
    }
    )
    res.json(modeldata);
}