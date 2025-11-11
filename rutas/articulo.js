const express = require("express");
const multer = require("multer");
const router = express.Router();

const almacenamiento = multer.diskStorage({

})

const ArticuloControlador = require("../controladores/articulo");

//Rutas de pruebas
router.get("/ruta-de-prueba", ArticuloControlador.prueba);
router.get("/curso", ArticuloControlador.curso);

//Rutas útiles
router.post("/crear", ArticuloControlador.crear);
router.get("/articulos", ArticuloControlador.listar);
router.get("/articulo/:id", ArticuloControlador.uno);
router.delete("/borrar/:id", ArticuloControlador.borrar);
router.put("/editar/:id", ArticuloControlador.editar);
router.post("/subir-imagen/:id", ArticuloControlador.subir);

module.exports = router;