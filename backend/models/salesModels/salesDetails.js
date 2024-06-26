const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const salesSchema = new Schema({
    
    productName: {
        type: String,
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    unitPrice: {
        type: Number,
        required: true
    },

    sellingPrice: {
        type: Number,
        required: true
    },

    totalPrice: {
        type: Number,
        required: true
    },

    cusID: {
        type: String,
        required: true
    },

    cusName: {
        type: String,
        required: true
    },

    salesPersonID: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: () => { // Use a function to set the default date
            const today = new Date();
            today.setUTCHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0
            return today;
        }
    },
});

const Sales = mongoose.model("Sales", salesSchema);

module.exports = Sales;