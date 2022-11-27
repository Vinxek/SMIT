const mongoose = require('mongoose');

const ReceiptScheme =  mongoose.Schema({
    receiptCode: {
        type:String,
        require: true
    },

    document: {
        type:String,
        require: true
    },

    purchase: {
        type:Object,
        require: true
    },

    date: {
        type:Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Receipt", ReceiptScheme);