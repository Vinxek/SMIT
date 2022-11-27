const Receipt = require("../Models/Receipt") 

exports.createReceipts = async (req, res) => {
    try {
        let receipt;

        receipt = new Receipt(req.body);

        await receipt.save();
        res.send (receipt)

    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error")
    }
}

exports.getReceipts = async (req,res) => {
    try {

        const receipt = await Receipt.find();
        res.json(receipt);

    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error")
    }
};

exports.updateReceipt= async (req,res) => {
    try {
        const {receiptCode, document, purchase, date} = req.body;
        let receipt = await Receipt.findById(req.params.id);

        if(!receipt){
            res.status(404).json({ msg: "No existe el receipt"})
        }

        receipt.receiptCode = receiptCode;
        receipt.document = document;
        receipt.purchase = purchase;
        receipt.date = date;
        
        
        receipt = await Receipt.findOneAndUpdate({_id: req.params.id}, receipt, {new: true})
        res.json(receipt);

    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error")
    }
}

exports.getReceipt = async (req,res) => {
    try {
        let receipt = await Receipt.findById(req.params.id);

        if(!receipt){
            res.status(404).json({ msg: "No existe el receipt"})
        }
        
        res.json(receipt);

    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error")
    }
}

exports.findall = (req, res) => {
    const receipt = req.query.receipt;
    var condition = receipt ? { receipt: { $regex: new RegExp(receipt), $options: "i"}} : {};
    
    Receipt.find(condition)
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

exports.deleteReceipt = async (req,res) => {
    try {
        let receipt = await Receipt.findById(req.params.id);

        if(!receipt){
            res.status(404).json({ msg: "No existe el receipt"})
        }
        
        await Receipt.findOneAndDelete({_id: req.params.id})
        res.json({ msg: "Receipt eliminado"});

    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error")
    }
} 


