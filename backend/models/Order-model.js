
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
    time: {
        type: String,
        default: () => {
            const now = new Date();
            return now.toLocaleDateString("en-IN") + " " + now.toLocaleTimeString("en-IN");
        }
    },
    complete: Boolean,
});


const OrderModel = mongoose.model("Order", orderSchema);

module.exports = { OrderModel };