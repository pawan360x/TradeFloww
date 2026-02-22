require("dotenv").config();

const Express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectDb = require("./config/db");

const authRoute = require("./Routes/authRoutes");
const marketRoute = require("./Routes/marketRoutes");
const orderRoutes = require("./Routes/orderRoutes");
const portfolioRoutes = require("./Routes/portfolioRoutes");
const { verify } = require("./Middlewares/verifyToken");

const app = Express();
const Port = process.env.Port;
const AllowedOrigins = process.env.Client_urls.split(",");

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({
    origin: AllowedOrigins,
    credentials: true,
}));

app.use("/auth", authRoute);
app.use("/market",verify, marketRoute);
app.use("/orders",verify, orderRoutes);
app.use("/portfolio",verify, portfolioRoutes);

const startServer = async () => {
    try {
        await connectDb();
        app.listen(Port, () => {
            console.log("server running...");
        })
    }
    catch (e) {
        console.log(e);
    }
}

startServer(); 
