const validator = require("validator");
const Articulo = require("../modelos/Articulo");


const prueba = (req, res) => {
    return res.status(200).json({
        mensaje: "Acción de prueba en mi controlador de artículos"
    });
};

const curso = (req, res) => {
    
    console.log("Ruta probando funcionando");

    return res.status(200).json([{
        curso : "Master en React",
        autor : "Jose Antonio Varela",
        url : "joseantoniovarela.com"
        
        
    }]);
};



const crear = async (req, res) => {

    
    //Recoger paramámetros por POST a guardar
    let parametros = req.body;
    //Validar datos
    try{
        let validar_titulo = !validator.isEmpty(parametros.titulo) &&
        validator.isLength(parametros.titulo, { min: 5, max: undefined});
        let validar_contenido = !validator.isEmpty(parametros.contenido);
        
        if(!validar_titulo || !validar_contenido){
            throw new Error("No se ha validado la información");

        }

        }catch(error){
        return res.status(400).json({
            mensaje: "Faltan datos por enviar"
        });
    }

    //Crear el objeto a guardar
    const articulo = new Articulo(parametros);
    //Asignar valores a objeto basado en el modelo (manual o automático)
    //articulo.titulo = parametros.titulo;


    //Guardar el articulo en la base de datos
    try {
        const articuloGuardado = await articulo.save();
        return res.status(200).json({ articulo: articuloGuardado });
      } catch (err) {
        console.error(err);
        return res.status(500).send({ mensaje: 'Error al guardar' });
      }

      //Devolver resultado
      return res.status(200).json({
        status: "success",
        articulo: articuloGuardado,
        mensaje: "Artículo creado con éxito!!"
    })

}

const listar = async (req, res) => {
    try {
        const articulos = await Articulo.find({});

        if (!articulos || articulos.length === 0) {
            return res.status(404).json({
                status: 'error',
                mensaje: 'No se han encontrado artículos'
            });
        }

        return res.status(200).json({
            status: 'success',
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

module.exports = {
    prueba, 
    curso,
    crear,
    listar
   
};









