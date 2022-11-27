const Customer = require("../Models/Customer");
const Producto = require("../Models/Producto");

exports.crearProducto = async (req, res) => {
    try {
        let producto;

        producto = new Producto(req.body);

        await producto.save();
        res.send (producto)

    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error")
    }
}

exports.obtenerProductos = async (req,res) => {
    try {

        const productos = await Producto.find();
        res.json(productos);

    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error")
    }
};

exports.actualizarProduto = async (req,res) => {
    try {
        const {product, name, price, size, color, date} = req.body;
        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({ msg: "No existe el producto"})
        }

        producto.product = product;
        producto.name = name;
        producto.price = price;
        producto.size = size;
        producto.color = color;
        
        
        producto = await Producto.findOneAndUpdate({_id: req.params.id}, producto, {new: true})
        res.json(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error")
    }
}

exports.obtenerProducto = async (req,res) => {
    try {
        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({ msg: "No existe el producto"})
        }
        
        res.json(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error")
    }
}

exports.findall = (req, res) => {
    const product = req.query.product;
    var condition = product ? { product: { $regex: new RegExp(product), $options: "i"}} : {};
    
    Producto.find(condition)
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

exports.eliminarProducto = async (req,res) => {
    try {
        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({ msg: "No existe el producto"})
        }
        
        await Producto.findOneAndDelete({_id: req.params.id})
        res.json({ msg: "Producto eliminado"});

    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error")
    }
} 

//CONTROLLERS CUSTOMER

exports.createCustomer = async (req, res) => {
    try {
        let customer;

        customer = new Customer(req.body);

        await customer.save();
        res.send (customer)

    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error")
    }
}

exports.getCustumers = async (req,res) => {
    try {

        const customer = await Customer.find();
        res.json(customer);

    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error")
    }
};

exports.updateCustomer = async (req,res) => {
    try {
        const {document, name, phone, address, email, date} = req.body;
        let customer = await Customer.findById(req.params.id);

        if(!customer){
            res.status(404).json({ msg: "Customer doesn't exist"})
        }

        customer.document = document;
        customer.name = name;
        customer.phone = phone;
        customer.address = address;
        customer.email = email;
        
        
        customer = await Customer.findOneAndUpdate({_id: req.params.id}, customer, {new: true})
        res.json(customer);

    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error")
    }
}

exports.getCustumer = async (req,res) => {
    try {
        let customer = await Customer.findById(req.params.id);

        if(!customer){
            res.status(404).json({ msg: "No existe el producto"})
        }
        
        res.json(customer);

    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error")
    }
}

exports.deleteCustomer = async (req,res) => {
    try {
        let customer = await Customer.findById(req.params.id);

        if(!customer){
            res.status(404).json({ msg: "Customer not found"})
        }
        
        await Customer.findOneAndDelete({_id: req.params.id})
        res.json({ msg: "Customer deleted"});

    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error")
    }
} 


