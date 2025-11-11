const { validarArticulo } = require("../helpers/validar");
const Articulo = require("../modelos/Articulo");


const prueba = (req, res) => {
    return res.status(200).json({
        mensaje: "Acción de prueba en mi controlador de artículos"
    });
};

const curso = (req, res) => {

    console.log("Ruta probando funcionando");

    return res.status(200).json([{
        curso: "Master en React",
        autor: "Jose Antonio Varela",
        url: "joseantoniovarela.com"


    }]);
};



const crear = async (req, res) => {
    //Recoger parámetros por POST a guardar
    const parametros = req.body;

    //Validar datos
    try {
        validarArticulo(parametros);
    } catch (error) {
        return res.status(400).json({
            status: "error",
            mensaje: error.message
        });
    }

    //Crear el objeto a guardar
    const articulo = new Articulo(parametros);

    //Guardar el articulo en la base de datos
    try {
        const articuloGuardado = await articulo.save();
        return res.status(201).json({
            status: "success",
            articulo: articuloGuardado,
            mensaje: "Artículo creado con éxito"
        });
    } catch (err) {
        console.error(err);
        if (err.name === 'ValidationError') {
            return res.status(400).json({
                status: "error",
                mensaje: "Error de validación",
                errors: err.errors
            });
        }
        return res.status(500).json({
            status: "error",
            mensaje: "Error al guardar el artículo"
        });
    }
}

const listar = async (req, res) => {
    try {
        const articulos = await Articulo.find({})

            .limit(3)
            .sort({ fecha: -1 });

        if (!articulos || articulos.length === 0) {
            return res.status(404).json({
                status: 'error',
                mensaje: 'No se han encontrado artículos'
            });
        }

        return res.status(200).json({
            status: 'success',
            contador: articulos.length,
            articulos
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 'error',
            mensaje: 'Error al obtener los artículos'
        });
    }
};

const uno = async (req, res) => {
    try {
        // Recoger el id de la url
        const id = req.params.id;

        // Buscar el artículo usando async/await
        const articulo = await Articulo.findById(id);

        // Si no existe, devolver error
        if (!articulo) {
            return res.status(404).json({
                status: 'error',
                mensaje: 'No se ha encontrado el artículo'
            });
        }

        // Devolver resultado
        return res.status(200).json({
            status: 'success',
            articulo
        });

    } catch (error) {
        console.error(error);

        // Si el ID no es válido (error de formato)
        if (error.name === 'CastError') {
            return res.status(400).json({
                status: 'error',
                mensaje: 'ID de artículo no válido'
            });
        }

        // Cualquier otro error
        return res.status(500).json({
            status: 'error',
            mensaje: 'Error al obtener el artículo'
        });
    }
}

const borrar = async (req, res) => {
    try {
        const articulo_id = req.params.id;

        // Borrar el artículo usando async/await
        const articuloBorrado = await Articulo.findOneAndDelete({ _id: articulo_id });

        // Si no existe, devolver error
        if (!articuloBorrado) {
            return res.status(404).json({
                status: 'error',
                mensaje: 'No se ha encontrado el artículo a borrar'
            });
        }

        return res.status(200).json({
            status: 'success',
            articulo: articuloBorrado,
            mensaje: 'Artículo borrado correctamente'
        });

    } catch (error) {
        console.error(error);

        // Si el ID no es válido (error de formato)
        if (error.name === 'CastError') {
            return res.status(400).json({
                status: 'error',
                mensaje: 'ID de artículo no válido'
            });
        }

        return res.status(500).json({
            status: 'error',
            mensaje: 'Error al borrar el artículo'
        });
    }
}

const editar = async (req, res) => {
    //Recoger el id del artículo por la url
    const articuloId = req.params.id;

    //Recoger datos del body
    const parametros = req.body;

    //Validar datos
    try {
        validarArticulo(parametros);
    } catch (error) {
        return res.status(400).json({
            status: "error",
            mensaje: error.message
        });
    }

    //Buscar y actualizar el artículo
    try {
        const actualizado = await Articulo.findOneAndUpdate({ _id: articuloId }, parametros, { new: true });

        if (!actualizado) {
            return res.status(404).json({
                status: 'error',
                mensaje: 'No se ha encontrado el artículo a actualizar'
            });
        }

        return res.status(200).json({
            status: 'success',
            articulo: actualizado,
            mensaje: 'Artículo actualizado correctamente'
        });
    } catch (error) {
        console.error(error);
        if (error.name === 'CastError') {
            return res.status(400).json({
                status: 'error',
                mensaje: 'ID de artículo no válido'
            });
        }
        return res.status(500).json({
            status: 'error',
            mensaje: 'Error al actualizar el artículo'
        });
    }
}

const subir = (req, res) => {

//Configurar multer

//Recoger el fichero de imagen subido

//Nombre del archivo

//Extensión del archivo

//Combrobar extension correcta

//Si todo va bien, actualizar el artículo







    return res.status(200).json({
        status: "success"
    });
}







module.exports = {
    prueba,
    curso,
    crear,
    listar,
    uno,
    borrar,
    editar, 
    subir

};












