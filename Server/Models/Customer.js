const mongoose = require('mongoose');

const CustomerScheme =  mongoose.Schema({
    document: {
        type:String,
        require: true,
        
    },

    name: {
        type:String,
        require: true
    },

    phone: {
        type:Number,
        require: true
    },

    address: {
        type:String,
        require: true
    },

    email: {
        type:String,
        require: true
    },

    date: {
        type:Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Customers", CustomerScheme);