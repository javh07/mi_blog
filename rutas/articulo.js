const express = require("express");
const router = express.Router();    

const ArticuloControlador = require("../controladores/articulo");

//Rutas de pruebas
router.get("/ruta-de-prueba", ArticuloControlador.prueba);
router.get("/curso", ArticuloControlador.curso);
router.get("/crear", ArticuloControlador.crear);
router.get("/saludo", ArticuloControlador.saludo);
router.get("/despedida", ArticuloControlador.despedida);



module.exports = router;



