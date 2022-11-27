const Venta = require("../Models/Venta.js") 

exports.createVentas = async (req, res) => {
    try {
        let venta;

        venta = new Venta(req.body);

        await venta.save();
        res.send (venta)

    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error")
    }
}

exports.getVentas = async (req,res) => {
    try {

        const venta = await Venta.find();
        res.json(venta);

    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error")
    }
};

exports.updateVenta= async (req,res) => {
    try {
        const {cedula, purchase, receipt, date, amount} = req.body;
        let venta = await Venta.findById(req.params.id);

        if(!venta){
            res.status(404).json({ msg: "No existe el venta"})
        }

        venta.cedula = cedula;
        venta.purchase = purchase;
        venta.receipt = receipt;
        venta.date = date;
        venta.amount = amount;
        
        
        venta = await Venta.findOneAndUpdate({_id: req.params.id}, venta, {new: true})
        res.json(venta);

    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error")
    }
}

exports.getVenta = async (req,res) => {
    try {
        let venta = await Venta.findById(req.params.id);

        if(!venta){
            res.status(404).json({ msg: "No existe la venta"})
        }
        
        res.json(venta);

    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error")
    }
}

exports.findall = (req, res) => {
    const venta = req.query.venta;
    var condition = venta ? { venta: { $regex: new RegExp(venta), $options: "i"}} : {};
    
    Venta.find(condition)
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

exports.deleteVenta = async (req,res) => {
    try {
        let venta = await Venta.findById(req.params.id);

        if(!venta){
            res.status(404).json({ msg: "No existe el venta"})
        }
        
        await Venta.findOneAndDelete({_id: req.params.id})
        res.json({ msg: "Venta eliminado"});

    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error")
    }
} 


