const { dbConnection } = require ("./database/connection");
const express = require("express");
const cors = require("cors");


dbConnection();

console.log("hola mundo");

//Crear servidor Node
const app = express ();
const puerto = 3900;

//Configurar cors
app.use( cors());

//Convertir body a objeto js
app.use( express.json()); //Recibir datos con content-type app/json
app.use( express.urlencoded({ extended:true})); //form-urlencoded

//RUTAS
const rutas_articulo = require ("./rutas/articulo");

//Cargo las rutas
app.use("/api", rutas_articulo);

//Rutas prueba harcodeadas
app.get("/probando", (req, res) => {
    
    console.log("Ruta probando funcionando");

    return res.status(200).json([{
        curso : "Master en React",
        autor : "Jose Antonio Varela",
        url : "joseantoniovarela.com"
        
        
    }]);


});

//Crear servidor y escuchar peticiones http
app.listen(puerto, () => {
    console.log("Servidor corriendo en el puerto" + puerto);

});