const mongoose = require('mongoose');

const InventoryScheme =  mongoose.Schema({
    inventoryNumber: {
        type:Number,
        require: true
    },

    product: {
        type:Object,
        require: true
    },

    date: {
        type:Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Inventory", InventoryScheme);