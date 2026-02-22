const { WatchlistModel } = require("../models/WatchlistModel");
const axios = require("axios");

module.exports.getWatchlistData = async (req, res) => {

    // let tempdata = [
    //     {
    //         name: "INFY",
    //         price: 1555.45,
    //         day: -1.60,
    //     },
    //     {
    //         name: "ONGC",
    //         price: 116.8,
    //         day: -0.09,
    //     },
    //     {
    //         name: "TCS",
    //         price: 3194.8,
    //         day: -0.25,
    //     },
    //     {
    //         name: "KPITTECH",
    //         price: 266.45,
    //         day: 3.54,

    //     },
    //     {
    //         name: "QUICKHEAL",
    //         price: 308.55,
    //         day: -0.15,
    //     },
    //     {
    //         name: "WIPRO",
    //         price: 577.75,
    //         day: 0.32,

    //     },
    //     {
    //         name: "M&M",
    //         price: 779.8,
    //         day: -0.01,
    //     },
    //     {
    //         name: "RELIANCE",
    //         price: 2112.4,
    //         day: 1.44,

    //     },
    //     {
    //         name: "HUL",
    //         price: 512.4,
    //         day: 1.04,

    //     },
    // ];

    // await WatchlistModel.insertMany(tempdata);
    
    let orderdata = await WatchlistModel.find();

    orderdata.map(async (obj) => {
        try {

            const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${obj.name}.BSE&outputsize=compact&apikey=A6ZF07KA5IO6BN9S`);
            let data = response.data["Time Series (Daily)"];

            if (!data) {
                return;
            }

            let lastDate = Object.keys(data)[0];
            let newamount = Number(data[lastDate]["1. open"]);
            obj.price = newamount;

            let closeAmount = Number(data[lastDate]["4. close"]);
            let day = ((closeAmount - newamount) / newamount) * 100;
            obj.day = (day).toFixed(2);

            await obj.save();

        } catch (err) {
            console.log(err, " ========================");
        }
    })

    res.json(orderdata);
};