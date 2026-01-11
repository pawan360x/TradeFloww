const {orderSchema} = require("../schemas/orderSchema");
const {model} = require("mongoose");

const OrderModel = new model("Order", orderSchema );

module.exports = {OrderModel};