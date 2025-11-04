const {Schema, model} = require("mongoose");


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
        required: false
    }
});

module.exports = model("Articulo", ArticuloSchema, "articulos");
                       //aticulos