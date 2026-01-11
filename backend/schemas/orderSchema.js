const {Schema} = require("mongoose");

const orderSchema = new Schema ({
    name:String,
    qty: Number,
    price: Number,
    mode:String,
    time:{
        type: String,
        default: () => {
            const now = new Date();
            return now.toLocaleDateString("en-IN") + " " + now.toLocaleTimeString("en-IN");
        }
    },
    complete:Boolean,
});

module.exports= {orderSchema};