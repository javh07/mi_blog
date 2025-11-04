const express = require("express");
const router = express.Router();    

const ArticuloControlador = require("../controladores/articulo");

//Rutas de pruebas
router.get("/ruta-de-prueba", ArticuloControlador.prueba);
router.get("/curso", ArticuloControlador.curso);

//Rutas útiles
router.get("/crear", ArticuloControlador.crear);
router.get("/articulos", ArticuloControlador.listar);

module.exports = router;