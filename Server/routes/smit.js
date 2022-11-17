const express = require ('express');
const router = express.Router();
const smitControllers = require ('../Controllers/smitControllers')

router.post('/product', smitControllers.crearProducto); //save to db
router.get('/product', smitControllers.obtenerProductos); //get all the db
router.put('/product/:id', smitControllers.actualizarProduto); // update
router.get('/product/:id', smitControllers.obtenerProducto); // serch one
router.delete('/product/:id', smitControllers.eliminarProducto); // delete from db


router.post('/customer', smitControllers.createCustomer);
router.get('/customer', smitControllers.getCustumers); 
router.put('/customer/:id', smitControllers.updateCustomer); 
router.get('/customer/:id', smitControllers.getCustumer); 
router.delete('/customer/:id', smitControllers.deleteCustomer); 

module.exports = router;