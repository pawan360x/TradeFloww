const { PositionModel } = require("../models/Position-model");


module.exports.getPositionData = 
 async (req, res) => {

    // let tempPositions = [
    //     {
    //         product: "CNC",
    //         name: "EVEREADY",
    //         qty: 2,
    //         avg: 316.27,
    //         price: 312.35,
    //         net: 0.58,
    //         day: -1.24,
    //         isLoss: true,
    //     },
    //     {
    //         product: "CNC",
    //         name: "JUBLFOOD",
    //         qty: 1,
    //         avg: 3124.75,
    //         price: 3082.65,
    //         net: 10.04,
    //         day: -1.35,
    //         isLoss: true,
    //     },
    //     {
    //         product: "NRML",
    //         name: "USDINR 23JUN FUT",
    //         qty: -1,
    //         avg: 80.035,
    //         price: 82.525,
    //         net: -490,
    //         day: 0.60,
    //         isLoss: true,
    //     },
    // ];
    //  await PositionModel.insertMany(tempPositions);
    // await PositionModel.deleteMany({});

    let data = await PositionModel.find();
    res.json(data);
};