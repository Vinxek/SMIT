const mongoose = require('mongoose');

const VentaScheme =  mongoose.Schema({

    Cedula: {
        type:String,
        require: true
    },

    Purchase: {
        type:Object,
        require: true
    },

    receipt: {
        type:String,
        require: true
    },

    date: {
        type:Date,
        default: Date.now()
    },

    amount:{
        type:Number,
        require: true
    }
});

module.exports = mongoose.model("Venta", VentaScheme);