require("dotenv").config();

const Express = require("express");
const Mongoose = require("mongoose");
const { HoldingModel } = require("./models/Holidng-model");
const { PositionModel } = require("./models/Position-model");
const { OrderModel } = require("./models/Order-model");
const { WatchlistModel } = require("./models/WatchlistModel");
const app = Express();
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const { Signup, Login } = require("../backend/Controllers/AuthController");
const { UserVerification } = require("./Middlewares/UserVarification");
const { Nifty } = require("./Middlewares/Nifty");
const { FundModel } = require("./models/FundModel");
const { FundUpdate } = require("./Middlewares/FundUpdate");
const { Logout } = require("./Middlewares/Logout");

const Port = process.env.Port;
const url = process.env.Mongo_url;
const AllowedOrigins = process.env.Client_urls.split(",");

app.use(bodyParser.json()); // for sending data to dashboard through api 

app.use(cors({
    origin: AllowedOrigins,
    credentials: true,
}));
app.use(cookieParser());
// app.use(express.json());
// app.use("/",authRoute);

app.listen(Port, () => {
    console.log("run");
    Mongoose.connect(url);
    console.log("mongo-start");
})



app.get("/holdings/data", async (req, res) => {
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
            let newamount = Number(data[lastDate]["1. open"]);  console.log(obj.name , "------". newamount);
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
});

app.get("/orders/data", async (req, res) => {
    let orderdata = await OrderModel.find();
    res.json(orderdata);
});

app.get("/watchlist/data", async (req, res) => {
    let tempdata = [
        {
            name: "INFY",
            price: 1555.45,
            day: -1.60,
        },
        {
            name: "ONGC",
            price: 116.8,
            day: -0.09,
        },
        {
            name: "TCS",
            price: 3194.8,
            day: -0.25,
        },
        {
            name: "KPITTECH",
            price: 266.45,
            day: 3.54,

        },
        {
            name: "QUICKHEAL",
            price: 308.55,
            day: -0.15,
        },
        {
            name: "WIPRO",
            price: 577.75,
            day: 0.32,

        },
        {
            name: "M&M",
            price: 779.8,
            day: -0.01,
        },
        {
            name: "RELIANCE",
            price: 2112.4,
            day: 1.44,

        },
        {
            name: "HUL",
            price: 512.4,
            day: 1.04,

        },
    ];
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
});

app.get("/positions/data", async (req, res) => {
    let tempPositions = [
        {
            product: "CNC",
            name: "EVEREADY",
            qty: 2,
            avg: 316.27,
            price: 312.35,
            net: 0.58,
            day: -1.24,
            isLoss: true,
        },
        {
            product: "CNC",
            name: "JUBLFOOD",
            qty: 1,
            avg: 3124.75,
            price: 3082.65,
            net: 10.04,
            day: -1.35,
            isLoss: true,
        },
        {
            product: "NRML",
            name: "USDINR 23JUN FUT",
            qty: -1,
            avg: 80.035,
            price: 82.525,
            net: -490,
            day: 0.60,
            isLoss: true,
        },
    ];
    //  await PositionModel.insertMany(tempPositions);
    // await PositionModel.deleteMany({});
    let data = await PositionModel.find();
    //  res.send(data);
    res.json(data);
});

app.get("/fund/data", async (req, res) => {
    let defaultData = new FundModel({
        availableCash: 50000,
        availableMargin: 50000,
        usedMargin: 0,
        openingBalance: 50000,
    })
    // await defaultData.save();
    let fundData = await FundModel.find();
    res.json(fundData);
})


app.post("/newOrder", async (req, res) => {    /////* buy button window - watchlist , buyactionwindow , generalcontext ,  */}

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
    newOrder.save();

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
});

app.get("/nifty", async (req, res) => {
    try {
        const result = await Nifty();
        res.json(result);
    } catch (err) {
        console.log(err, " ========================");

    }
})

app.post("/", UserVerification)
app.post("/signup", Signup);
app.post("/login", Login);
app.post("/logout", Logout);  //// updated for session

