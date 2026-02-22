require("dotenv").config();
const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.Mongo_url);
        console.log("mongodb connected...");

    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb; 
