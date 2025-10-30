const {Schema, model} = require("mongoose");
const { link } = require("../rutas/articulo");

const ArticuloSchema = Schema({
    titulo: {
    type: String,
    required: true
    },
    contenido: {
    type: String,
    required: true
    },
    fecha: {
    type: Date,
    default: Date.now
    },
    imagen: {
    type: String,
    default: "default.png"
    }
    ,

    link: {
        type: String,
        required: false
    } ,

    Numero_edicion: {
        type: Number,
        required: true
    }
});

module.exports = model("Articulo", ArticuloSchema, "articulos");
                       //aticulos