const Inventory = require("../Models/Inventory.js") 

exports.createInventorys = async (req, res) => {
    try {
        let inventory;

        inventory = new Inventory(req.body);

        await inventory.save();
        res.send (inventory)

    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error")
    }
}

exports.getInventorys = async (req,res) => {
    try {

        const inventory = await Inventory.find();
        res.json(inventory);

    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error")
    }
};

exports.updateInventory= async (req,res) => {
    try {
        const {inventoryNumber, product, date} = req.body;
        let inventory = await Inventory.findById(req.params.id);

        if(!inventory){
            res.status(404).json({ msg: "No existe el inventory"})
        }

        inventory.inventoryNumber = inventoryNumber;
        inventory.product = product;
        inventory.date = date;
        
        inventory = await Inventory.findOneAndUpdate({_id: req.params.id}, inventory, {new: true})
        res.json(inventory);

    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error")
    }
}

exports.getInventory = async (req,res) => {
    try {
        let inventory = await Inventory.findById(req.params.id);

        if(!inventory){
            res.status(404).json({ msg: "No existe la inventory"})
        }
        
        res.json(inventory);

    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error")
    }
}

exports.findall = (req, res) => {
    const inventory = req.query.inventory;
    var condition = inventory ? { inventory: { $regex: new RegExp(inventory), $options: "i"}} : {};
    
    Inventory.find(condition)
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message:
                err.message || "An Error has ocurred"
            });
        });
};

exports.deleteInventory = async (req,res) => {
    try {
        let inventory = await Inventory.findById(req.params.id);

        if(!inventory){
            res.status(404).json({ msg: "No existe el inventory"})
        }
        
        await Inventory.findOneAndDelete({_id: req.params.id})
        res.json({ msg: "Inventory eliminado"});

    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error")
    }
} 


