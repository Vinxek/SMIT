const express = require ('express');
const conectarDB = require ('./config/db');
const cors = require('cors')

//servidor

const app = express();


//Conectar a base de datos

conectarDB();
app.use(cors());
app.use(express.json());
app.use('/api', require('./routes/smit'));


//Rutas

app.get('/', (req,res)=>{
    res.send('hello world')
})

app.listen(4000, () =>{
    console.log("El servidor esta corriendo")
})
    