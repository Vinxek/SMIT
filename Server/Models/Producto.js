const mongoose = require('mongoose');

const ProductoScheme =  mongoose.Schema({
    product: {
        type:String,
        require: true
    },

    name: {
        type:String,
        require: true
    },

    price: {
        type:Number,
        require: true
    },

    size: {
        type:String,
        require: true
    },

    color: {
        type:String,
        require: true
    },

    date: {
        type:Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Products", ProductoScheme);
