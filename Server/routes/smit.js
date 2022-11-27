const express = require ('express');
const router = express.Router();
const smitControllers = require ('../Controllers/smitControllers')
const ReceiptController =  require ('../Controllers/ReceiptController')
const ventaController = require ('../Controllers/ventaControllers') 
const inventoryController = require ('../Controllers/inventoryController.js') 

router.post('/product', smitControllers.crearProducto); //save to db
router.get('/product', smitControllers.findall); //get all the db
router.put('/product/:id', smitControllers.actualizarProduto); // update
router.get('/product/:id', smitControllers.obtenerProducto); // serch one
router.delete('/product/:id', smitControllers.eliminarProducto); // delete from db

router.post('/customer', smitControllers.createCustomer);
router.get('/customer', smitControllers.getCustumers); 
router.put('/customer/:id', smitControllers.updateCustomer); 
router.get('/customer/:id', smitControllers.getCustumer); 
router.delete('/customer/:id', smitControllers.deleteCustomer); 

router.post('/receipt', ReceiptController.createReceipts);
router.get('/receipt', ReceiptController.getReceipts); 
router.put('/receipt/:id', ReceiptController.updateReceipt); 
router.get('/receipt/:id', ReceiptController.getReceipt); 
router.delete('/receipt/:id', ReceiptController.deleteReceipt); 

router.post('/venta', ventaController.createVentas);
router.get('/venta', ventaController.findall); 
router.put('/venta/:id', ventaController.updateVenta); 
router.get('/venta/:id', ventaController.getVenta); 
router.delete('/venta/:id', ventaController.deleteVenta);

router.post('/inventory', inventoryController.createInventorys);
router.get('/inventory', inventoryController.findall); 
router.put('/inventory/:id', inventoryController.updateInventory); 
router.get('/inventory/:id', inventoryController.getInventory); 
router.delete('/inventory/:id', inventoryController.deleteInventory);

module.exports = router;